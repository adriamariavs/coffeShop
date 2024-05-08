import { View } from "react-native";
import { styles } from "../style/Styles";
import { useNavigation } from "@react-navigation/native";
//Importando Componentes:
import ButtonComponents from "../componentes/ButtonComponents";
import TextComponent from "../componentes/TextComponent";
import ImgComponent from "../componentes/ImgComponent";
import { ScrollView } from "react-native-gesture-handler";

export default function Saiba() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

     <ImgComponent style={styles.ImgLogoSaiba} imagem={require("../assets/image/logoSaiba.png")}/>

     <ScrollView>

      <TextComponent texto="Saiba mais sobre o melhor aplicativo para cafés!!" styles={styles.TextSaiba}/>
      
      <TextComponent texto="O aplicativo de cafés gourmetizados, doces e salgados é uma plataforma que oferece
       uma variedade de opções deliciosas para os amantes de gastronomia. No aplicativo, os usuários podem 
       encontrar uma ampla seleção de cafés especiais, como expressos, cappuccinos, lattes e outras bebidas sofisticadas.

       Além dos cafés, o aplicativo também oferece uma variedade de doces gourmet, como bolos artesanais, cupcakes decorados,
       tortas finas e sobremesas elaboradas. Os usuários podem explorar diferentes sabores, texturas e apresentações para
       satisfazer seu paladar.

       Para quem prefere opções salgadas, o aplicativo disponibiliza uma gama de salgados gourmet, como sanduíches premium,
       quiches, empadas e outras delícias salgadas feitas com ingredientes de alta qualidade." styles={styles.TextSaibaD}/>
            
             <ButtonComponents
              styles={styles.BtnSaibaPG}
              onPress={() => navigation.navigate("Home")}
              title= "Voltar"
             />

    </ScrollView>
    </View>
              
)
}