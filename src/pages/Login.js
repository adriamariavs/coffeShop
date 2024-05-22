import { View, Text, TextInput, TouchableOpacity } from "react-native";
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
        {/* Texto de boas-vindas */}
        <ImgComponent
          styles={styles.ImgLogin}
          imagem={require("../assets/icons/graos.png")}
        />
        <Text style={styles.Welcome}>Seja bem-vindo!</Text>

        <Text style={styles.Descri}>Faça seu login e continue comprando.</Text>

        {/* Inputs de email e senha */}
        <TextInput style={styles.InputName} placeholder="E-mail" />
        <TextInput
          style={styles.InputName}
          placeholder="Senha"
          secureTextEntry={true} // Campo de senha seguro
        />

        <Text style={styles.Senha}>Esqueceu sua senha?</Text>

        {/* Botão de login */}
        <ButtonComponents
          styles={[styles.BtnLogin, { marginTop: 60}]}
          onPress={() => navigation.navigate("Menu")}
          // Navega para a tela de menu ao pressionar o botão
          title="Login" // Texto do botão
        />
      <View style={styles.flexrow}>
      <Text style={styles.Cadas}>Não tem conta?</Text>
      {/* Botão para direcionar ao cadastro */}
      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
      <Text style={styles.Cadas1}>Cadastre-se</Text> 
      </TouchableOpacity>
      </View>

      </View>
    </View>
  );
}
