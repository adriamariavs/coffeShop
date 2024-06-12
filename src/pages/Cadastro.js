// Importações necessárias do React Native
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { styles } from '../style/Styles';
import { useNavigation } from '@react-navigation/native';
// Importa a biblioteca axios para fazer requisições HTTP
import axios from 'axios';
// Importa componentes personalizados
import ButtonComponents from '../componentes/ButtonComponents';
import ImgComponent from '../componentes/ImgComponent';

export default function Cadastro() {
  const navigation = useNavigation();
    // Define os estados para armazenar dados do usuário
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  // Função assíncrona que lida com o cadastro do usuário
  const handleCadastro = async () => {
    // Se as senhas forem diferentes exibe alert
    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    try {
      const newUser = { nome_completo: nomeCompleto, email, senha };
      // Se cadastrar corretamente exibe alert
      const response = await axios.post('http://10.0.2.15:3000/cadastro', newUser);
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      navigation.navigate('Login');
      // Quando não cadastrar no banco de dados
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível realizar o cadastro. Tente novamente mais tarde.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.TelaCds}>
        <ImgComponent
          styles={styles.ImgCds}
          imagem={require('../assets/icons/graos.png')}
        />
        <Text style={styles.WelcomeCds}>Cadastre-se!</Text>
        <Text style={styles.DescriCds}>Cadastre-se e aproveite todos os sabores</Text>
        <Text style={styles.DescriCds1}>inesquecíveis.</Text>

       {/* //Permite o usuario inserir o nome e transforma o nome em valor da const: nomeCompleto */}
        <TextInput
          style={styles.InputName}
          placeholder="Nome completo"
          value={nomeCompleto}
          onChangeText={setNomeCompleto}
        />
        {/* //Permite o usuario inserir o e-mail e transforma o e-mail em valor da const: email */}
        <TextInput
          style={styles.InputName}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        {/* //Permite o usuario inserir a senha e transforma a senha em valor da const: senha */}
        <TextInput
          style={styles.InputName}
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
        {/* //Permite o usuario confirmar a senha anterior e transforma a confirmação em valor da const: confirmarSenha */}
        <TextInput
          style={styles.InputName}
          placeholder="Repita sua senha"
          secureTextEntry={true}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />

        <ButtonComponents
          styles={[styles.BtnLogin, { marginTop: 60 }]}
          onPress={handleCadastro}
          title="Cadastre-se"
        />
      </View>
    </View>
  );
}