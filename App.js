import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { styles } from "./src/style/Styles";
//Importando Páginas
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Cadastro from "./src/pages/Cadastro";
import Sobre from "./src/pages/Sobre";
import Menu from "./src/pages/Menu";
import CustomDrawer from "./src/componentes/CustomDrawer";

import { useFonts } from "expo-font";

const Drawer = createDrawerNavigator();

export default function App() {
  const [fonstLoaded] = useFonts({
    "TitanOne-Regular": require("./src/assets/Fonts/TitanOne-Regular.ttf"),
  });

  if (!fonstLoaded) {
    return undefined;
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={CustomDrawer}
        initialRouteName="Menu"
        screenOptions={{
          drawerActiveTintColor: "black",
          drawerActiveBackgroundColor: "#d4a57b",
        }}
      >

        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: { backgroundColor: "white" },
          }}
        />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Cadastro" component={Cadastro} />
        <Drawer.Screen name="Sobre" component={Sobre} />
        <Drawer.Screen
          name="Menu"
          component={Menu}
          options={{
            headerStyle: { backgroundColor: "#d4a57b" },
            headerShadowVisible: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
