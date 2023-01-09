import { useIsFocused, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import PlacesList from "../components/Places/PlacesList";
import { Place } from "../types/Place";
import { fetchPlaces } from "../utils/database";

export default function AllPlaces() {
	const isFocused = useIsFocused();
	const [places, setPlaces] = useState<Place[]>([]);

	useEffect(() => {
		async function getPlaces() {
			const places = await fetchPlaces();
			console.log("places", places);
			setPlaces(places);
		}

		getPlaces();
	}, [isFocused,]);

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
