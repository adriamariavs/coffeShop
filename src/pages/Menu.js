import React, { useState, useEffect } from "react";
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

// Importando os pacotes de Carousel
import Carousel from "react-native-snap-carousel";

// Importndo Imagens
import carrossel_1 from "../assets/image/carrossel_1.png";
import carrossel_2 from "../assets/image/carrossel_2.png";
import carrossel_3 from "../assets/image/carrossel_3.png";

import AntDesign from "@expo/vector-icons/AntDesign";

const data = [
  {
    imgUrl: carrossel_1,
  },
  {
    imgUrl: carrossel_2,
  },
  {
    imgUrl: carrossel_3,
  },
];

function CarouselCardItem({ item }) {
  return (
    <View
      style={{
        height: 400,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
      }}
    >
      <View
        style={{
          width: 250,
          height: 250,
          alignItems: "flex-end",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.5,
          shadowRadius: 10,
          elevation: 5,
          borderRadius: 20,
          backgroundColor: "white",
        }}
      >
        <Image
          source={require("../assets/image/coffe_carousel.png")}
          style={{
            width: 200,
            height: 200,
            position: "relative",
            top: -100,
            right: -40,
          }}
        />
        <View
          style={{
            width: 250,
            top: -140,
            padding: 15,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 700 }}>R$ 20,00</Text>
          <Text style={{ fontSize: 20, fontWeight: 700 }}>Cappuccino</Text>
          <Text style={{ color: "gray" }}>
            O cappuccino, com sua mistura irresistível de café expresso, leite
            vaporizado e espuma de leite cremosa, é uma verdadeira obra-prima na
            xícara.
          </Text>
          <TouchableOpacity
            style={{
              left: 215,
              width: 40,
              height: 40,
              borderRadius: 10,
              backgroundColor: "#d4a57b",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign color="white" size={25} name="plus" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default function Menu() {
  const navigation = useNavigation();

  const [heightValue] = useState(new Animated.Value(0));

  // Função para iniciar a animação quando o componente é montado
  useEffect(() => {
    Animated.timing(heightValue, {
      toValue: 80, // Defina o valor final da altura aqui
      duration: 5000,
      useNativeDriver: false, // `useNativeDriver` não é suportado para animações de layout
    }).start();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Animated.View
          style={{
            backgroundColor: "#d4a57b",
            height: heightValue,
            borderBottomLeftRadius: 100,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            height: 70,
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            style={{
              padding: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#d4a57b" }}>Hot Coffee</Text>
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: "#d4a57b",
                width: 50,
              }}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Cold Coffee</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Cookies</Text>
          </TouchableOpacity>
        </View>
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
        <View
          style={{ height: 300, width: "100%", backgroundColor: "white" }}
        ></View>
      </ScrollView>
    </View>
  );
}
