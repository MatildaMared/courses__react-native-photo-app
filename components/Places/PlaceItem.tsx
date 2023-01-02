import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Place } from "../../types/Place";

interface Props {
    place: Place;
    onSelect: () => void;
}

export default function PlaceItem(props: Props) {
	const { place, onSelect } = props;

	return (
		<Pressable onPress={onSelect}>
			<Image source={{ uri: place.imageUri }} />
			<View>
				<Text>{place.title}</Text>
				<Text>{place.address}</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({});