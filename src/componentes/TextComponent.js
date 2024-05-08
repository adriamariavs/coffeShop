import { Text } from "react-native";
import { styles } from "../style/Styles";

export default function TextComponent({ texto, styles }) {
  return <Text style={styles}>{texto}</Text>;
}