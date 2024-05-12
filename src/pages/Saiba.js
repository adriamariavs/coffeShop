import { View } from "react-native";
import { styles } from "../style/Styles"; 
import { useNavigation } from "@react-navigation/native"; 
// Importando Componentes
import ButtonComponents from "../componentes/ButtonComponents"; 
import TextComponent from "../componentes/TextComponent"; 
import ImgComponent from "../componentes/ImgComponent"; 
import { ScrollView } from "react-native-gesture-handler"; // Importando ScrollView

export default function Saiba() {
  const navigation = useNavigation(); 

  return (
   <View style={styles.container}>

      <ImgComponent
        style={styles.ImgSobreNós}
        imagem={require("../assets/image/SobreNós.png")} // Imagem de sobre nós
        />

   </View>
  );
}
