import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";
import { StackParamList } from "../App";
import PlaceForm from "../components/Places/PlaceForm";
import { Place } from "../types/Place";

export default function AddPlace() {
	const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

	function createPlaceHandler(place: Place) {
		console.log("Will save to db", place);
		navigation.navigate("AllPlaces", { place: place });
	}

	return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

const styles = StyleSheet.create({});
