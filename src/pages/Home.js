import { View, Text } from "react-native";
import { styles } from "../style/Styles"; 
import { useNavigation } from "@react-navigation/native"; // Importando navegação
// Importando Componentes
import ButtonComponents from "../componentes/ButtonComponents"; 
import ImgComponent from "../componentes/ImgComponent"; 

export default function Home() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      {/* Componente de Imagem logo */}
      <ImgComponent
        style={styles.ImgLogo}
        imagem={require("../assets/image/logo.png")}
      />

      {/* Título */}
      <Text
        style={{ fontFamily: "TitanOne-Regular", fontSize: 20, marginTop: 40 }}
      >
        Obter o melhor café da cidade?
      </Text>

      <View style={{ flexDirection: "row" }}>

        {/* Botão de Login */}
        <ButtonComponents
          styles={styles.BtnLoginHome}
          onPress={() => navigation.navigate("Login")}
          title="LOGIN"
        />

        {/* Botão de Cadastro */}
        <ButtonComponents
          styles={styles.BtnCdsHome}
          onPress={() => navigation.navigate("Cadastro")}
          title="Cadastrar-se"
        />
      </View>
      
      {/* Botão para saber mais */}
      <ButtonComponents
        styles={styles.BtnSaiba}
        onPress={() => navigation.navigate("Saiba")}
        title="Saiba mais!"
      />
    </View>
  );
}

