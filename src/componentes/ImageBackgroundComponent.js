import {
  ImageBackground,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { styles } from "../style/Styles"; 
import { useState } from "react";

// Definindo uma constante 'data' que é um array de objetos representando imagens
const data = [
  { id: 1, imgUrl: require("../assets/image/EntregaCafe.png") },
  { id: 3, imgUrl: require("../assets/image/MaquinaCafe.png") },
  { id: 4, imgUrl: require("../assets/image/CafeChantili.png") },
  { id: 5, imgUrl: require("../assets/image/CafeGraçon.png") },
  { id: 6, imgUrl: require("../assets/image/CafeTarde.png") },
  { id: 7, imgUrl: require("../assets/image/DateCafe.png") },
  { id: 8, imgUrl: require("../assets/image/Forno.png") },
  { id: 9, imgUrl: require("../assets/image/PreparandoCafe.png") },
];

export default function ImageBackgroundComponent({ stylesBk }) {
  // Usando useState para gerenciar a imagem atualmente selecionada
  const [img, setImg] = useState(data[0].imgUrl);

  // Função para renderizar cada item na FlatList
  function renderItem({ item }) {
    const isSelected = item.imgUrl === img; // Verifica se a imagem atual está selecionada

    return (
      // Container para cada imagem
      <View
        style={[
          stylesImg.imageContainer,
          isSelected && stylesImg.selectedImageContainer, // Aplica estilo adicional se a imagem estiver selecionada
        ]}
      >
        {/* TouchableOpacity torna a imagem clicável */}
        <TouchableOpacity onPress={() => setImg(item.imgUrl)}>
          {/* Componente ImageBackground para exibir a imagem */}
          {isSelected ? (
            <ImageBackground
              source={item.imgUrl}
              style={{ height: "100%", width: "100%" }}
            ></ImageBackground>
          ) : (
            <ImageBackground
              source={item.imgUrl}
              style={{ height: "100%", width: "100%" }}
              blurRadius={8}
            ></ImageBackground>
          )}
        </TouchableOpacity>
      </View>
    );
  }

  return (
    // Componente ImageBackground define a imagem de fundo
    <ImageBackground style={stylesBk} source={img}>
      {/* View vazia para ocupar espaço na metade superior da tela */}
      <View style={{ flex: 1 }}></View>

      {/* View para a parte inferior da tela */}
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}
      >
        {/* Container para a FlatList */}
        <View
          style={{
            width: "95%",
            height: 120,
            backgroundColor: "#DCDCDC88", // Cor de fundo semitransparente
            marginBottom: 40,
            borderRadius: 20,
            alignItems: "center",
          }}
        >
          {/* Componente FlatList para exibir uma lista horizontal de imagens */}
          <FlatList
            data={data} // Define os dados a serem exibidos
            keyExtractor={(item) => item.id.toString()} // Extrai a chave única para cada item
            renderItem={renderItem} // Define a função para renderizar cada item
            horizontal={true} // Exibe a lista na horizontal
            contentContainerStyle={{
              alignItems: "center", // Centraliza os itens
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const stylesImg = StyleSheet.create({
  imageContainer: {
    width: 90,
    height: 90,
    backgroundColor: "black", // Cor de fundo preta para as imagens
    borderRadius: 20,
    marginLeft: 20,
    overflow: "hidden", // Garante que o conteúdo não transborde do contêiner
  },
  selectedImageContainer: {
    width: 110,
    height: 110, // Aumenta o tamanho do contêiner da imagem selecionada
  },
});
