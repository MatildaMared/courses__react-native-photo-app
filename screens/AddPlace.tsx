import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";
import { StackParamList } from "../App";
import PlaceForm from "../components/Places/PlaceForm";
import { Place } from "../types/Place";
import { insertPlace } from "../utils/database";

export default function AddPlace() {
	const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

	async function createPlaceHandler(place: Place) {
		await insertPlace(place);
		navigation.navigate("AllPlaces");
	}

	return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

const styles = StyleSheet.create({});
