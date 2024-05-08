import { View, Text, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView>
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
        <Image
          source={require("../assets/icons/coffee-cup.png")}
          style={{ width: 65, height: 65 }}
        />
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
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
