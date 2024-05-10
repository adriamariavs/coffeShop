import { View, Text, TextInput } from "react-native";
import { styles } from "../style/Styles"; 
import { useNavigation } from "@react-navigation/native"; 
// Importações dos componentes 
import ButtonComponents from "../componentes/ButtonComponents"; 
import ImgComponent from "../componentes/ImgComponent"; 

export default function Login() {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <View style={styles.TelaLogin}>

        <ImgComponent
          style={styles.ImgLogoSaiba}
          imagem={require("../assets/icons/login.png")} // Imagem de login
        />

        {/* Texto de boas-vindas */}
        <Text style={styles.Welcome}>Seja bem-vindo!</Text>

        {/* Inputs de email e senha */}
        <TextInput style={styles.InputName} placeholder="E-mail" />
        <TextInput
          style={styles.InputName}
          placeholder="Senha"
          secureTextEntry={true} // Campo de senha seguro
        />

        {/* Botão de login */}
        <ButtonComponents
          styles={[styles.BtnLogin, { marginTop: 20 }]} 
          onPress={() => navigation.navigate("Menu")} 
          // Navega para a tela de menu ao pressionar o botão
          title="Login" // Texto do botão
        />
      </View>
    </View>
  );
}

