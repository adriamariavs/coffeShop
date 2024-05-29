import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { styles } from "./src/style/Styles";

// Importa as páginas do aplicativo
import Login from "./src/pages/Login";
import Cadastro from "./src/pages/Cadastro";
import Menu from "./src/pages/Menu";
import Sobre from "./src/pages/Sobre";
import Carrinho from "./src/pages/Carrinho";
import Galeria from "./src/pages/Galeria";
// Importa o componente de drawer personalizado
import CustomDrawer from "./src/componentes/CustomDrawer";

// Importa a função useFonts da biblioteca expo-font para carregar fontes personalizadas
import { useFonts } from "expo-font";

// Cria uma instância do Drawer Navigator
const Drawer = createDrawerNavigator();

export default function App() {
  // Carrega a fonte personalizada "TitanOne-Regular"
  const [fonstLoaded] = useFonts({
    "TitanOne-Regular": require("./src/assets/Fonts/TitanOne-Regular.ttf"),
  });

  const [fonstLoaded2] = useFonts({
    "Baskervville-Regular": require("./src/assets/Fonts/Baskervville-Regular.ttf"),
  });

  // Se as fontes não foram carregadas ainda, retorna undefined 
  if (!fonstLoaded2) {
    return undefined;
  }

  if (!fonstLoaded) {
    return undefined;
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        // Define o componente de conteúdo personalizado para o drawer
        drawerContent={CustomDrawer}
        // Define a rota inicial como "Menu"
        initialRouteName="Menu"
        // Configura as opções das telas no drawer
        screenOptions={{
          drawerActiveTintColor: "black", // Cor do texto do item ativo no drawer
          drawerActiveBackgroundColor: "#d4a57b", // Cor de fundo do item ativo no drawer
        }}
      >
        {/* Define a tela "Menu" no drawer */}
        <Drawer.Screen
          name="Menu"
          component={Menu}
          options={{
            headerStyle: { backgroundColor: "#d4a57b" }, // Estilo do cabeçalho da tela "Menu"
          }}
        />  
        {/* Define a tela "Login" no drawer */}
        <Drawer.Screen name="Login" component={Login} />
        {/* Define a tela "Cadastro" no drawer */}
        <Drawer.Screen name="Cadastro" component={Cadastro} />
        {/* Define a tela "Carrinho" no drawer */}
        <Drawer.Screen
          name="Carrinho"
          component={Carrinho}
          options={{
          headerStyle: { backgroundColor: "#d4a57b" }, // Estilo do cabeçalho da tela "Carrinho"
          headerShadowVisible: false, // Remove a sombra do cabeçalho da tela "Carrinho"
          }}
        />
        <Drawer.Screen name="Galeria" component={Galeria} />
         {/* Define a tela "Sobre" no drawer */}
        <Drawer.Screen
          name="Sobre"
          component={Sobre}
          options={{
          headerStyle: { backgroundColor: "#d4a57b" }, // Estilo do cabeçalho da tela "Carrinho"
          headerShadowVisible: false, // Remove a sombra do cabeçalho da tela "Carrinho"
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
