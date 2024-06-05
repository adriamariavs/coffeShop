import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../style/Styles';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import ButtonComponents from '../componentes/ButtonComponents';
import ImgComponent from '../componentes/ImgComponent';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/cadastro', { email, senha });
      if (response.status === 200) {
        Alert.alert('Login successful');
        navigation.navigate('Menu');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        Alert.alert('Invalid credentials');
      } else {
        console.error(error);
        Alert.alert('An error occurred');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.TelaLogin}>
        <ImgComponent styles={styles.ImgLogin} imagem={require('../assets/icons/graos.png')} />
        <Text style={styles.Welcome}>Seja bem-vindo!</Text>
        <Text style={styles.Descri}>Faça seu login e continue comprando.</Text>
        <TextInput
          style={styles.InputName}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.InputName}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <Text style={styles.Senha}>Esqueceu sua senha?</Text>
        <ButtonComponents
          styles={[styles.BtnLogin, { marginTop: 60 }]}
          onPress={handleLogin}
          title="Login"
        />
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
