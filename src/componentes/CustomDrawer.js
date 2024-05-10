import { View, Text, Image } from "react-native";
import { DrawerContentScrollView, DrawerItemList, } from "@react-navigation/drawer";

export default function CustomDrawer(props) {
  return (
    // Componente de rolagem para o conteúdo do drawer
    <DrawerContentScrollView>
      {/* Cabeçalho do drawer */}
      <View
        style={{
          width: "100%",
          height: 85,
          alignItems: "center",
          justifyContent: "center",
          margin: 15,
          borderBottomWidth: 1,
          borderColor: "#d4a57b",
        }}
      >

        {/* Ícone do cabeçalho */}
        <Image
          source={require("../assets/icons/graos.png")}
          style={{ width: 65, height: 65 }}
        />
        
        {/* Texto de boas-vindas */}
        <Text
          style={{
            fontFamily: "TitanOne-Regular",
            color: "black",
            fontSize: 15,
            padding: 10,
          }}
        >
          Bem vindo ao{" "}
          <Text
            style={{
              fontFamily: "TitanOne-Regular",
              fontSize: 15,
            }}
          >
            Coffee Shop
          </Text>
        </Text>
      </View>
      {/* Lista de itens do drawer */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
