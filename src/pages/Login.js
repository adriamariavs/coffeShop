import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../style/Styles';
import { useNavigation } from '@react-navigation/native';
// Importa a biblioteca axios para fazer requisições HTTP
import axios from 'axios';
// Importa componentes personalizados
import ButtonComponents from '../componentes/ButtonComponents';
import ImgComponent from '../componentes/ImgComponent';

export default function Login() {
  const navigation = useNavigation();
  // Define os estados para armazenar o e-mail e a senha do usuário
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Função assíncrona que lida com o login do usuário
  const handleLogin = async () => {
    try {
      // Envia uma requisição POST para o servidor com o e-mail e a senha
      const response = await axios.post('http://localhost:3000/cadastro', { email, senha });
      // Se a resposta do servidor for bem-sucedida (status 200)
      if (response.status === 200) {
        // Exibe um alerta de sucesso
        Alert.alert('Login successful');
        // Navega para a tela do Menu
        navigation.navigate('Menu');
      }
    } catch (error) {
      // Se houver um erro na requisição, verifica se o status é 401 (credenciais inválidas)
      if (error.response && error.response.status === 401) {
        // Exibe um alerta de credenciais inválidas
        Alert.alert('Invalid credentials');
      } else {
        // Exibe um alerta de erro genérico e loga o erro no console
        console.error(error);
        Alert.alert('An error occurred');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.TelaLogin}>
        {/* Exibe a imagem de login */}
        <ImgComponent styles={styles.ImgLogin} imagem={require('../assets/icons/graos.png')} />
        {/* Exibe a mensagem de boas-vindas */}
        <Text style={styles.Welcome}>Seja bem-vindo!</Text>
        {/* Exibe a descrição abaixo da mensagem de boas-vindas */}
        <Text style={styles.Descri}>Faça seu login e continue comprando.</Text>
        {/* Campo de entrada para o e-mail */}
        <TextInput
          style={styles.InputName}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        {/* Campo de entrada para a senha */}
        <TextInput
          style={styles.InputName}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        {/* Exibe o texto "Esqueceu sua senha?" */}
        <Text style={styles.Senha}>Esqueceu sua senha?</Text>
        {/* Botão de login que chama a função handleLogin quando pressionado */}
        <ButtonComponents
          styles={[styles.BtnLogin, { marginTop: 60 }]}
          onPress={handleLogin}
          title="Login"
        />
        {/* Exibe o texto "Não tem conta?" e um botão que navega para a tela de Cadastro */}
        <View style={styles.flexrow}>
          <Text style={styles.Cadas}>Não tem conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.Cadas1}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
