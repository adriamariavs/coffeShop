import { View } from "react-native";
import { styles } from "../style/Styles";
import { useNavigation } from "@react-navigation/native"; 
//Importando Componentes:
import ButtonComponents from "../componentes/ButtonComponents";
import TextComponent from "../componentes/TextComponent";
import ImgComponent from "../componentes/ImgComponent";
import { AntDesign } from '@expo/vector-icons';

export default function Carrinho() {
  const navigation = useNavigation();

  return (

    <View style={{ 
      height: 210, 
      width: "100%", 
      justifyContent: "center", 
      alignItems: "center", 
      backgroundColor: '#d4a57b',
      marginTop: -20,}}>

    <View style={styles.Header}>
             <ButtonComponents
              styles={styles.BtnSaiba}
              onPress={() => navigation.navigate("Home")}
              title= "Voltar"
              />
          

    </View>
    </View>
)
}