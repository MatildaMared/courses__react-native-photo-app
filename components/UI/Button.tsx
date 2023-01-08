import { Pressable, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

interface Props {
	onPress: () => void;
	children: React.ReactNode;
}

export default function Button(props: Props) {
	const { onPress, children } = props;

	return (
		<Pressable
			style={({ pressed }) => [styles.container, pressed && styles.pressed]}
			onPress={onPress}
		>
			<Text style={styles.text}>{children}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		margin: 4,
		backgroundColor: Colors.primary800,
		elevation: 2,
		shadowColor: "black",
		shadowOffset: { width: 1, height: 1 },
		shadowRadius: 2,
		shadowOpacity: 0.2,
		borderRadius: 6,
	},
	pressed: {
		opacity: 0.6,
	},
	text: {
		textAlign: "center",
		fontSize: 16,
		color: Colors.primary50,
	},
});
