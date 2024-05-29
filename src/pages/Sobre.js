import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Sobre() {
  return (
    <View style={{ flex: 1 }}>
    <ScrollView>
      <View
        style={{
          height: 130,
          width: "100%",
          backgroundColor: "#d4a57b",
          borderBottomLeftRadius: 60,
        }}
      >
        <Text
          style={{
            fontFamily: "TitanOne-Regular",
            fontSize: 25,

            marginTop: 40,
            left: 80,
          }}
        >
          Sobre Nós
        </Text>
        <Image
          source={require("../assets/icons/graos.png")}
          style={{ height: 70, width: 60, left: 240, marginTop: -50 }}
        />
      </View>

      <Text
        style={{
          fontSize: 20,
          marginTop: 15,
          textAlign: 'justify',
          marginLeft: 15,
          marginRight: 15,
          fontFamily: 'Baskervville-Regular',
        }}
      >
        Nosso aplicativo de cafeteria virtual oferece uma experiência única e
        conveniente para os amantes de café e gastronomia gourmet. Com ele, você
        pode explorar uma vasta seleção de cafés especiais, doces artesanais e
        salgados gourmet, tudo na palma da sua mão. Navegue por um cardápio
        diversificado que inclui opções de cafés gourmet, chás especiais, bolos,
        sanduíches e outras opções deliciosas, tudo cuidadosamente selecionado
        por nossos especialistas.
      </Text>
      
      <View style={{
        height: 300,
        width: "100%",
        justifyContent: "center",
        alignItems: 'center',
      }}>

    <View style={{
        width: 250,
        height: 250,
        alignItems: "flex-end",
        left: 75,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
        borderRadius: 20,
        backgroundColor: "white",
    }}>

    <Image
        source={require("../assets/image/cafeteriaS.png")}
        style={{ height:"90%", width:"90%", left: -45, borderRadius: 25, marginTop: 13, }}
    />

    <Text
        style={{
        fontFamily: "TitanOne-Regular",
        fontSize: 25,
          }}
        >
          Sobre Nós
        </Text>
        
    </View>
   
      </View>

      </ScrollView>
    </View>
  );
}
