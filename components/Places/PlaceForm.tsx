import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { Colors } from "../../constants/colors";
import Button from "../UI/Button";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import { Place } from "../../types/place";

interface Props {
	onCreatePlace: (place: Place) => void;
}

type Location = {
	latitude: number;
	longitude: number;
	address: string;
};

export default function PlaceForm(props: Props) {
	const { onCreatePlace } = props;

	const [title, setTitle] = useState("");
	const [pickedLocation, setPickedLocation] = useState<Location>();
	const [selectedImage, setSelectedImage] = useState("");

	function titleChangeHandler(text: string) {
		setTitle(text);
	}

	function savePlaceHandler() {
		if (!title || !pickedLocation || !selectedImage) {
			return;
		}

		const place: Place = {
			id: new Date().toString() + Math.random().toString(),
			title,
			lat: pickedLocation.latitude,
			lng: pickedLocation.longitude,
			imageUri: selectedImage,
			address: pickedLocation.address,
		};

		onCreatePlace(place);
	}

	function takeImageHandler(imageUri: string) {
		setSelectedImage(imageUri);
	}

	function pickLocationHandler(location: {
		lat: number;
		lng: number;
		address: string;
	}) {
		setPickedLocation({
			latitude: location.lat,
			longitude: location.lng,
			address: location.address,
		});
	}

	return (
		<ScrollView style={styles.container}>
			<View>
				<Text style={styles.label}>Title</Text>
				<TextInput
					onChangeText={titleChangeHandler}
					value={title}
					style={styles.input}
				/>
			</View>
			<ImagePicker onTakeImage={takeImageHandler} />
			<LocationPicker onPickLocation={pickLocationHandler} />
			<Button onPress={savePlaceHandler}>Add Place</Button>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	label: {
		color: Colors.primary100,
		fontWeight: "bold",
		marginBottom: 4,
	},
	input: {
		marginVertical: 8,
		padding: 8,
		borderRadius: 8,
		backgroundColor: Colors.primary100,
	},
});
