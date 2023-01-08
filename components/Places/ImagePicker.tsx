import { Alert, Image, Text, View, StyleSheet } from "react-native";
import {
	launchCameraAsync,
	useCameraPermissions,
	PermissionStatus,
} from "expo-image-picker";
import { useEffect, useState } from "react";
import { Colors } from "../../constants/colors";
import OutlinedButton from "../UI/OutlinedButton";

interface Props {
	onTakeImage: (imageUri: string) => void;
}

export default function ImagePicker(props: Props) {
	const { onTakeImage } = props;
	const [cameraPermissionInformation, requestPermission] =
		useCameraPermissions();
	const [imageUri, setImageUri] = useState<string | null>(null);

	useEffect(() => {
		if (imageUri) {
			onTakeImage(imageUri);
		}
	}, [imageUri]);

	async function verifyPermissions() {
		if (cameraPermissionInformation) {
			if (
				cameraPermissionInformation.status === PermissionStatus.UNDETERMINED
			) {
				const permissionResponse = await requestPermission();

				return permissionResponse.granted;
			}

			if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
				Alert.alert(
					"Permission Denied",
					"You need to grant camera permissions to use this app."
				);
				return false;
			}
		}

		return true;
	}

	async function takeImageHandler() {
		const hasPermission = await verifyPermissions();

		if (!hasPermission) {
			return;
		}

		const image = await launchCameraAsync({
			allowsEditing: true,
			aspect: [16, 9],
			quality: 0.5,
		});

		setImageUri(image.assets && image.assets[0].uri);
	}

	return (
		<View>
			<View>
				<Image
					style={styles.previewImage}
					source={{ uri: imageUri ?? undefined }}
				/>

				{!imageUri && (
					<Text style={styles.previewText}>No image taken yet.</Text>
				)}
			</View>
			<OutlinedButton onPress={takeImageHandler} icon="camera">
				Take Image
			</OutlinedButton>
		</View>
	);
}

const styles = StyleSheet.create({
	previewImage: {
		width: "100%",
		height: 300,
		marginVertical: 16,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.primary200,
		borderRadius: 8,
	},
	previewText: {
		textAlign: "center",
		color: Colors.primary100,
		marginBottom: 16,
	},
});
