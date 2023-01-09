import {
	NavigationProp,
	RouteProp,
	useNavigation,
	useRoute,
} from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ScrollView, Image, View, StyleSheet, Text } from "react-native";
import { StackParamList } from "../App";
import OutlinedButton from "../components/UI/OutlinedButton";
import { Colors } from "../constants/colors";
import { Place } from "../types/Place";
import { fetchPlaceDetails } from "../utils/database";

export default function PlaceDetails() {
	const route = useRoute<RouteProp<StackParamList, "PlaceDetails">>();
	const navigation = useNavigation<NavigationProp<StackParamList>>();
	const [place, setPlace] = useState<Place>();
	const selectedPlaceId = route.params?.placeId;

	function showOnMapHandler() {
		navigation.navigate("Map", {
			initialLat: place?.lat,
			initialLng: place?.lng,
		});
	}

	useEffect(() => {
		if (!selectedPlaceId) {
			return;
		}

		async function fetchPlace() {
			const data = await fetchPlaceDetails(selectedPlaceId);
			setPlace(data);
			navigation.setOptions({ title: data.title });
		}

		fetchPlace();
	}, [selectedPlaceId]);

	if (!place) {
		return null;
	}

	return (
		<ScrollView>
			<Image style={styles.image} source={{ uri: place.imageUri }} />
			<View style={styles.locationContainer}>
				<View style={styles.addressContainer}>
					<Text style={styles.address}>{place.address}</Text>
				</View>
				<OutlinedButton icon="map" onPress={showOnMapHandler}>
					View on Map
				</OutlinedButton>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	image: {
		height: "35%",
		minHeight: 300,
		width: "100%",
	},
	locationContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	addressContainer: {
		padding: 16,
	},
	address: {
		color: Colors.primary500,
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 16,
	},
});
