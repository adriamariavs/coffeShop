import { View, Text, TextInput } from "react-native";
import ButtonComponents from "../componentes/ButtonComponents";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../style/Styles";

export default function Cadastro() {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <View style={styles.ViewCadastro}> 
        <Text style={styles.TituloCds}>Cadastrar-se</Text>
        
        <TextInput style={styles.InputName} placeholder="Nome completo:" />
        <TextInput style={styles.InputName} placeholder="Nome de usuário:" />
        <TextInput style={styles.InputName} placeholder="E-mail:" />
        <TextInput style={styles.InputName} placeholder="Senha:" />
        
        <ButtonComponents
          styles={styles.BtnCds}
          onPress={() => navigation.navigate("Login")}
          title="Cadastrar"
        />
          </View>
      </View>
    );
  }