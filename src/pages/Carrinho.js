import { Modal, Pressable } from "react-native";
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
} from "react-native";
import { Entypo } from "@expo/vector-icons"; //Icone

//Importando Componentes:

const screenWidth = Dimensions.get("window").width; // Dimensão horizontalmente
const largFinal = screenWidth * 0.7; // Largura final

const AnimatedItem = ({ item }) => {
  // Animação de ir e voltar
  const [mostrar, setMostrar] = useState(false); // Mostra ou não o item desejado
  const [mostrarTouch, setMostrarTouch] = useState(false); // Define pro item desejado ser mostrado com o toque
  const [viewStyle, setViewStyle] = useState({}); // Define um Style diverso(any) para a View
  const largInicial = useRef(new Animated.Value(screenWidth * 0.9)).current; // Define a largura inicial do item desejado
  const opacidadeAnimated = useRef(new Animated.Value(0)).current; // Define a Opacidade do item desejado

  // Cria a animação para que um elemento diminuia e vá para a esquerda, enquanto outro apareça da direita
  useEffect(() => {
    Animated.timing(largInicial, {
      toValue: mostrar ? largFinal : screenWidth * 0.9,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    Animated.timing(opacidadeAnimated, {
      toValue: mostrar ? 1 : 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Atualiza o estilo da view com base no estado mostrarTouch

    setTimeout(() => {
      setViewStyle(mostrar ? { width: "20%" } : { flex: 1 });
    }, 800);
  }, [mostrar, largInicial, mostrarTouch]);

  const dispararAnimation = () => {
    setMostrar(!mostrar);
    setMostrarTouch(true);
  };

  const alertView = () => {
    alert("Tem certeza que quer apagar este item?");
  };

  return (
    <View style={[styles.box, { width: screenWidth * 0.9 }]}>
      <Animated.View
        style={{
          width: largInicial,
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
        onTouchStart={dispararAnimation}
      >
        <Text style={{ fontSize: 15, fontWeight: "700" }}>{item.title}</Text>
      </Animated.View>
      {mostrarTouch && (
        <Animated.View
          onTouchStart={alertView}
          style={{
            ...viewStyle,
            height: "90%",
            borderColor: "red",
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            opacity: opacidadeAnimated,
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
  const [vis, setVis] = useState(false);

  const data = [
    { id: "1", title: "Café expresso" },
    { id: "2", title: "Milkshake de chocolate" },
    { id: "3", title: "Cookies", backgroundColor: "white" },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 100,
          width: "100%",
          backgroundColor: "#d4a57b",
          marginTop: -20,
          borderBottomLeftRadius: 60,
        }}
      ></View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "TitanOne-Regular",
            marginTop: 20,
            left: 18,
          }}
        >
          Meus pedidos:
        </Text>

        <View style={{ flex: 1 }}>
          <FlatList
            data={data}
            renderItem={({ item }) => <AnimatedItem item={item} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.flatListContent}
          />

          <Modal transparent={true} visible={vis}>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: "75%",
                  backgroundColor: "white",
                  borderRadius: 10,
                }}
              >
                <Text style={styles.text}>Confirme seu pagamento</Text>
                <TouchableOpacity
                  style={styles.btnconcluir}
                  onPress={() => setVis(false)}
                >
                  <Text>Concluir</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
        <View style={{ height: "13%", width: "100%" }}>
          <TouchableOpacity
            style={styles.btnpagar}
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
