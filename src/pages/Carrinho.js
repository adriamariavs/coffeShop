import { Modal } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { styles } from "../style/Styles";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  Animated,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons"; // Importando ícone

// Obtendo a largura da tela e definindo a largura final da animação
const screenWidth = Dimensions.get("window").width;
const largFinal = screenWidth * 0.7;

// Componente para itens animados
const AnimatedItem = ({ item }) => {
  const [mostrar, setMostrar] = useState(false); // Estado para controlar se o item está visível
  const [mostrarTouch, setMostrarTouch] = useState(false); // Estado para controlar se o item foi tocado
  const [viewStyle, setViewStyle] = useState({}); // Estado para controlar o estilo da view
  const largInicial = useRef(new Animated.Value(screenWidth * 0.9)).current; // Valor inicial da largura do item
  const opacidadeAnimated = useRef(new Animated.Value(0)).current; // Valor inicial da opacidade do item

  // useEffect para controlar a animação do item
  useEffect(() => {
    // Animação para ajustar a largura do item
    Animated.timing(largInicial, {
      toValue: mostrar ? largFinal : screenWidth * 0.9, // Define a largura final com base no estado 'mostrar'
      duration: 1000, // Duração da animação
      useNativeDriver: false, // Não usa o driver nativo
    }).start();

    // Animação para ajustar a opacidade do item
    Animated.timing(opacidadeAnimated, {
      toValue: mostrar ? 1 : 0, // Define a opacidade final com base no estado 'mostrar'
      duration: 1000, // Duração da animação
      useNativeDriver: true, // Usa o driver nativo
    }).start();

    // Atualiza o estilo da view após um pequeno atraso
    setTimeout(() => {
      setViewStyle(mostrar ? { width: "20%" } : { flex: 1 }); // Define o estilo da view com base no estado 'mostrar'
    }, 800); // Atraso para aplicar o estilo
  }, [mostrar, largInicial, mostrarTouch]); // Dependências da useEffect

  // Função para disparar a animação ao tocar no item
  const dispararAnimation = () => {
    setMostrar(!mostrar); // Alterna o estado de 'mostrar'
    setMostrarTouch(true); // Define 'mostrarTouch' como verdadeiro
  };

  // Função para exibir um alerta ao tentar apagar o item
  const alertView = () => {
    alert("Tem certeza que quer apagar este item?"); // Exibe um alerta de confirmação
  };

  return (
    <View style={[styles.box, { width: screenWidth * 0.9 }]}>
      <Animated.View
        style={{
          width: largInicial, // Define a largura animada
          height: "90%",
          backgroundColor: "white",
          borderRadius: 20,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.7,
          shadowRadius: 8.3,
          elevation: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
        onTouchStart={dispararAnimation} // Inicia a animação ao tocar
      >
        <Text style={{ fontSize: 15, fontWeight: "700" }}>{item.title}</Text>
      </Animated.View>
      {mostrarTouch && ( // Condicional para exibir a view animada ao tocar
        <Animated.View
          onTouchStart={alertView} // Exibe o alerta ao tocar
          style={{
            ...viewStyle, // Estilo dinâmico
            height: "90%",
            borderColor: "red",
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            opacity: opacidadeAnimated, // Define a opacidade animada
            borderRadius: 20,
            backgroundColor: "red",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.7,
            shadowRadius: 8.3,
            elevation: 13,
          }}
        >
          <Entypo name="trash" size={30} color="white" />
        </Animated.View>
      )}
    </View>
  );
};

export default function Carrinho() {
  const navigation = useNavigation();
  const [vis, setVis] = useState(false); // Estado para controlar a visibilidade do modal

  // Dados dos itens do carrinho
  const data = [
    { id: "1", title: "Café expresso" },
    { id: "2", title: "Milkshake de chocolate" },
    { id: "3", title: "Cookies", backgroundColor: "white" },
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* Container principal */}
      <View style={styles.carrinhopag}></View>
      {/* Container para o conteúdo principal */}
      <View style={{ flex: 1 }}>
        {/* Título da seção */}
        <Text style={styles.textCarrinho}>Meus pedidos:</Text>
        <View style={{ flex: 1 }}>
          {/* Container para a lista de itens */}
          <FlatList
            data={data} // Dados dos itens do carrinho
            renderItem={({ item }) => <AnimatedItem item={item} />} // Renderiza os itens animados
            keyExtractor={(item) => item.id} // Extrai a chave única de cada item
            contentContainerStyle={styles.flatListContent} // Estilo do container da FlatList
          />
          <Modal transparent={true} visible={vis} animationType="fade">
            {/* Modal para confirmação de pagamento */}
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo semitransparente
              }}
            >
              {/* Container principal do modal */}
              <View style={styles.modalprincipal}>
                {/* Título do modal */}
                <Text style={styles.text}>Confirme seu pagamento:</Text>
                <View style={styles.viewDentroModal}>
                  {/* Opção de pagamento com cartão de crédito */}
                  <Image
                    source={require("../assets/image/visa.png")} // Imagem do cartão Visa
                    style={styles.visa}
                  />
                  <Text style={styles.cartaoDebito}>Cartão de crédito</Text>
                </View>
                <View style={styles.viewDentroModal2}>
                  {/* Opção de pagamento com cartão de débito */}
                  <Image
                    source={require("../assets/image/master.png")} // Imagem do cartão MasterCard
                    style={styles.master}
                  />
                  <Text style={styles.cartaoCredito}>Cartão de débito</Text>
                </View>
                <View style={styles.viewDentroModal3}>
                  {/* Opção de pagamento com Pix */}
                  <Image
                    source={require("../assets/image/pix.png")} // Imagem do Pix
                    style={styles.pixImg}
                  />
                  <Text style={styles.Pix}>Opção Pix</Text>
                </View>
                <View style={styles.risco}></View>
                {/* Linha divisória */}
                <TouchableOpacity
                  style={styles.btnconcluir} // Botão para concluir o pagamento
                  onPress={() => setVis(false)} // Fecha o modal ao clicar
                >
                  <Text>Concluir</Text>
                </TouchableOpacity>
                <Text style={styles.resultadoModal}>Seu pedido ficou:</Text>
                <Text style={styles.funcaoModal}>Função</Text>
              </View>
            </View>
          </Modal>
        </View>
        <View style={{ height: "13%", width: "100%" }}>
          {/* Container para o botão de pagamento */}
          <View style={styles.risco1}></View>
          {/* Linha divisória */}
          <TouchableOpacity
            style={styles.btnpagar} // Botão para abrir o modal de pagamento
            onPress={() => setVis(true)}
          >
            <Text>Pagar</Text>
          </TouchableOpacity>
          <Text style={styles.resultado}>Seu pedido ficou:</Text>
          <Text style={styles.funcao}>Função</Text>
        </View>
      </View>
    </View>
  );
}
