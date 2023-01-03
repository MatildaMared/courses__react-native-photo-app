import { Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/colors";

interface Props {
	onPress: () => void;
	icon: keyof typeof Ionicons.glyphMap;
	children: React.ReactNode;
}

export default function OutlinedButton(props: Props) {
	const { onPress, icon, children } = props;

	return (
		<Pressable
			style={({ pressed }) => [styles.button, pressed && styles.pressed]}
		>
			<Ionicons
				name={icon}
				style={styles.icon}
				size={18}
				color={Colors.primary500}
			/>
			<Text style={styles.text}>{children}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		margin: 4,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
		borderWidth: 1,
		borderColor: Colors.primary500,
	},
	pressed: {
		opacity: 0.6,
	},
	icon: {
		marginRight: 6,
	},
	text: {
		color: Colors.primary500,
	},
});
