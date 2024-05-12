// Importações necessárias do React Native
import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity, ScrollView, Animated, } from "react-native";
import { styles } from "../style/Styles"; 
import { useNavigation } from "@react-navigation/native"; 

// Importações de imagens e ícones
import Carousel from "react-native-snap-carousel"; // Importando componente de carrossel
import carrossel_1 from "../assets/image/carrossel_1.png"; // Importando imagens do carrossel
import carrossel_2 from "../assets/image/carrossel_2.png";
import carrossel_3 from "../assets/image/carrossel_3.png";
import AntDesign from "@expo/vector-icons/AntDesign"; 

// Dados para o carrossel
const data = [
  { imgUrl: carrossel_1 }, 
  { imgUrl: carrossel_2 }, 
  { imgUrl: carrossel_3 }, 
];

// Função para renderizar cada item do carrossel
function CarouselCardItem({ item }) {
  return (
    <View style={{ height: 400, 
    width: "100%", 
    justifyContent: "center", 
    alignItems: "center", 
    marginTop: 30 }}>
      
      {/* Container para cada item */}
      <View style={{ width: 250, 
        height: 250, 
        alignItems: "flex-end", 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 5 }, 
        shadowOpacity: 0.5, 
        shadowRadius: 10, 
        elevation: 5, 
        borderRadius: 20, 
        backgroundColor: "white" }}>
       
        {/* Imagem do item */}
        <Image source={require("../assets/image/coffe_carousel.png")} 
        style={{ width: 200, 
        height: 200, 
        position: "relative", 
        top: -100, 
        right: -40 }} />
        
        {/* Detalhes do item */}
        <View style={{ width: 250, top: -140, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 20,00</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Cappuccino</Text>
          <Text style={{ color: "gray" }}
          >O cappuccino, com sua mistura irresistível de café expresso, 
          leite vaporizado e espuma de leite cremosa, 
          é uma verdadeira obra-prima na xícara.</Text>
          
          {/* Botão de adicionar */}
          <TouchableOpacity style={{ left: 215, 
            width: 40, 
            height: 40, 
            borderRadius: 10, 
            backgroundColor: "#d4a57b", 
            justifyContent: "center", 
            alignItems: "center" }}>
            <AntDesign color="white" size={25} name="plus" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// Componente principal do Menu
export default function Menu() {
  const navigation = useNavigation(); 

  // Estado para controlar a animação de altura
  const [heightValue] = useState(new Animated.Value(0));

  // Efeito para iniciar a animação 
  useEffect(() => {
    Animated.timing(heightValue, {
      toValue: 80, // Valor final da altura
      duration: 5000, // Duração da animação
      useNativeDriver: false, 
    }).start();
  }, []);

  // Estado para controlar o botão selecionado
  const [selectedButton, setSelectedButton] = useState("hotCoffee");

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      {/* Contêiner de rolagem */}
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Animação de fundo */}
        <Animated.View style={{ backgroundColor: "#d4a57b", 
        height: heightValue, 
        borderBottomLeftRadius: 100 }} />
        
        {/* Barra de botões */}
        <View style={{ flexDirection: "row", 
        height: 70, 
        alignItems: "center", 
        justifyContent: "space-around" }}>
          
          {/* Botão Hot Coffee */}
          <TouchableOpacity style={{ padding: 5, 
            justifyContent: "center", 
            alignItems: "center", 
            backgroundColor: selectedButton === "hotCoffee" ? "white" : "white" }} 
            onPress={() => setSelectedButton("hotCoffee")}>
            <Text style={{ color: selectedButton === "hotCoffee" ? "#d4a57b" : "black" }}
            >Hot Coffee</Text>
            <View style={{ borderBottomWidth: selectedButton === "hotCoffee" ? 2 : 0, 
            borderColor: "#d4a57b", width: 50 }} />
          </TouchableOpacity>
          
          {/* Botão Cold Coffee */}
          <TouchableOpacity style={{ padding: 5, 
            justifyContent: "center", 
            alignItems: "center", 
            backgroundColor: selectedButton === "coldCoffee" ? "white" : "white" }} 
            onPress={() => setSelectedButton("coldCoffee")}>
            <Text style={{ color: selectedButton === "coldCoffee" ? "#d4a57b" : "black" }}
            >Cold Coffee</Text>
            <View style={{ borderBottomWidth: selectedButton === "coldCoffee" ? 2 : 0, 
            borderColor: "#d4a57b", width: 50 }} />
          </TouchableOpacity>
         
          {/* Botão Cookies */}
          <TouchableOpacity style={{ padding: 5, 
            justifyContent: "center", 
            alignItems: "center", 
            backgroundColor: selectedButton === "cookies" ? "white" : "white" }} 
            onPress={() => setSelectedButton("cookies")}>
            <Text style={{ color: selectedButton === "cookies" ? "#d4a57b" : "black" }}
            >Cookies</Text>
            <View style={{ borderBottomWidth: selectedButton === "cookies" ? 2 : 0, 
            borderColor: "#d4a57b", width: 50 }} />
          </TouchableOpacity>
        </View>
        
        <Text style={{
        fontSize: 25, 
        fontFamily: "TitanOne-Regular",
        marginTop: 15,
        left: 30,
        color: '#d4a57b',}}
        > Populares </Text>

        {/* Carrossel de imagens */}
        <View style={{ height: 400, justifyContent: "center", alignItems: "center" }}>
          <Carousel data={data} 
          renderItem={CarouselCardItem} 
          sliderWidth={400} 
          itemWidth={400} 
          autoplay={true} 
          autoplayInterval={3000} 
          loop={true} layout={"dafult"} 
          layoutCardOffset={`9`} />
        </View>

        
        <View style={{ height: 300, width: "100%", backgroundColor: "white" }} />


        <View style={{ 
        height: 300, 
        width: "100%", 
        justifyContent: "center", 
        alignItems: "center", 
        marginTop: -240, 
        backgroundColor: 'white',}}>

      <Text style={{
        fontSize: 25, 
        fontFamily: "TitanOne-Regular",
        marginBottom: 65,
        marginTop: -60,
        color: '#d4a57b',
        left: -100,}}
        > Cardápio </Text>

      <Text style={{
        fontSize: 15, 
        fontFamily: "TitanOne-Regular",
        marginBottom: 10,
        left: -140,
        color: '#d4a57b',}}
        > Cafés </Text>
      
      {/* Container para cada item */}
      <View style={{ 
        width: 340, 
        height: 130, 
        alignItems: "flex-end", 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 5 }, 
        shadowOpacity: 0.5, 
        shadowRadius: 10, 
        elevation: 5, 
        borderRadius: 20, 
        backgroundColor: "white" }}>
       
        {/* Imagem do item */}
        <Image source={require("../assets/image/coffeHot1.png")} 
        style={{ width: 120, 
        height: 120, 
        position: "relative", 
        top: 10, 
        right: 240, }} />
        
        {/* Detalhes do item */}
        <View style={{ width: 240, top: -120, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 5,00</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Café expresso</Text>
          <Text style={{ color: "gray" }}
          >O ...</Text>
          
          {/* Botão de adicionar */}
          <TouchableOpacity style={{ 
            left: 190, 
            top: 15,
            width: 40, 
            height: 40, 
            borderRadius: 10, 
            backgroundColor: "#d4a57b", 
            justifyContent: "center", 
            alignItems: "center" }}>
            <AntDesign color="white" size={25} name="plus" />
          </TouchableOpacity>
        </View>
      </View>
    </View>



    <View style={{ 
        height: 190, 
        width: "100%", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: 'white',
        marginTop: -40, }}>
      
      {/* Container para cada item */}
      <View style={{ 
        width: 340, 
        height: 130, 
        alignItems: "flex-end", 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 5 }, 
        shadowOpacity: 0.5, 
        shadowRadius: 10, 
        elevation: 5, 
        borderRadius: 20, 
        backgroundColor: "white" }}>
       
        {/* Imagem do item */}
        <Image source={require("../assets/image/coffeeHot2.png")} 
        style={{ 
        width: 120, 
        height: 120, 
        position: "relative", 
        top: 0, 
        right: 240, }} />
        
        {/* Detalhes do item */}
        <View style={{ width: 240, top: -120, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 6,00</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Café expresso</Text>
          <Text style={{ color: "gray" }}
          >O ...</Text>
          
          {/* Botão de adicionar */}
          <TouchableOpacity style={{ 
            left: 190, 
            top: 15,
            width: 40, 
            height: 40, 
            borderRadius: 10, 
            backgroundColor: "#d4a57b", 
            justifyContent: "center", 
            alignItems: "center" }}>
            <AntDesign color="white" size={25} name="plus" />
          </TouchableOpacity>
        </View>
      </View>
    </View>

    

    <View style={{ 
        height: 190, 
        width: "100%", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: 'white',
        marginTop: -15, }}>

    <Text style={{
        fontSize: 15, 
        fontFamily: "TitanOne-Regular",
        marginBottom: 10,
        left: -140,
        color: '#d4a57b',}}
        > Chás </Text>
      
      {/* Container para cada item */}
      <View style={{ 
        width: 340, 
        height: 130, 
        alignItems: "flex-end", 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 5 }, 
        shadowOpacity: 0.5, 
        shadowRadius: 10, 
        elevation: 5, 
        borderRadius: 20, 
        backgroundColor: "white" }}>
       
        {/* Imagem do item */}
        <Image source={require("../assets/image/coffeeHot3.png")} 
        style={{ 
        width: 110, 
        height: 100, 
        position: "relative", 
        top: 5, 
        right: 240, }} />
        
        {/* Detalhes do item */}
        <View style={{ width: 240, top: -110, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 12,00</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Café expresso</Text>
          <Text style={{ color: "gray" }}
          >O ...</Text>
          
          {/* Botão de adicionar */}
          <TouchableOpacity style={{ 
            left: 190, 
            top: 15,
            width: 40, 
            height: 40, 
            borderRadius: 10, 
            backgroundColor: "#d4a57b", 
            justifyContent: "center", 
            alignItems: "center" }}>
            <AntDesign color="white" size={25} name="plus" />
          </TouchableOpacity>
        </View>
      </View>
    </View>

    <View style={{ 
        height: 190, 
        width: "100%", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: 'white',
        marginTop: -2, }}>
      
      {/* Container para cada item */}
      <View style={{ 
        width: 340, 
        height: 130, 
        alignItems: "flex-end", 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 5 }, 
        shadowOpacity: 0.5, 
        shadowRadius: 10, 
        elevation: 5, 
        borderRadius: 20, 
        backgroundColor: "white" }}>
       
        {/* Imagem do item */}
        <Image source={require("../assets/image/coffeeHot4.png")} 
        style={{ 
        width: 110, 
        height: 100, 
        position: "relative", 
        top: 5, 
        right: 240, }} />
        
        {/* Detalhes do item */}
        <View style={{ width: 240, top: -110, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 6,00</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Café expresso</Text>
          <Text style={{ color: "gray" }}
          >O ...</Text>
          
          {/* Botão de adicionar */}
          <TouchableOpacity style={{ 
            left: 190, 
            top: 20,
            width: 40, 
            height: 40, 
            borderRadius: 10, 
            backgroundColor: "#d4a57b", 
            justifyContent: "center", 
            alignItems: "center" }}>
            <AntDesign color="white" size={25} name="plus" />
          </TouchableOpacity>
        </View>
      </View>
    </View>

      </ScrollView>
    </View>
  );
}
