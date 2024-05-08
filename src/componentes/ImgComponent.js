import { Image } from "react-native";
import { styles } from "../style/Styles";

export default function ImgComponent({ imagem, styles }) {
  return <Image style={styles} source={imagem} />;
}