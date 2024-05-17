// Importações necessárias do React Native
import React, { useState, useEffect, useRef } from "react";
import { View, Image, Text, TouchableOpacity, ScrollView, Animated, } from "react-native";
import { styles } from "../style/Styles"; 
import { useNavigation } from "@react-navigation/native";

// Importações de imagens e ícones
import Carousel from "react-native-snap-carousel"; // Importando componente de carrossel
import AntDesign from "@expo/vector-icons/AntDesign"; 


// Dados para o carrossel
const data = [
  { imgUrl: require('../assets/image/coffe_carousel.png'), 
  topImg: -60, text: "Um Capuccino intenso, e muito cremoso para te esquentar nos dias frios. ", 
  titulo:"Capuccino", preco:"R$8,00"}, 
  { imgUrl: require('../assets/image/milkCarroussel.png'), 
  topImg: -100, text: "Um milkshake saboroso e muito cremoso, para refrescar os dias quentes. ", 
  titulo: "MilkShake de morango", preco:"R$15,00" }, 
  { imgUrl: require('../assets/image/cupcakeCarroussel.png'), 
  topImg: -70, sizeimg:0, text: "Um cupcake com a massa extremamente fofinha, e um creme de cereja. ", 
  titulo:"Cupcake", preco:"R$12,00" }, 
  { imgUrl: require('../assets/image/croissantCarroussel.png'), 
  topImg: -60, sizeimg:0, text: "Um cupcake com a massa extremamente fofinha, e um creme de cereja. ", 
  titulo:"Croissant", preco:"R$10,00" },
];

