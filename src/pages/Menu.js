// Importações necessárias do React Native
import React, { useState, useEffect, useRef, Modal } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";
import { styles } from "../style/Styles";
import { useNavigation } from "@react-navigation/native";

// Importações de imagens e ícones
import Carousel from "react-native-snap-carousel"; // Importando componente de carrossel
import AntDesign from "@expo/vector-icons/AntDesign";

// Dados para o carrossel
const data = [
  {
    imgUrl: require("../assets/image/coffe_carousel.png"),
    height: 30,
    topImg: -60,
    heightImg: 160,
    bottomimg: -10,
    text: "Um Capuccino intenso, e muito cremoso para te esquentar nos dias frios. ",
    titulo: "Capuccino",
    preco: "R$8,00",
  },
  {
    imgUrl: require("../assets/image/milkCarroussel.png"),
    topImg: -100,
    heightImg: 180,
    bottomimg: -20,
    text: "Um milkshake saboroso e muito cremoso, para refrescar os dias quentes. ",
    titulo: "MilkShake de morango",
    preco: "R$15,00",
  },
  {
    imgUrl: require("../assets/image/cupcakeCarroussel.png"),
    topImg: -70,
    sizeimg: 0,
    heightImg: 160,
    bottomimg: -10,
    text: "Um cupcake com a massa extremamente fofinha, e um creme de cereja. ",
    titulo: "Cupcake",
    preco: "R$12,00",
  },
  {
    imgUrl: require("../assets/image/croassantCarroussel.png"),
    topImg: -60,
    sizeimg: 0,
    heightImg: 130,
    topimg: 60,
    text: "Um croissant com a massa extremamente fofinha, e um recheio maravilhoso de presunto e queijo.",
    titulo: "Croissant",
    preco: "R$10,00",
    height: 400,
    width: 200,
  },
];

