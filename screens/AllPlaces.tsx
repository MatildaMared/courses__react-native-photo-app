import { useIsFocused, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import PlacesList from "../components/Places/PlacesList";
import { Place } from "../types/Place";

export default function AllPlaces() {
	const route = useRoute();
	const isFocused = useIsFocused();
	const [places, setPlaces] = useState<Place[]>([]);

	useEffect(() => {
		if (isFocused && route.params) {
			const { place } = route.params as { place: Place };
			setPlaces((prevPlaces) => [place, ...prevPlaces]);
		}
	}, [isFocused, route]);

	return (
		<View style={styles.container}>
			<PlacesList places={places} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
