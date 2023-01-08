import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { Alert, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../components/UI/IconButton";

export default function Map() {
	const [selectedLocation, setSelectedLocation] = useState();
	const navigation = useNavigation();

	const region = {
		latitude: 37.78,
		longitude: -122.43,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: ({ tintColor }) => (
				<IconButton
					icon="save"
					size={24}
					color={tintColor}
					onPress={savePickedLocationHandler}
				/>
			),
		});
	}, [navigation, savePickedLocationHandler, selectedLocation]);

	function selectLocationHandler(event) {
		const lat = event.nativeEvent.coordinate.latitude;
		const lng = event.nativeEvent.coordinate.longitude;

		setSelectedLocation({
			lat,
			lng,
		});
	}

	const savePickedLocationHandler = useCallback(() => {
		if (!selectedLocation) {
			Alert.alert(
				"No location selected!",
				"Please select a location by tapping on the map first first."
			);
			return;
		}

		navigation.navigate("AddPlace", {
			pickedLocation: selectedLocation,
		});
	}, [navigation, selectedLocation]);

	return (
		<MapView
			style={styles.map}
			initialRegion={region}
			onPress={selectLocationHandler}
		>
			{selectedLocation && (
				<Marker
					title="Picked Location"
					coordinate={{
						latitude: selectedLocation.lat,
						longitude: selectedLocation.lng,
					}}
				/>
			)}
		</MapView>
	);
}

const styles = StyleSheet.create({
	map: {
		flex: 1,
	},
});
