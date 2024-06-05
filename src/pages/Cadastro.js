import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { styles } from '../style/Styles';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import ButtonComponents from '../componentes/ButtonComponents';
import ImgComponent from '../componentes/ImgComponent';

export default function Cadastro() {
  const navigation = useNavigation();
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = async () => {
    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    try {
      const newUser = { nome_completo: nomeCompleto, email, senha };
      const response = await axios.post('http://localhost:3000/cadastro', newUser);
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      navigation.navigate('Login');
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

        <TextInput
          style={styles.InputName}
          placeholder="Nome completo"
          value={nomeCompleto}
          onChangeText={setNomeCompleto}
        />
        <TextInput
          style={styles.InputName}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.InputName}
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
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
