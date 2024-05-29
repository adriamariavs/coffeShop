import { View, Text } from "react-native";
import { styles } from "../style/Styles";
import { useNavigation } from "@react-navigation/native";
import ButtonComponents from "../componentes/ButtonComponents";
import ImageBackgroundComponent from "../componentes/ImageBackgroundComponent";

export default function Galeria() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackgroundComponent
        styles={{ width: "100%", height: "100%" }}
        imageBK={require("../assets/image/MaquinaCafe.png")}
      />
    </View>

    
  );
}
