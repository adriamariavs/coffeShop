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
      <View style={styles.TelaCds}>
        {/* Texto de boas-vindas */}
        <ImgComponent
          styles={styles.ImgCds}
          imagem={require("../assets/icons/graos.png")}
        />
        <Text style={styles.WelcomeCds}>Cadastre-se!</Text>

        <Text style={styles.DescriCds}>Cadastre-se e aproveite todos os sabores </Text>
        <Text style={styles.DescriCds1}>inesquecíveis.</Text>

        {/* Inputs de email e senha */}
        <TextInput style={styles.InputName} placeholder="Nome completo" />
        <TextInput style={styles.InputName} placeholder="E-mail"/>
        <TextInput style={styles.InputName} placeholder="Senha"/>

        <Text style={styles.SenhaCds}>Confirmar senha:</Text>

        <TextInput style={styles.InputName} placeholder="Repita sua senha"/>

        {/* Botão de login */}
        <ButtonComponents
          styles={[styles.BtnLogin, { marginTop: 60}]}
          onPress={() => navigation.navigate("Login")}
          // Navega para a tela de menu ao pressionar o botão
          title="Cadastre-se" // Texto do botão
        />

      </View>
    </View>
  );
}
