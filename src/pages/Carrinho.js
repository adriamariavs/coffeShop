import { Modal, Pressable, } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { styles } from "../style/Styles";
import { useNavigation} from "@react-navigation/native"; 
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

const screenWidth = Dimensions.get("window").width;
const largFinal = screenWidth * 0.7;

const AnimatedItem = ({ item }) => {
  const [mostrar, setMostrar] = useState(false);
  const [mostrarTouch, setMostrarTouch] = useState(false);
  const [viewStyle, setViewStyle] = useState({});
  const largInicial = useRef(new Animated.Value(screenWidth * 0.9)).current;
  const opacidadeAnimated = useRef(new Animated.Value(0)).current;

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
    alert("TOUCH VIEW");
  };

  return (
    <View style={[styles.box, {width: screenWidth * 0.9,}]}>
      <Animated.View
        style={{
          width: largInicial,
          height: "100%",
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
        <Text>{item.title}</Text>
      </Animated.View>
      {mostrarTouch && (
        <Animated.View
          onTouchStart={alertView}
          style={{
            ...viewStyle,
            height: "100%",
            borderColor: "white",
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            opacity: opacidadeAnimated,
            borderRadius: 20,
            backgroundColor: "red",
            shadowColor: "red",
            shadowOffset: {
              width: 0,
              height: 6,
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
    { id: "1", title: "View Animada 1" },
    { id: "2", title: "View Animada 2" },

  ];
  
  return (

    <View style={{ flex: 1, }}>
      <View style={{ 
        height: 100, 
        width: "100%", 
        backgroundColor: '#d4a57b',
        marginTop: -20,
        borderBottomLeftRadius: 60,}}> 
      </View>

      <Text style={{fontSize: 20, fontFamily: "TitanOne-Regular", margin: 20, marginTop: 20}}> Meus pedidos: </Text>
      
      <View style={{ flex:1,  justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity 
        style={{ 
        backgroundColor: '#d4a57b', 
        height:50, 
        left: 220, 
        top: 490, 
       width: 130 ,
       borderRadius: 50,
       padding: 10,
       borderBottomWidth:1, 
       justifyContent: 'center',
       position: 'absolute', 
       alignItems: 'center'}}  
            onPress={() => setVis(true)} >
          <Text> Pagar</Text>
        </TouchableOpacity>
        <View style={styles.containermodal}>
      <FlatList
        data={data}
        renderItem={({ item }) => <AnimatedItem item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
        <Text style={{ fontSize: 20, fontWeight: "500", marginTop: "300", top: 486, left:30, position: 'absolute'}}>Seu pedido ficou:</Text>
        <Text style={{ fontSize: 20, fontWeight: "300", marginTop: "300", top: 513, left:80, position: 'absolute'}}>função</Text>
      </View>

      <Modal transparent={true} visible={vis}>
        <View style={{ flex: 1,  justifyContent: 'flex-end' }}>
        <View style={{ 
      position: 'absolute', 
      top: 0, 
      bottom: 0, 
      left: 0, 
      right: 0, 
      backgroundColor: 'rgba(0, 0, 0, 0.5)' 
    }} />
          <View style={{ width: '100%', height: '70%', backgroundColor: 'white', borderRadius: 15, }}>

            <Text style={{ fontSize: 20, fontWeight: "700", top: 18, alignItems: "center"}}>Pagamento do pedido</Text>
            <TouchableOpacity style={{ 
            backgroundColor: '#d4a57b', 
            width: 100 , 
            borderRadius: 50, 
            padding: 10, 
            justifyContent: 'center', 
            alignItems: 'center'}}  
            onPress={() => setVis(false)} >
          <Text> Pagar</Text>
        </TouchableOpacity>


          </View>
        </View>
      </Modal>
      

    </View>
)
}