import { View, StyleSheet } from "react-native";
import PlacesList from "../components/Places/PlacesList";
import { Place } from "../types/Place";

export default function AllPlaces() {
	const places: Place[] = [];

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
