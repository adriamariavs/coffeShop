import { View } from "react-native";
import { styles } from "../style/Styles";
import ImageBackgroundComponent from "../componentes/ImageBackgroundComponent";

export default function Galeria() {

  return (
    <View style={styles.container}>
      <ImageBackgroundComponent stylesBk={{ width: "100%", height: "100%" }} />
    </View>
  );
}
