import { View, Text, TextInput } from "react-native";
// Importando componente de botão personalizado
import ButtonComponents from "../componentes/ButtonComponents"; 
// Importando hook de navegação
import { useNavigation } from "@react-navigation/native"; 
import { styles } from "../style/Styles"; 

// Componente de cadastro
export default function Cadastro() {
    const navigation = useNavigation(); // Navegação

    return (
      <View style={styles.container}>
        {/* Contêiner para o formulário de cadastro */}
        <View style={styles.ViewCadastro}> 
          {/* Título  */}
          <Text style={styles.TituloCds}>Cadastrar-se</Text>
          
          {/* Campos de entrada para o nome completo, nome de usuário, e-mail e senha */}
          <TextInput style={styles.InputName} placeholder="Nome completo:" />
          <TextInput style={styles.InputName} placeholder="Nome de usuário:" />
          <TextInput style={styles.InputName} placeholder="E-mail:" />
          <TextInput style={styles.InputName} placeholder="Senha:" />
          
          {/* Botão de cadastro */}
          <ButtonComponents
            styles={styles.BtnCds}
            onPress={() => navigation.navigate("Login")} 
            // Navega para a tela de login ao clicar no botão
            title="Cadastrar"
          />
        </View>
      </View>
    );
}
