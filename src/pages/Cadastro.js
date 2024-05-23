import { View, Text, TextInput } from "react-native";
import { styles } from "../style/Styles";
import { useNavigation } from "@react-navigation/native";
// Importações dos componentes
import ButtonComponents from "../componentes/ButtonComponents";
import ImgComponent from "../componentes/ImgComponent";

export default function Cadastro() {
  // Hook de navegação
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.TelaCds}>
        {/* Componente de imagem com estilo e fonte da imagem */}
        <ImgComponent
          styles={styles.ImgCds}
          imagem={require("../assets/icons/graos.png")}
        />
        {/* Titulo */}
        <Text style={styles.WelcomeCds}>Cadastre-se!</Text>

        {/* Descrição do cadastro */}
        <Text style={styles.DescriCds}>Cadastre-se e aproveite todos os sabores</Text>
        <Text style={styles.DescriCds1}>inesquecíveis.</Text>

        {/* Campos de entrada de dados */}
        <TextInput style={styles.InputName} placeholder="Nome completo" />
        <TextInput style={styles.InputName} placeholder="E-mail" />
        <TextInput style={styles.InputName} placeholder="Senha" />
        {/* Campo de entrada para confirmação de senha */}
        <TextInput style={styles.InputName} placeholder="Repita sua senha" />

        {/* Botão de cadastro */}
        <ButtonComponents
          styles={[styles.BtnLogin, { marginTop: 60 }]}
          onPress={() => navigation.navigate("Login")}
          // Navega para a tela de login ao pressionar o botão
          title="Cadastre-se" // Texto do botão
        />
      </View>
    </View>
  );
}
