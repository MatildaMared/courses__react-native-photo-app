import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
	icon: keyof typeof Ionicons.glyphMap;
	size?: number;
	color?: string;
	onPress?: () => void;
}

export default function IconButton(props: Props) {
	const { icon, size, color, onPress } = props;

	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [styles.button, pressed && styles.pressed]}
		>
			<Ionicons name={icon} size={size} color={color} />
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		padding: 8,
		justifyContent: "center",
		alignItems: "center",
	},
	pressed: {
		opacity: 0.6,
	},
});
