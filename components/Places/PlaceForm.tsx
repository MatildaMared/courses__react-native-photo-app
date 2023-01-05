import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

export default function PlaceForm() {
	const [title, setTitle] = useState("");

	function titleChangeHandler(text: string) {
		setTitle(text);
	}

	return (
		<ScrollView style={styles.container}>
			{/* <View>
				<Text style={styles.label}>Title</Text>
				<TextInput
					onChangeText={titleChangeHandler}
					value={title}
					style={styles.input}
				/>
			</View> */}
			{/* <ImagePicker /> */}
			<LocationPicker />
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
