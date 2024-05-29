import { ImageBackground, View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { styles } from "../style/Styles";

import { useState } from "react";

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



export default function ImageBackgroundComponent({ imageBK, styles }) {
  const [img, setImg] = useState(data[0].imgUrl);

  function renderItem({ item }) {
    return (
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "black",
          borderRadius: 20,
          marginLeft: 20,
          overflow: "hidden",
        }}
      >
        <TouchableOpacity onPress={() => setImg(item.imgUrl)}>
        <Image source={item.imgUrl} style={{ height: "100%", width: "100%" }} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ImageBackground style={styles} source={img}>
      <View style={{ flex: 1 }}></View>

      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}
      >
        <View
          style={{
            width: "95%",
            height: 120,
            backgroundColor: "#DCDCDC88",
            marginBottom: 40,
            borderRadius: 20,
            alignItems: "center",
          }}
        >
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            horizontal={true}
            contentContainerStyle={{
              alignItems: "center",
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
