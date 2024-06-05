import { View, Text, Image } from "react-native";
import { styles } from "../style/Styles";
import { ScrollView } from "react-native-gesture-handler";

export default function Sobre() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            height: 580,
            width: "100%",
            borderRadius: 100,
          }}
        >
          <Image
            source={require("../assets/image/sobreTeste2.png")}
            style={{
              height: "100%",
              width: "100%",
              borderBottomRightRadius: 80,
              borderBottomLeftRadius: 80,
            }}
          />
        </View>

        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            fontFamily: "DMSerifDisplay-Regular",
            marginTop: 35,
          }}
        >
          Conheça mais sobre nós!
        </Text>

        <View
          style={{ width: "100%", height: 100, backgroundColor: "#F8F8FF" }}>

          <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            marginTop: 35,
          }}
        >
          O aplicativo de cardápio virtual de café oferece aos usuários uma 
          experiência digital para explorar uma variedade de opções de cafés, 
          doces e salgados gourmet. Com que permita visualizar descrições, 
          imagens atraentes e informações sobre ingredientes e preços. Ideal 
          para entusiastas de café que buscam conveniência e sofisticação, o 
          aplicativo facilita a escolha e o pedido de suas delícias favoritas 
          diretamente de seu dispositivo móvel.
        </Text>

        </View>
      </ScrollView>
    </View>
  );
}
