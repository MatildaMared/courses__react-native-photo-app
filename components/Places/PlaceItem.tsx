import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { Place } from "../../types/Place";

interface Props {
	place: Place;
	onSelect: () => void;
}

export default function PlaceItem(props: Props) {
	const { place, onSelect } = props;

	return (
		<Pressable
			style={({ pressed }) => [styles.item, pressed && styles.pressed]}
			onPress={onSelect}
		>
			<Image style={styles.image} source={{ uri: place.imageUri }} />
			<View style={styles.info}>
				<Text style={styles.title}>{place.title}</Text>
				<Text style={styles.address}>{place.address}</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	item: {
		flexDirection: "row",
		alignItems: "flex-start",
		borderRadius: 8,
		marginBottom: 16,
		backgroundColor: Colors.primary500,
		elevation: 2,
		shadowColor: "black",
		shadowOffset: { width: 1, height: 1 },
		shadowRadius: 2,
		shadowOpacity: 0.15,
	},
	pressed: {
		opacity: 0.75,
	},
	image: {
		flex: 1,
		borderBottomLeftRadius: 8,
		borderTopLeftRadius: 8,
		height: 100,
	},
	info: {
		flex: 2,
		padding: 16,
	},
	title: {
		fontWeight: "bold",
		fontSize: 18,
		color: Colors.gray700,
	},
	address: {
		fontSize: 16,
		color: Colors.gray700,
	},
});
