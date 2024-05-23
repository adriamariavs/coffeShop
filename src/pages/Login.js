import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../style/Styles";
import { useNavigation } from "@react-navigation/native";
// Importações dos componentes
import ButtonComponents from "../componentes/ButtonComponents";
import ImgComponent from "../componentes/ImgComponent";

export default function Login() {
  // Hook de navegação
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.TelaLogin}>
        {/* Componente de imagem com estilo e fonte da imagem */}
        <ImgComponent
          styles={styles.ImgLogin}
          imagem={require("../assets/icons/graos.png")}
        />
        {/* Texto de boas-vindas */}
        <Text style={styles.Welcome}>Seja bem-vindo!</Text>
        {/* Texto de descrição */}
        <Text style={styles.Descri}>Faça seu login e continue comprando.</Text>
        
        {/* Campo de entrada para e-mail */}
        <TextInput style={styles.InputName} placeholder="E-mail" />
        {/* Campo de entrada para senha com segurança habilitada */}
        <TextInput
          style={styles.InputName}
          placeholder="Senha"
          secureTextEntry={true} // Campo de senha seguro
        />
        
        {/* Texto para recuperar senha esquecida */}
        <Text style={styles.Senha}>Esqueceu sua senha?</Text>
        
        {/* Botão de login com estilo, margem e função de navegação */}
        <ButtonComponents
          styles={[styles.BtnLogin, { marginTop: 60 }]}
          onPress={() => navigation.navigate("Menu")}
          // Navega para a tela de menu ao pressionar o botão
          title="Login" // Texto do botão
        />
        
        <View style={styles.flexrow}>
          {/* Texto para usuários sem conta */}
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
