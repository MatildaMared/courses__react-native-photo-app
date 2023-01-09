import { NavigationProp, useNavigation } from "@react-navigation/native";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { StackParamList } from "../../App";
import { Colors } from "../../constants/colors";
import { Place } from "../../types/Place";
import PlaceItem from "./PlaceItem";

interface Props {
	places: Place[];
}

export default function PlacesList(props: Props) {
	const { places } = props;
	const navigation = useNavigation<NavigationProp<StackParamList>>();

	function selectPlaceHandler(id: string) {
		navigation.navigate("PlaceDetails", { placeId: id });
	}

	if (!places || places.length === 0)
		return (
			<View style={styles.fallbackContainer}>
				<Text style={styles.fallbackText}>
					No places found, maybe start creating some?
				</Text>
			</View>
		);

	return (
		<FlatList
			style={styles.list}
			data={places}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<PlaceItem
					place={item}
					onSelect={() => {
						selectPlaceHandler(item.id);
					}}
				/>
			)}
		/>
	);
}

const styles = StyleSheet.create({
	fallbackContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	fallbackText: {
		fontSize: 16,
		color: Colors.primary100,
	},
	list: {
		padding: 32,
	},
});
