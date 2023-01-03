import { View, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import OutlinedButton from "../UI/OutlinedButton";

export default function LocationPicker() {
	function getLocationHandler() {}

	function pickOnMapHandler() {}

	return (
		<View>
			<View style={styles.mapPreview}></View>
			<View style={styles.actions}>
				<OutlinedButton onPress={getLocationHandler} icon="location">
					Locate User
				</OutlinedButton>
				<OutlinedButton onPress={pickOnMapHandler} icon="map">
					Pick on Map
				</OutlinedButton>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mapPreview: {
		width: "100%",
		height: 300,
		marginVertical: 16,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.primary200,
		borderRadius: 8,
	},
	actions: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		marginBottom: 48,
	},
});
