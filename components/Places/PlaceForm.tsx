import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { Colors } from "../../constants/colors";
import Button from "../UI/Button";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

export default function PlaceForm() {
	const [title, setTitle] = useState("");
	const [pickedLocation, setPickedLocation] = useState({ lat: 0, lng: 0 });
	const [selectedImage, setSelectedImage] = useState("");

	function titleChangeHandler(text: string) {
		setTitle(text);
	}

	function savePlaceHandler() {
		console.log("Title: ", title);
		console.log("Location: ", pickedLocation);
		console.log("Image: ", selectedImage);
	}

	function takeImageHandler(imageUri: string) {
		console.log("Took image");
		setSelectedImage(imageUri);
	}

	function pickLocationHandler(location: {
		lat: number;
		lng: number;
		address: string;
	}) {
		console.log("Picked location");
		setPickedLocation(location);
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
