import { View, Text } from "react-native";
import { styles, useNavigation } from "../style/Styles";
import ButtonComponents from "../componentes/ButtonComponents";
import ImageBackgroundComponent from "../componentes/ImageBackgroundComponent";

export default function Galeria() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackgroundComponent stylesBk={{ width: "100%", height: "100%" }} />
    </View>
  );
}