// Função para renderizar cada item do carrossel
function CarouselCardItem({ item }) {
  return (

    <View style={styles.ViewMenu}>
      
      {/* Container para cada item */}
      <View style={styles.ViewContainerMenu}>
        {/* Imagem do item */}
<Image source={(item.imgUrl)} 
        style={[ styles.imgsourceitem, { top: item.topImg}]} />
        
        {/* Detalhes do item */}
        <View style={{ width: 250, top: -140, padding: 15, marginTop: 20,}}>
          <Text style={{ fontSize: 20, fontWeight: "700", marginTop: "200"}}>{item.preco}</Text>
          <Text style={{ fontSize: 20, fontWeight: "700", marginTop: 2,}}>{item.titulo}</Text>
          <Text style={{ color: "gray", marginTop: 6, }}
          >{item.text}</Text>
          
          {/* Botão de adicionar */}
          <TouchableOpacity style={styles.TouchableMenuAdd}>
            <AntDesign color="white" size={25} name="plus" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// Componente principal do Menu
export default function Menu() {

  const scrollViewRef = useRef(null);

  const scrollToSection = (section) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: section,
        animated: true,
      });
    }
  }

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
  const [selectedButton, setSelectedButton] = useState("cafeGelado");

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      {/* Contêiner de rolagem */}
      <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
      <AntDesign name="shoppingcart" style={styles.carrinho} size={24} color="black" onPress={() => navigation.navigate("Carrinho")}/>
        
        {/* Animação de fundo */}
        <Animated.View style={[styles.animatedViewMenu, {height: heightValue}]} />
       
        {/* Barra de botões */}
        <View style={{ flexDirection: "row", 
        height: 70, 
        alignItems: "center", 
        justifyContent: "space-around" }}>
          
          {/* Botão Hot Coffee */}
          <TouchableOpacity style={[styles.botaocoffemenu, {backgroundColor: selectedButton === "bebidasQuentes" ? "white" : "white" }]} 
            onPress={() => {scrollToSection(650); setSelectedButton("bebidasQuentes")}}>
            <Text style={{ color: selectedButton === "bebidasQuentes" ? "#d4a57b" : "black" }}
            >Bebidas quentes</Text>
            <View style={{ borderBottomWidth: selectedButton === "bebidasQuentes" ? 2 : 0, 
            borderColor: "#d4a57b", width: 50 }} />
          </TouchableOpacity>
          
          {/* Botão Cold Coffee */}
          <TouchableOpacity style={[styles.botaocoffemenu, {backgroundColor: selectedButton === "bebidasGeladas" ? "white" : "white" }]} 
            onPress={() => {scrollToSection(1950); setSelectedButton("bebidasGeladas")}}>
            <Text style={{ color: selectedButton === "bebidasGeladas" ? "#d4a57b" : "black" }}
            >Bebidas Geladas</Text>
            <View style={{ borderBottomWidth: selectedButton === "bebidasGeladas" ? 2 : 0, 
            borderColor: "#d4a57b", width: 50 }} />
          </TouchableOpacity>
         
          {/* Botão Cookies */}
          <TouchableOpacity style={[styles.botaocoffemenu, {backgroundColor: selectedButton === "comidas" ? "white" : "white" }]} 
            onPress={() => {scrollToSection(3210); setSelectedButton("comidas")}}>
            <Text style={{ color: selectedButton === "comidas" ? "#d4a57b" : "black" }}
            >Comidas</Text>
            <View style={{ borderBottomWidth: selectedButton === "comidas" ? 2 : 0, 
            borderColor: "#d4a57b", width: 50 }} />
          </TouchableOpacity>
        </View>
        
        <Text style={styles.textfontmenu}
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


      {/* COFFEE HOT */}
      {/* ITEM 1 */}
        
        <View style={styles.viewHotCoffe} />


        <View style={{ 
        height: 308, 
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
          <Text style={{ color: "gray", marginTop: 5, }}
          >Um sabor intenso e inesquecivel.</Text>
          
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

   {/* ITEM 2 */}

    <View style={{ 
        height: 220, 
        width: "100%", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: 'white',
        marginTop: -30, }}>
      
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
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Café com leite</Text>
          <Text style={{ color: "gray" }}
          >Cremoso, reconfortante e cheio de sabor.</Text>
          
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

    {/* ITEM 3 */}

    <View style={{ 
        height: 210, 
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
          <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 6,00</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Chá de hortelã</Text>
          <Text style={{ color: "gray" }}
          >Refresque seu dia com nosso chá quente de hortelã e limão</Text>
          
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

    {/* ITEM 4 */}

    <View style={{ 
        height: 210, 
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
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Chá de gengibre</Text>
          <Text style={{ color: "gray" }}
          >Explosão de sabor que aquece o corpo e acalma a alma.</Text>
          
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

{/* ITEM 5 */}

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
  left: -120,
  color: '#d4a57b',}}
  > Chocolates </Text>

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
  <Image source={require("../assets/image/coffeeHot5.png")} 
  style={{ 
  width: 120, 
  height: 145, 
  position: "relative", 
  top: -25, 
  right: 240, }} />
  
  {/* Detalhes do item */}
  <View style={{ width: 240, top: -152, padding: 15 }}>
    <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 12,00</Text>
    <Text style={{ fontSize: 20, fontWeight: "700" }}>Chocolate misto</Text>
    <Text style={{ color: "gray", marginTop: 5, }}
    > Quente, cremoso e delicioso.</Text>
    
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

{/* ITEM 6 */}

<View style={{ 
        height: 210, 
        width: "100%", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: 'white',
        marginTop: 10, }}>
      
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
        <Image source={require("../assets/image/coffeeHot6.png")} 
        style={{ 
        width: 100, 
        height: 140, 
        position: "relative", 
        top: -20, 
        right: 245, }} />
        
        {/* Detalhes do item */}
        <View style={{ width: 240, top: -152, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 12,00</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Chocolate quente</Text>
          <Text style={{ color: "gray" }}
          >Experimente o nosso delicioso chocolate quente, aconchego em cada gole.</Text>
          
          {/* Botão de adicionar */}
          <TouchableOpacity style={{ 
            left: 190, 
            top: -9,
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



    {/* COLD COFFEE */}

    <View style={{ 
  height: 300, 
  width: "100%", 
  justifyContent: "center", 
  alignItems: "center", 
  backgroundColor: 'white',
  marginBottom: -30,
  marginTop: -15,}}>

    <Text style={{
        fontSize: 25, 
        fontFamily: "TitanOne-Regular",
        color: '#d4a57b',
        left: -80,}}
        > Cold Coffee </Text>

      <Text style={{
        fontSize: 15, 
        fontFamily: "TitanOne-Regular",
        marginBottom: 10,
        marginTop: 50,
        left: -100,
        color: '#d4a57b',}}
        > Cafés Gelados </Text>
      
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
        <Image source={require("../assets/image/coldCoffee1.png")} 
        style={{ width: 70, 
        height: 120, 
        position: "relative", 
        top: 5, 
        right: 250, }} />
        
        {/* Detalhes do item */}
        <View style={{ width: 240, top: -120, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 7,00</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Iced latte</Text>
          <Text style={{ color: "gray", marginTop: 5, }}
          >Café com leite cremoso, e algumas pedras de gelo.</Text>
          
          {/* Botão de adicionar */}
          <TouchableOpacity style={{ 
            left: 190, 
            top: 0,
            width: 40, 
            marginTop: 10,
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

    {/* ITEM 2 */}

      <View style={{ 
        height: 190, 
        width: "100%", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: 'white',
        marginTop: 35, }}>
      
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
        <Image source={require("../assets/image/coldCoffee2.png")} 
        style={{ 
        width: 100, 
        height: 140, 
        position: "relative", 
        top: -10, 
        right: 245, }} />
        
        {/* Detalhes do item */}
        <View style={{ width: 240, top: -152, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700"}}>R$ 10,00</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Afogatto</Text>
          <Text style={{ color: "gray" }}
          >Café com sorvete cremosíssimo de baunilha.</Text>
          
          {/* Botão de adicionar */}
          <TouchableOpacity style={{ 
            left: 190, 
            top: 12,
            marginTop: 9,
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


    {/* ITEM 3 */}
    <View style={{ 
        height: 210, 
        width: "100%", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: 'white',
        marginTop: -15, }}>

    <Text style={{
        fontSize: 15, 
        fontFamily: "TitanOne-Regular",
        marginBottom: 10,
        left: -110,
        color: '#d4a57b',}}
        > Chás Gelados</Text>
      
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
        <Image source={require("../assets/image/coldCoffee3.png")} 
        style={{ 
        width: 120, 
        height: 120, 
        position: "relative", 
        top: 5, 
        right: 240, }} />
        
        {/* Detalhes do item */}
        <View style={{ width: 240, top: -120, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 7,00</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Early grey</Text>
          <Text style={{ color: "gray" }}
          >MIsura de chás pretos com essência de bergamota.</Text>
          
          {/* Botão de adicionar */}
          <TouchableOpacity style={{ 
            left: 190, 
            top: 0,
            marginTop: 9,
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

    {/* ITEM 4 */}

    <View style={{ 
        height: 210, 
        width: "100%", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: 'white',
        marginTop: -10, }}>
      
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
        <Image source={require("../assets/image/coldCoffee4.png")} 
        style={{ 
        width: 100, 
        height: 120, 
        position: "relative", 
        top: 5, 
        right: 245, }} />
        
        {/* Detalhes do item */}
        <View style={{ width: 240, top: -125, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 7,00</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Teavana</Text>
          <Text style={{ color: "gray" }}
          >Mistura de hibiscus gelados com limonada.</Text>
          
          {/* Botão de adicionar */}
          <TouchableOpacity style={{ 
            left: 190, 
            top: -9,
            marginTop: 25,
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

   {/* ITEM 5 */}

    <View style={{ 
        height: 210, 
        width: "100%", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: 'white',
        marginTop: -15, }}>

    <Text style={{
        fontSize: 15, 
        fontFamily: "TitanOne-Regular",
        marginBottom: 10,
        left: -110,
        color: '#d4a57b',}}
        > Milk Shakes</Text>
      
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
        <Image source={require("../assets/image/coldCoffee5.png")} 
        style={{ 
        width: 85, 
        height: 120, 
        position: "relative", 
        top: 5, 
        right: 250, }} />
        
        {/* Detalhes do item */}
        <View style={{ width: 240, top: -120, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 11,00</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>MIlkshake de baunilha</Text>
          <Text style={{ color: "gray" }}
          >Sorvete de baunilha batido com leite, com um toque de chantilly.</Text>
          
          {/* Botão de adicionar */}
          <TouchableOpacity style={{ 
            left: 190,
            marginTop: 9, 
            top: 0,
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


    {/* ITEM 6 */}

    <View style={{ 
        height: 210, 
        width: "100%", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: 'white',
        marginTop: -10, }}>
      
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
        <Image source={require("../assets/image/coldCoffee6.png")} 
        style={{ 
        width: 100, 
        height: 120, 
        position: "relative", 
        top: 5, 
        right: 245, }} />
        
        {/* Detalhes do item */}
        <View style={{ width: 240, top: -135, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 12,00</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Milkshake de chocolate</Text>
          <Text style={{ color: "gray" }}
          >Sorvete cremosíssimo de chocolate batido com leite, e biscoitos.</Text>
          
          {/* Botão de adicionar */}
          <TouchableOpacity style={{ 
            left: 190, 
            top: -10,
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

  {/* COMIDAS - ITEM 1 */}

    <View style={{ 
  height: 300, 
  width: "100%", 
  justifyContent: "center", 
  alignItems: "center", 
  backgroundColor: 'white',
  marginBottom: -30,
  marginTop: -15,}}>

    <Text style={{
        fontSize: 25, 
        fontFamily: "TitanOne-Regular",
        color: '#d4a57b',
        left: -100,}}
        > Comidas </Text>

      <Text style={{
        fontSize: 15, 
        fontFamily: "TitanOne-Regular",
        marginBottom: 10,
        marginTop: 50,
        left: -135,
        color: '#d4a57b',}}
        > Pães </Text>
      
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
        <Image source={require("../assets/image/comida1.png")} 
        style={{ width: 80, 
        height: 90, 
        position: "relative", 
        top: 20, 
        right: 250, }} />
        
        {/* Detalhes do item */}
        <View style={{ width: 240, top: -90, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 0,50</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Pão francês</Text>
          <Text style={{ color: "gray", marginTop: 5, }}
          >Pão quentinho francês, com ingredientes selecionados.</Text>
          
          {/* Botão de adicionar */}
          <TouchableOpacity style={{ 
            left: 190, 
            top: 10,
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

      {/* ITEM 2 */}

      <View style={{ 
        height: 210, 
        width: "100%", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: 'red',
        top: 20, }}>
      
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
        <Image source={require("../assets/image/comida2.png")} 
        style={{ 
        width: 100, 
        height: 120, 
        position: "relative", 
        top: 5, 
        right: 240, }} />
        
        {/* Detalhes do item */}
        <View style={{ width: 240, top: -125, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 8,00</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Pães de queijo</Text>
          <Text style={{ color: "gray" }}
          >Cesta com 8 pães de queijo quentinhos e macios.</Text>
          
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


    {/* ITEM 3 */}

    <View style={{ 
        height: 210, 
        width: "100%", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: 'white',
        marginTop: -12, }}>
      
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
        <Image source={require("../assets/image/comida3.png")} 
        style={{ 
        width: 100, 
        height: 120, 
        position: "relative", 
        top: 5, 
        right: 240, }} />
        
        {/* Detalhes do item */}
        <View style={{ width: 240, top: -125, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 6,00</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Misto quente</Text>
          <Text style={{ color: "gray" }}
          >Pão com fatias de presunto e queijo, e uma base de maionese.</Text>
          
          {/* Botão de adicionar */}
          <TouchableOpacity style={{ 
            left: 190, 
            top: -3,
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


    {/* ITEM 4 */}

    <View style={{ 
        height: 210, 
        width: "100%", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: 'white',
        marginTop: -20, }}>
      
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
        <Image source={require("../assets/image/comida4.png")} 
        style={{ 
        width: 100, 
        height: 120, 
        position: "relative", 
        top: 5, 
        right: 240, }} />
        
        {/* Detalhes do item */}
        <View style={{ width: 240, top: -125, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 10,00</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Sanduíche</Text>
          <Text style={{ color: "gray" }}
          >Pão com fatias de presunto, queijo, alface, e tomate.</Text>
          
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
    
     {/* salgados - ITEM 1 */}

     <View style={{ 
  height: 300, 
  width: "100%", 
  justifyContent: "center", 
  alignItems: "center", 
  backgroundColor: 'white',
  marginBottom: -100,
  marginTop: -10,}}>

      <Text style={{
        fontSize: 15, 
        fontFamily: "TitanOne-Regular",
        marginBottom: 10,
        marginTop: -115,
        left: -120,
        color: '#d4a57b',}}
        > Salgados </Text>
      
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
        <Image source={require("../assets/image/salgado1.png")} 
        style={{ width: 100, 
        height: 100, 
        position: "relative", 
        top: 20, 
        right: 240, }} />
        
        {/* Detalhes do item */}
        <View style={{ width: 240, top: -90, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 8,00</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Cesta de kibes</Text>
          <Text style={{ color: "gray", marginTop: 5, }}
          >Cestinha com 3 unidades de kibes selecionados.</Text>
          
          {/* Botão de adicionar */}
          <TouchableOpacity style={{ 
            left: 190, 
            top: -3,
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

    {/* ITEM 2 */}

    <View style={{ 
        height: 210, 
        width: "100%", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: 'white',}}>
      
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
        <Image source={require("../assets/image/salgado2.png")} 
        style={{ 
        width: 100, 
        height: 120, 
        position: "relative", 
        top: 5, 
        right: 240, }} />
        
        {/* Detalhes do item */}
        <View style={{ width: 240, top: -125, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 10,00</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Cesta de coxinhas</Text>
          <Text style={{ color: "gray" }}
          >Cestinha com 6 unidades de deliciosas coxinhas, feitas com ingredientes selecionados.</Text>
          
          {/* Botão de adicionar */}
          <TouchableOpacity style={{ 
            left: 190, 
            top: -9,
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
    
    {/* ITEM 3 */}

    <View style={{ 
        height: 210, 
        width: "100%", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: 'white',
        marginTop: -20,}}>
      
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
        <Image source={require("../assets/image/salgado3.png")} 
        style={{ 
        width: 100, 
        height: 120, 
        position: "relative", 
        top: 5, 
        right: 240, }} />
        
        {/* Detalhes do item */}
        <View style={{ width: 240, top: -125, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 6,00</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Risoles</Text>
          <Text style={{ color: "gray" }}
          >Deliciosos risoles de presunto e queijo com uma deliciosa massa.</Text>
          
          {/* Botão de adicionar */}
          <TouchableOpacity style={{ 
            left: 190, 
            top: -9,
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

     {/* DOCES - ITEM 1 */}

     <View style={{ 
        height: 210, 
        width: "100%", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: 'white',
        marginTop: 50,}}>

<Text style={{
        fontSize: 15, 
        fontFamily: "TitanOne-Regular",
        marginBottom: 10,
        marginTop: -115,
        left: -120,
        color: '#d4a57b',}}
        > Doces </Text>
      
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
        <Image source={require("../assets/image/doce1.png")} 
        style={{ 
        width: 110, 
        height: 90, 
        position: "relative", 
        top: 20, 
        right: 230, }} />
        
        {/* Detalhes do item */}
        <View style={{ width: 240, top: -100, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 12,00</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Cookies</Text>
          <Text style={{ color: "gray" }}
          >3 unidades de maravilhosos cookies de baunilha com gotas de chocolate.</Text>
          
          {/* Botão de adicionar */}
          <TouchableOpacity style={{ 
            left: 190, 
            top: -9,
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

     {/* ITEM 2 */}

     <View style={{ 
        height: 210, 
        width: "100%", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: 'white',
        marginTop: -70,}}>
      
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
        <Image source={require("../assets/image/doce2.png")} 
        style={{ 
        width: 100, 
        height: 120, 
        position: "relative", 
        top: 5, 
        right: 240, }} />
        
        {/* Detalhes do item */}
        <View style={{ width: 240, top: -125, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 14,00</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Brownies</Text>
          <Text style={{ color: "gray" }}
          >3 pedaços de deliciosos brownies de chocolate, com uma casquinha super crocante.</Text>
          
          {/* Botão de adicionar */}
          <TouchableOpacity style={{ 
            left: 190, 
            top: -9,
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

    {/* ITEM 3 */}

    <View style={{ 
        height: 210, 
        width: "100%", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: 'white',
        marginTop: -20,}}>
      
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
        <Image source={require("../assets/image/doces3.png")} 
        style={{ 
        width: 100, 
        height: 90, 
        position: "relative", 
        top: 15, 
        right: 240, }} />
        
        {/* Detalhes do item */}
        <View style={{ width: 240, top: -100, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 15,00</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Donuts</Text>
          <Text style={{ color: "gray" }}
          >2 unidades de maravilhosos donuts fofinhos, com recheio de creme, e cobertura de chocolate branco.</Text>
          
          {/* Botão de adicionar */}
          <TouchableOpacity style={{ 
            left: 190, 
            top: -9,
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
    
    {/* ITEM 4 */}

    <View style={{ 
        height: 210, 
        width: "100%", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: 'white',
        marginTop: -8,}}>
      
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
        <Image source={require("../assets/image/doces4.png")} 
        style={{ 
        width: 100, 
        height: 90, 
        position: "relative", 
        top: 15, 
        right: 240, }} />
        
        {/* Detalhes do item */}
        <View style={{ width: 240, top: -100, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 8,00</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Bolo red velvet</Text>
          <Text style={{ color: "gray" }}
          >Delicioso bolo de massa red velvet com recheio de creme, e cobertura de frutas.</Text>
          
          {/* Botão de adicionar */}
          <TouchableOpacity style={{ 
            left: 190, 
            top: -9,
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
    

  )};
