import { FlatList, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { Place } from "../../types/Place";
import PlaceItem from "./PlaceItem";

interface Props {
	places: Place[];
}

export default function PlacesList(props: Props) {
	const { places } = props;

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
			data={places}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => <PlaceItem place={item} onSelect={() => {}} />}
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
});
