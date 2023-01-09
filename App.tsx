import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/colors";
import Map from "./screens/Map";
import { Place } from "./types/Place";
import { init } from "./utils/database";
import { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";

export type StackParamList = {
	AllPlaces: undefined;
	AddPlace: { pickedLocation?: { lat: number; lng: number } };
	Map: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
	const [dbInitialized, setDbInitialized] = useState(false);

	useEffect(() => {
		init()
			.then(() => {
				setDbInitialized(true);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	if (!dbInitialized) {
		return <AppLoading />;
	}

	return (
		<>
			<StatusBar style="dark" />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: Colors.primary500,
						},
						headerTintColor: Colors.gray700,
						contentStyle: {
							backgroundColor: Colors.gray700,
						},
					}}
				>
					<Stack.Screen
						name="AllPlaces"
						component={AllPlaces}
						options={({ navigation }) => ({
							title: "Your Favorite Places",
							headerRight: ({ tintColor }) => (
								<IconButton
									icon="add"
									onPress={() => navigation.navigate("AddPlace")}
									size={24}
									color={tintColor}
								/>
							),
						})}
					/>
					<Stack.Screen
						name="AddPlace"
						component={AddPlace}
						options={{
							title: "Add a new place",
						}}
					/>
					<Stack.Screen
						name="Map"
						component={Map}
						options={{
							title: "Add a new place",
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
