import { TouchableOpacity, Text } from "react-native";
import { styles } from "../style/Styles";

export default function ButtonComponents({onPress, styles, title}) {
  return (
    <TouchableOpacity style={styles} onPress={onPress}> 
      <Text>{title}</Text> 
    </TouchableOpacity>
  );
}