// Função para renderizar cada item do carrossel
function CarouselCardItem({ item }) {
  return (
    <View style={styles.ViewMenu}>
      {/* Container para cada item */}
      <View style={styles.ViewContainerMenu}>
        {/* Imagem do item */}
        <Image
          source={item.imgUrl}
          style={[
            styles.imgsourceitem,
            {
              top: item.topImg,
              height: item.heightImg,
              marginBottom: item.bottomimg,
            },
          ]}
        />

        {/* Detalhes do item */}
        <View style={{ width: 250, top: -140, padding: 15, marginTop: 50 }}>
          <Text style={{ fontSize: 20, fontWeight: "700", marginTop: "200" }}>
            {item.preco}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "700", marginTop: 2 }}>
            {item.titulo}
          </Text>
          <Text style={{ color: "gray", marginTop: 6 }}>{item.text}</Text>

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
  };

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
        {/* Animação de fundo */}
        <Animated.View
          style={[styles.animatedViewMenu, { height: heightValue }]}
        />
        <View style={styles.carrinho}>
          <TouchableOpacity>
            <AntDesign
              style={styles.carrinhoImg}
              name="shoppingcart"
              size={30}
              color="black"
            />
          </TouchableOpacity>
        </View>
        {/* Barra de botões */}
        <View
          style={{
            flexDirection: "row",
            height: 70,
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {/* Botão que desce a View até "Cafés Quentes" */}
          <TouchableOpacity
            // Define o estilo do botão usando 'styles.botaocoffemenu'. A cor de fundo é branca, independentemente do estado.
            style={[
              styles.botaocoffemenu,
              {
                backgroundColor:
                  selectedButton === "bebidasQuentes" ? "white" : "white",
              },
            ]}
            // Função a ser executada quando o botão é pressionado
            onPress={() =>
              // Rola a tela até a posição 650 pixels na vertical e seleciona o botão ativo
              {
                scrollToSection(650);
                setSelectedButton("bebidasQuentes");
              }
            }
          >
            {/* Texto do botão */}
            <Text
              style={{
                color:
                  selectedButton === "bebidasQuentes" ? "#d4a57b" : "black",
              }} // Se 'selectedButton' for "bebidasQuentes", a cor será '#d4a57b', caso contrário, será 'black'
            >
              Bebidas quentes
            </Text>
            <View
              style={{
                borderBottomWidth: selectedButton === "bebidasQuentes" ? 2 : 0, // Se 'selectedButton' for "bebidasQuentes", a largura da borda inferior será 2, caso contrário, será 0.
                borderColor: "#d4a57b",
                width: 50,
              }}
            />
          </TouchableOpacity>

          {/* Botão que desce a View até "Café Gelado" */}
          <TouchableOpacity
            // Define o estilo do botão usando 'styles.botaocoffemenu'. A cor de fundo é branca, independentemente do estado.
            style={[
              styles.botaocoffemenu,
              {
                backgroundColor:
                  selectedButton === "bebidasGeladas" ? "white" : "white",
              },
            ]}
            // Função a ser executada quando o botão é pressionado
            onPress={() =>
              // Rola a tela até a posição 650 pixels na vertical e seleciona o botão ativo
              {
                scrollToSection(1950);
                setSelectedButton("bebidasGeladas");
              }
            }
          >
            {/* Texto do botão */}
            <Text
              style={{
                color:
                  selectedButton === "bebidasGeladas" ? "#d4a57b" : "black",
              }} // Se 'selectedButton' for "bebidasGeladas", a cor será '#d4a57b', caso contrário, será 'black'
            >
              Bebidas Geladas
            </Text>
            <View
              style={{
                borderBottomWidth: selectedButton === "bebidasGeladas" ? 2 : 0, // Se 'selectedButton' for "bebidasGeladas", a largura da borda inferior será 2, caso contrário, será 0.
                borderColor: "#d4a57b",
                width: 50,
              }}
            />
          </TouchableOpacity>

          {/* Botão que desce a View até "Comida" */}
          <TouchableOpacity
            // Define o estilo do botão usando 'styles.botaocoffemenu'. A cor de fundo é branca, independentemente do estado.
            style={[
              styles.botaocoffemenu,
              {
                backgroundColor:
                  selectedButton === "comidas" ? "white" : "white",
              },
            ]}
            onPress={() =>
              // Rola a tela até a posição 650 pixels na vertical e seleciona o botão ativo
              {
                scrollToSection(3210);
                setSelectedButton("comidas");
              }
            }
          >
            {/* Texto do botão */}
            <Text
              style={{
                color: selectedButton === "comidas" ? "#d4a57b" : "black",
              }} // Se 'selectedButton' for "comidas", a cor será '#d4a57b', caso contrário, será 'black'
            >
              Comidas
            </Text>
            <View
              style={{
                borderBottomWidth: selectedButton === "comidas" ? 2 : 0, // Se 'selectedButton' for "comidas", a largura da borda inferior será 2, caso contrário, será 0.
                borderColor: "#d4a57b",
                width: 50,
              }}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.textfontmenu}> Populares </Text>

        {/* Carrossel de imagens */}
        <View
          style={{
            height: 400,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Carousel
            data={data}
            renderItem={CarouselCardItem}
            sliderWidth={400}
            itemWidth={400}
            autoplay={true}
            autoplayInterval={3000}
            loop={true}
            layout={"dafult"}
            layoutCardOffset={`9`}
          />
        </View>

        {/* COFFEE HOT */}
        {/* ITEM 1 */}

        <View style={styles.viewHotCoffe1} />
        <View style={styles.viewHotCoffe2}>
          <Text style={styles.TextoCardapio}> Cardápio </Text>
          <Text style={styles.TextoCafes}> Cafés </Text>

          {/* Container para cada item */}
          <View style={styles.Item1}>
            {/* Imagem do item */}
            <Image
              source={require("../assets/image/coffeHot1.png")}
              style={styles.ImgHot1}
            />

            {/* Detalhes do item */}
            <View style={{ width: 240, top: -120, padding: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 5,00</Text>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                Café expresso
              </Text>
              <Text style={{ color: "gray", marginTop: 5 }}>
                Um sabor intenso e inesquecivel.
              </Text>

              {/* Botão de adicionar */}
              <TouchableOpacity style={styles.BtnHot1}>
                <AntDesign color="white" size={25} name="plus" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ITEM 2 */}

        <View style={styles.viewHotCoffe3}>
          {/* Container para cada item */}
          <View style={styles.viewHotCoffe4}>
            {/* Imagem do item */}
            <Image
              source={require("../assets/image/coffeeHot2.png")}
              style={styles.ImgHot2}
            />

            {/* Detalhes do item */}
            <View style={{ width: 240, top: -120, padding: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 6,00</Text>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                Café com leite
              </Text>
              <Text style={{ color: "gray" }}>
                Cremoso, reconfortante e cheio de sabor.
              </Text>

              {/* Botão de adicionar */}
              <TouchableOpacity style={styles.BtnHot2}>
                <AntDesign color="white" size={25} name="plus" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ITEM 3 */}

        <View style={styles.viewHotCoffe5}>
          <Text style={styles.TextoChas}>Chás </Text>

          {/* Container para cada item */}
          <View style={styles.viewHotCoffe6}>
            {/* Imagem do item */}
            <Image
              source={require("../assets/image/coffeeHot3.png")}
              style={styles.ImgHot3}
            />

            {/* Detalhes do item */}
            <View style={{ width: 240, top: -110, padding: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 6,00</Text>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                Chá de hortelã
              </Text>
              <Text style={{ color: "gray" }}>
                Refresque seu dia com nosso chá quente de hortelã e limão
              </Text>

              {/* Botão de adicionar */}
              <TouchableOpacity style={styles.BtnHot3}>
                <AntDesign color="white" size={25} name="plus" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ITEM 4 */}

        <View style={styles.viewHotCoffe7}>
          {/* Container para cada item */}
          <View style={styles.viewHotCoffe8}>
            {/* Imagem do item */}
            <Image
              source={require("../assets/image/coffeeHot4.png")}
              style={styles.ImgHot4}
            />

            {/* Detalhes do item */}
            <View style={{ width: 240, top: -110, padding: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 6,00</Text>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                Chá de gengibre
              </Text>
              <Text style={{ color: "gray" }}>
                Explosão de sabor que aquece o corpo e acalma a alma.
              </Text>

              {/* Botão de adicionar */}
              <TouchableOpacity style={styles.BtnHot4}>
                <AntDesign color="white" size={25} name="plus" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ITEM 5 */}

        <View style={styles.viewHotCoffe9}>
          <Text style={styles.TextoChocolates}> Chocolates </Text>

          {/* Container para cada item */}
          <View style={styles.viewHotCoffe10}>
            {/* Imagem do item */}
            <Image
              source={require("../assets/image/coffeeHot5.png")}
              style={styles.ImgHot5}
            />

            {/* Detalhes do item */}
            <View style={{ width: 240, top: -152, padding: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 12,00</Text>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                Chocolate misto
              </Text>
              <Text style={{ color: "gray", marginTop: 5 }}>
                {" "}
                Quente, cremoso e delicioso.
              </Text>

              {/* Botão de adicionar */}
              <TouchableOpacity style={styles.BtnHot5}>
                <AntDesign color="white" size={25} name="plus" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ITEM 6 */}

        <View style={styles.viewHotCoffe11}>
          {/* Container para cada item */}
          <View style={styles.viewHotCoffe12}>
            {/* Imagem do item */}
            <Image
              source={require("../assets/image/coffeeHot6.png")}
              style={styles.ImgHot6}
            />

            {/* Detalhes do item */}
            <View style={{ width: 240, top: -152, padding: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 12,00</Text>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                Chocolate quente
              </Text>
              <Text style={{ color: "gray" }}>
                Experimente o nosso delicioso chocolate quente, aconchego em
                cada gole.
              </Text>

              {/* Botão de adicionar */}
              <TouchableOpacity style={styles.BtnHot6}>
                <AntDesign color="white" size={25} name="plus" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* COLD COFFEE */}

        <View style={styles.viewColdCoffe1}>
          <Text style={styles.TextoColdCoffee}> Cold Coffee </Text>
          <Text style={styles.TextoCafeGelado}> Cafés Gelados </Text>

          {/* Container para cada item */}
          <View style={styles.viewColdCoffe2}>
            {/* Imagem do item */}
            <Image
              source={require("../assets/image/coldCoffee1.png")}
              style={styles.ImgCold1}
            />

            {/* Detalhes do item */}
            <View style={{ width: 240, top: -120, padding: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 7,00</Text>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                Iced latte
              </Text>
              <Text style={{ color: "gray", marginTop: 5 }}>
                Café com leite cremoso, e algumas pedras de gelo.
              </Text>

              {/* Botão de adicionar */}
              <TouchableOpacity style={styles.BtnCold2}>
                <AntDesign color="white" size={25} name="plus" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ITEM 2 */}

        <View style={styles.viewColdCoffe3}>
          {/* Container para cada item */}
          <View style={styles.viewColdCoffe4}>
            {/* Imagem do item */}
            <Image
              source={require("../assets/image/coldCoffee2.png")}
              style={styles.ImgCold2}
            />

            {/* Detalhes do item */}
            <View style={{ width: 240, top: -152, padding: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 10,00</Text>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>Afogatto</Text>
              <Text style={{ color: "gray" }}>
                Café com sorvete cremosíssimo de baunilha.
              </Text>

              {/* Botão de adicionar */}
              <TouchableOpacity style={styles.BtnCold2}>
                <AntDesign color="white" size={25} name="plus" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ITEM 3 */}
        <View style={styles.viewColdCoffe5}>
          <Text style={styles.TextoChasGelados}> Chás Gelados</Text>

          {/* Container para cada item */}
          <View style={styles.viewColdCoffe6}>
            {/* Imagem do item */}
            <Image
              source={require("../assets/image/coldCoffee3.png")}
              style={styles.ImgCold3}
            />

            {/* Detalhes do item */}
            <View style={{ width: 240, top: -120, padding: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 7,00</Text>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                Early grey
              </Text>
              <Text style={{ color: "gray" }}>
                MIsura de chás pretos com essência de bergamota.
              </Text>

              {/* Botão de adicionar */}
              <TouchableOpacity style={styles.BtnCold3}>
                <AntDesign color="white" size={25} name="plus" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ITEM 4 */}

        <View style={styles.viewColdCoffe7}>
          {/* Container para cada item */}
          <View style={styles.viewColdCoffe8}>
            {/* Imagem do item */}
            <Image
              source={require("../assets/image/coldCoffee4.png")}
              style={styles.ImgCold4}
            />

            {/* Detalhes do item */}
            <View style={{ width: 240, top: -125, padding: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 7,00</Text>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>Teavana</Text>
              <Text style={{ color: "gray" }}>
                Mistura de hibiscus gelados com limonada.
              </Text>

              {/* Botão de adicionar */}
              <TouchableOpacity style={styles.BtnCold4}>
                <AntDesign color="white" size={25} name="plus" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ITEM 5 */}

        <View style={styles.viewColdCoffe9}>
          <Text style={styles.TextoMilkShakes}> Milk Shakes</Text>

          {/* Container para cada item */}
          <View style={styles.viewColdCoffe10}>
            {/* Imagem do item */}
            <Image
              source={require("../assets/image/coldCoffee5.png")}
              style={styles.ImgCold5}
            />

            {/* Detalhes do item */}
            <View style={{ width: 240, top: -120, padding: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 11,00</Text>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                MIlkshake de baunilha
              </Text>
              <Text style={{ color: "gray" }}>
                Sorvete de baunilha batido com leite, com um toque de chantilly.
              </Text>

              {/* Botão de adicionar */}
              <TouchableOpacity style={styles.BtnCold5}>
                <AntDesign color="white" size={25} name="plus" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ITEM 6 */}

        <View style={styles.viewColdCoffe11}>
          {/* Container para cada item */}
          <View style={styles.viewColdCoffe12}>
            {/* Imagem do item */}
            <Image
              source={require("../assets/image/coldCoffee6.png")}
              style={styles.ImgCold6}
            />

            {/* Detalhes do item */}
            <View style={{ width: 240, top: -135, padding: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 12,00</Text>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                Milkshake de chocolate
              </Text>
              <Text style={{ color: "gray" }}>
                Sorvete cremosíssimo de chocolate batido com leite, e biscoitos.
              </Text>

              {/* Botão de adicionar */}
              <TouchableOpacity style={styles.BtnCold6}>
                <AntDesign color="white" size={25} name="plus" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* COMIDAS - ITEM 1 */}

        <View style={styles.viewComidasP1}>
          <Text style={styles.TextoComidas}> Comidas </Text>
          <Text style={styles.TextoPaes}> Pães </Text>

          {/* Container para cada item */}
          <View style={styles.viewComidasP2}>
            {/* Imagem do item */}
            <Image
              source={require("../assets/image/comida1.png")}
              style={styles.ImgPaes1}
            />

            {/* Detalhes do item */}
            <View style={{ width: 240, top: -90, padding: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 0,50</Text>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                Pão francês
              </Text>
              <Text style={{ color: "gray", marginTop: 5 }}>
                Pão quentinho francês, com ingredientes selecionados.
              </Text>

              {/* Botão de adicionar */}
              <TouchableOpacity style={styles.BtnPaes1}>
                <AntDesign color="white" size={25} name="plus" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ITEM 2 */}

        <View style={styles.viewComidasP3}>
          {/* Container para cada item */}
          <View style={styles.viewComidasP4}>
            {/* Imagem do item */}
            <Image
              source={require("../assets/image/comida2.png")}
              style={styles.ImgPaes2}
            />

            {/* Detalhes do item */}
            <View style={{ width: 240, top: -125, padding: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 8,00</Text>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                Pães de queijo
              </Text>
              <Text style={{ color: "gray" }}>
                Cesta com 8 pães de queijo quentinhos e macios.
              </Text>

              {/* Botão de adicionar */}
              <TouchableOpacity style={styles.BtnPaes2}>
                <AntDesign color="white" size={25} name="plus" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ITEM 3 */}

        <View style={styles.viewComidasP5}>
          {/* Container para cada item */}
          <View style={styles.viewComidasP6}>
            {/* Imagem do item */}
            <Image
              source={require("../assets/image/comida3.png")}
              style={styles.ImgPaes3}
            />

            {/* Detalhes do item */}
            <View style={{ width: 240, top: -125, padding: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 6,00</Text>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                Misto quente
              </Text>
              <Text style={{ color: "gray" }}>
                Pão com fatias de presunto e queijo, e uma base de maionese.
              </Text>

              {/* Botão de adicionar */}
              <TouchableOpacity style={styles.BtnPaes3}>
                <AntDesign color="white" size={25} name="plus" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ITEM 4 */}

        <View style={styles.viewComidasP7}>
          {/* Container para cada item */}
          <View style={styles.viewComidasP8}>
            {/* Imagem do item */}
            <Image
              source={require("../assets/image/comida4.png")}
              style={styles.ImgPaes4}
            />

            {/* Detalhes do item */}
            <View style={{ width: 240, top: -125, padding: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 10,00</Text>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>Sanduíche</Text>
              <Text style={{ color: "gray" }}>
                Pão com fatias de presunto, queijo, alface, e tomate.
              </Text>

              {/* Botão de adicionar */}
              <TouchableOpacity style={styles.BtnPaes4}>
                <AntDesign color="white" size={25} name="plus" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* salgados - ITEM 1 */}

        <View style={styles.viewComidasS1}>
          <Text style={styles.TextoSalgado}> Salgados </Text>

          {/* Container para cada item */}
          <View style={styles.viewComidasS2}>
            {/* Imagem do item */}
            <Image
              source={require("../assets/image/salgado1.png")}
              style={styles.ImgSalgado1}
            />

            {/* Detalhes do item */}
            <View style={{ width: 240, top: -90, padding: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 8,00</Text>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                Cesta de kibes
              </Text>
              <Text style={{ color: "gray", marginTop: 5 }}>
                Cestinha com 3 unidades de kibes selecionados.
              </Text>

              {/* Botão de adicionar */}
              <TouchableOpacity style={styles.BtnSalgado1}>
                <AntDesign color="white" size={25} name="plus" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ITEM 2 */}

        <View style={styles.viewComidasS3}>
          {/* Container para cada item */}
          <View style={styles.viewComidasS4}>
            {/* Imagem do item */}
            <Image
              source={require("../assets/image/salgado2.png")}
              style={styles.ImgSalgado2}
            />

            {/* Detalhes do item */}
            <View style={{ width: 240, top: -125, padding: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 10,00</Text>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                Cesta de coxinhas
              </Text>
              <Text style={{ color: "gray" }}>
                Cestinha com 6 unidades de deliciosas coxinhas, feitas com
                ingredientes selecionados.
              </Text>

              {/* Botão de adicionar */}
              <TouchableOpacity style={styles.BtnSalgado2}>
                <AntDesign color="white" size={25} name="plus" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ITEM 3 */}

        <View style={styles.viewComidasS5}>
          {/* Container para cada item */}
          <View style={styles.viewComidasS6}>
            {/* Imagem do item */}
            <Image
              source={require("../assets/image/salgado3.png")}
              style={styles.ImgSalgado3}
            />

            {/* Detalhes do item */}
            <View style={{ width: 240, top: -125, padding: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 6,00</Text>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>Risoles</Text>
              <Text style={{ color: "gray" }}>
                Deliciosos risoles de presunto e queijo com uma deliciosa massa.
              </Text>

              {/* Botão de adicionar */}
              <TouchableOpacity style={styles.BtnSalgado3}>
                <AntDesign color="white" size={25} name="plus" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* DOCES - ITEM 1 */}

        <View style={styles.viewComidasD1}>
          <Text style={styles.TextoDoces}> Doces </Text>

          {/* Container para cada item */}
          <View style={styles.viewComidasD2}>
            {/* Imagem do item */}
            <Image
              source={require("../assets/image/doce1.png")}
              style={styles.ImgDoce1}
            />

            {/* Detalhes do item */}
            <View style={{ width: 240, top: -100, padding: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 12,00</Text>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>Cookies</Text>
              <Text style={{ color: "gray" }}>
                3 unidades de maravilhosos cookies de baunilha com gotas de
                chocolate.
              </Text>

              {/* Botão de adicionar */}
              <TouchableOpacity style={styles.BtnDoce1}>
                <AntDesign color="white" size={25} name="plus" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ITEM 2 */}

        <View style={styles.viewComidasD3}>
          {/* Container para cada item */}
          <View style={styles.viewComidasD4}>
            {/* Imagem do item */}
            <Image
              source={require("../assets/image/doce2.png")}
              style={styles.ImgDoce2}
            />

            {/* Detalhes do item */}
            <View style={{ width: 240, top: -125, padding: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 14,00</Text>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>Brownies</Text>
              <Text style={{ color: "gray" }}>
                3 pedaços de deliciosos brownies de chocolate, com uma casquinha
                super crocante.
              </Text>

              {/* Botão de adicionar */}
              <TouchableOpacity style={styles.BtnDoce2}>
                <AntDesign color="white" size={25} name="plus" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ITEM 3 */}

        <View style={styles.viewComidasD5}>
          {/* Container para cada item */}
          <View style={styles.viewComidasD6}>
            {/* Imagem do item */}
            <Image
              source={require("../assets/image/doces3.png")}
              style={styles.ImgDoce3}
            />

            {/* Detalhes do item */}
            <View style={{ width: 240, top: -100, padding: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 15,00</Text>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>Donuts</Text>
              <Text style={{ color: "gray" }}>
                2 unidades de maravilhosos donuts fofinhos, com recheio de
                creme, e cobertura de chocolate branco.
              </Text>

              {/* Botão de adicionar */}
              <TouchableOpacity style={styles.BtnDoce3}>
                <AntDesign color="white" size={25} name="plus" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ITEM 4 */}

        <View style={styles.viewComidasD7}>
          {/* Container para cada item */}
          <View style={styles.viewComidasD8}>
            {/* Imagem do item */}
            <Image
              source={require("../assets/image/doces4.png")}
              style={styles.ImgDoce4}
            />

            {/* Detalhes do item */}
            <View style={{ width: 240, top: -100, padding: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>R$ 8,00</Text>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                Bolo red velvet
              </Text>
              <Text style={{ color: "gray" }}>
                Delicioso bolo de massa red velvet com recheio de creme, e
                cobertura de frutas.
              </Text>

              {/* Botão de adicionar */}
              <TouchableOpacity style={styles.BtnDoce4}>
                <AntDesign color="white" size={25} name="plus" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
