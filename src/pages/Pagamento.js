import { View } from "react-native";
import { styles } from "../style/Styles";
import { useNavigation } from "@react-navigation/native";
//Importando Componentes:
import ButtonComponents from "../componentes/ButtonComponents";
import TextComponent from "../componentes/TextComponent";
import ImgComponent from "../componentes/ImgComponent";

export default function Pagamento() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImgComponent style={styles.ImgLogo} imagem={require("../assets/image/logoSaiba.png")}/>
      <TextComponent texto="MENU" styles={styles.TextMenu}/>

             <ButtonComponents
              styles={styles.BtnSaiba}
              onPress={() => navigation.navigate("Home")}
              title= "Voltar"
              />

    </View>
              
)
}