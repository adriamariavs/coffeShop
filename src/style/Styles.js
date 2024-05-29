import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  loginup: {
    width: 100,
    height: 100,
  },

  //Pag Login:

  BtnLogin: {
    alignSelf: "center",
    marginTop: 250,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 250,
    backgroundColor: "#d4a57b",
    borderRadius: 250,
    borderBottomWidth: 1,
    borderColor: "black",
  },

  Welcome: {
    fontSize: 30,
    right: 50,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
    textAlign: "center",
  },

  Descri: {
    fontSize: 15,
    right: 30,
    marginBottom: 40,
    textAlign: "center",
    color: "#A9A9A9",
  },

  Senha: {
    fontSize: 13,
    left: 87,
    marginTop: 15,
    color: "#A9A9A9",
  },

  Cadas: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 40,
    color: "#A9A9A9",
    margin: 5,
  },

  Cadas1: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 40,
    color: "#d4a57b",
    margin: 5,
  },

  flexrow: {
    flexDirection: "row",
  },

  TelaLogin: {
    flex: 1,
    paddingTop: 35,
    marginBottom: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  InputName: {
    width: 320,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#808080",
    alignSelf: "center",
    justifyContent: "center",
  },

  ImgLogin: {
    width: 75,
    height: 75,
    right: 130,
  },

  //Pag Cadastro:

  TelaCds: {
    flex: 1,
    paddingTop: 35,
    marginBottom: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  ImgCds: {
    width: 75,
    height: 75,
    right: 130,
  },

  WelcomeCds: {
    fontSize: 30,
    right: 72,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
    textAlign: "center",
  },

  DescriCds: {
    fontSize: 15,
    right: 15,
    marginBottom: 2,
    textAlign: "center",
    color: "#A9A9A9",
  },

  DescriCds1: {
    fontSize: 15,
    right: 110,
    marginBottom: 40,
    textAlign: "center",
    color: "#A9A9A9",
  },

  SenhaCds: {
    fontSize: 13,
    right: 110,
    marginTop: 15,
    color: "#d4a57b",
  },

  //Página Menu
  img: {
    width: "300",
    height: "200",
    borderBottomLeftRadius: "20",
    backgroundColor: "#d4a57b",
  },

  header: {
    height: 110,
    backgroundColor: "#d4a57b",
  },

  ViewMenu: {
    height: 400,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  ViewContainerMenu: {
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
  },

  TouchableMenuAdd: {
    left: 215,
    marginTop: 30,
    marginRight: 80,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d4a57b",
    justifyContent: "center",
    alignItems: "center",
  },

  imgsourceitem: {
    width: 130,
    height: 165,
    position: "relative",
    right: 10,
  },

  animatedViewMenu: {
    backgroundColor: "#d4a57b",
    borderBottomLeftRadius: 100,
  },

  botaocoffemenu: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  textfontmenu: {
    fontSize: 25,
    fontFamily: "TitanOne-Regular",
    marginTop: 15,
    left: 30,
    color: "#d4a57b",
    marginBottom: 50,
  },

  // Pág Carrinho
  Btncomprar: {
    alignSelf: "center",
    top: 700,
    alignItems: "center",
    justifyContent: "center",
    height: 43,
    width: 130,
    backgroundColor: "#d4a57b",
    borderColor: "black",
    backgroundColor: "white",
  },

  modal2: {
    width: 20,
    height: 40,
  },


  btnpagar: {
    backgroundColor: "#d4a57b",
    width: 120,
    height: 50,
    borderRadius: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    left: "60%",
    borderBottomWidth: 1,
  },


  btnconcluir: {
    backgroundColor: "#d4a57b",
    width: 100,
    borderRadius: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    top: "85%",
    left: "38%",
  },

  // Pág Sobre

  // CARDAPIO Hot Coffee -- item 1
  viewHotCoffe1: {
    height: 300,
    width: "100%",
    backgroundColor: "white",
  },

  viewHotCoffe2: {
    height: 308,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -220,
    backgroundColor: "white",
  },

  TextoCardapio: {
    fontSize: 25,
    fontFamily: "TitanOne-Regular",
    marginBottom: 60,
    marginTop: -200,
    color: "#d4a57b",
    left: -100,
  },

  TextoCafes: {
    fontSize: 15,
    fontFamily: "TitanOne-Regular",
    marginBottom: 10,
    left: -140,
    color: "#d4a57b",
  },

  Item1: {
    width: 340,
    height: 130,
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },

  ImgHot1: {
    width: 120,
    height: 120,
    position: "relative",
    top: 10,
    right: 240,
  },

  BtnHot1: {
    left: 190,
    top: 15,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d4a57b",
    justifyContent: "center",
    alignItems: "center",
  },

  // CARDAPIO Hot Coffee -- item 2

  viewHotCoffe3: {
    height: 220,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: -110,
  },

  viewHotCoffe4: {
    width: 340,
    height: 130,
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },

  ImgHot2: {
    width: 120,
    height: 120,
    position: "relative",
    top: 0,
    right: 240,
  },

  BtnHot2: {
    left: 190,
    top: 15,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d4a57b",
    justifyContent: "center",
    alignItems: "center",
  },

  // CARDAPIO Hot Coffee -- item 3
  viewHotCoffe5: {
    height: 210,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: -15,
  },

  viewHotCoffe6: {
    width: 340,
    height: 130,
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },

  TextoChas: {
    fontSize: 15,
    fontFamily: "TitanOne-Regular",
    marginBottom: 10,
    left: -140,
    color: "#d4a57b",
  },

  ImgHot3: {
    width: 110,
    height: 100,
    position: "relative",
    top: 5,
    right: 240,
  },

  BtnHot3: {
    left: 190,
    top: 15,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d4a57b",
    justifyContent: "center",
    alignItems: "center",
  },

  // CARDAPIO Hot Coffee -- item 4

  viewHotCoffe7: {
    height: 210,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: -2,
  },

  viewHotCoffe8: {
    width: 340,
    height: 130,
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },

  ImgHot4: {
    width: 110,
    height: 100,
    position: "relative",
    top: 5,
    right: 240,
  },

  BtnHot4: {
    left: 190,
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d4a57b",
    justifyContent: "center",
    alignItems: "center",
  },

  // CARDAPIO Hot Coffee -- item 5
  viewHotCoffe9: {
    height: 190,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: -15,
  },

  viewHotCoffe10: {
    width: 340,
    height: 130,
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },

  TextoChocolates: {
    fontSize: 15,
    fontFamily: "TitanOne-Regular",
    marginBottom: 10,
    left: -120,
    color: "#d4a57b",
  },

  ImgHot5: {
    width: 120,
    height: 145,
    position: "relative",
    top: -25,
    right: 240,
  },

  BtnHot5: {
    left: 190,
    top: 15,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d4a57b",
    justifyContent: "center",
    alignItems: "center",
  },

  // CARDAPIO Hot Coffee -- item 6

  viewHotCoffe11: {
    height: 210,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 10,
  },

  viewHotCoffe12: {
    width: 340,
    height: 130,
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },

  ImgHot6: {
    width: 100,
    height: 140,
    position: "relative",
    top: -20,
    right: 245,
  },

  BtnHot6: {
    left: 190,
    top: -9,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d4a57b",
    justifyContent: "center",
    alignItems: "center",
  },

  // CARDAPIO Cold Coffee -- item 1
  viewColdCoffe1: {
    height: 300,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: -30,
    marginTop: -15,
  },

  viewColdCoffe2: {
    width: 340,
    height: 130,
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },

  TextoColdCoffee: {
    fontSize: 25,
    fontFamily: "TitanOne-Regular",
    color: "#d4a57b",
    left: -80,
  },

  TextoCafeGelado: {
    fontSize: 15,
    fontFamily: "TitanOne-Regular",
    marginBottom: 10,
    marginTop: 50,
    left: -100,
    color: "#d4a57b",
  },

  ImgCold1: {
    width: 70,
    height: 120,
    position: "relative",
    top: 5,
    right: 250,
  },

  BtnCold1: {
    left: 190,
    top: 0,
    width: 40,
    marginTop: 10,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d4a57b",
    justifyContent: "center",
    alignItems: "center",
  },

  // CARDAPIO Cold Coffee -- item 2

  viewColdCoffe3: {
    height: 190,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 35,
  },

  viewColdCoffe4: {
    width: 340,
    height: 130,
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },

  ImgCold2: {
    width: 100,
    height: 140,
    position: "relative",
    top: -10,
    right: 245,
  },

  BtnCold2: {
    left: 190,
    top: 12,
    marginTop: 9,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d4a57b",
    justifyContent: "center",
    alignItems: "center",
  },

  // CARDAPIO Cold Coffee -- item 3
  viewColdCoffe5: {
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: -3,
  },

  viewColdCoffe6: {
    width: 340,
    height: 130,
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },

  TextoChasGelados: {
    fontSize: 15,
    fontFamily: "TitanOne-Regular",
    marginBottom: 10,
    left: -110,
    color: "#d4a57b",
  },

  ImgCold3: {
    width: 120,
    height: 120,
    position: "relative",
    top: 5,
    right: 240,
  },

  BtnCold3: {
    left: 190,
    top: 0,
    marginTop: 4,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d4a57b",
    justifyContent: "center",
    alignItems: "center",
  },

  // CARDAPIO Cold Coffee -- item 4
  viewColdCoffe7: {
    height: 210,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: -1,
  },

  viewColdCoffe8: {
    width: 340,
    height: 130,
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },

  ImgCold4: {
    width: 100,
    height: 120,
    position: "relative",
    top: 5,
    right: 245,
  },

  BtnCold4: {
    left: 190,
    top: -9,
    marginTop: 15,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d4a57b",
    justifyContent: "center",
    alignItems: "center",
  },

  // CARDAPIO Cold Coffee -- item 5
  viewColdCoffe9: {
    height: 210,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: -20,
  },

  viewColdCoffe10: {
    width: 340,
    height: 130,
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },

  TextoMilkShakes: {
    fontSize: 15,
    fontFamily: "TitanOne-Regular",
    marginBottom: 10,
    left: -110,
    color: "#d4a57b",
  },

  ImgCold5: {
    width: 85,
    height: 120,
    position: "relative",
    top: 5,
    right: 250,
  },

  BtnCold5: {
    left: 190,
    marginTop: 9,
    top: 0,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d4a57b",
    justifyContent: "center",
    alignItems: "center",
  },

  // CARDAPIO Cold Coffee -- item 6
  viewColdCoffe11: {
    height: 210,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: -2,
  },

  viewColdCoffe12: {
    width: 340,
    height: 130,
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },

  ImgCold6: {
    width: 100,
    height: 120,
    position: "relative",
    top: 5,
    right: 245,
  },

  BtnCold6: {
    left: 190,
    top: -20,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d4a57b",
    justifyContent: "center",
    alignItems: "center",
  },

  // CARDAPIO Comidas -- item 1 Paes
  viewComidasP1: {
    height: 300,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: -30,
    marginTop: -15,
  },

  viewComidasP2: {
    width: 340,
    height: 130,
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },

  TextoComidas: {
    fontSize: 25,
    fontFamily: "TitanOne-Regular",
    color: "#d4a57b",
    left: -100,
  },

  TextoPaes: {
    fontSize: 15,
    fontFamily: "TitanOne-Regular",
    marginBottom: 10,
    marginTop: 50,
    left: -135,
    color: "#d4a57b",
  },

  ImgPaes1: {
    width: 80,
    height: 90,
    position: "relative",
    top: 20,
    right: 250,
  },

  BtnPaes1: {
    left: 190,
    top: 10,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d4a57b",
    justifyContent: "center",
    alignItems: "center",
  },

  // CARDAPIO Comidas -- item 2 Paes
  viewComidasP3: {
    height: 210,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    top: 30,
  },

  viewComidasP4: {
    width: 340,
    height: 130,
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },

  ImgPaes2: {
    width: 100,
    height: 120,
    position: "relative",
    top: 5,
    right: 240,
  },

  BtnPaes2: {
    left: 190,
    top: 15,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d4a57b",
    justifyContent: "center",
    alignItems: "center",
  },

  // CARDAPIO Comidas -- item 3 Paes
  viewComidasP5: {
    height: 210,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 16,
  },

  viewComidasP6: {
    width: 340,
    height: 130,
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },

  ImgPaes3: {
    width: 100,
    height: 120,
    position: "relative",
    top: 5,
    right: 240,
  },

  BtnPaes3: {
    left: 190,
    top: -3,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d4a57b",
    justifyContent: "center",
    alignItems: "center",
  },

  // CARDAPIO Comidas -- item 4 Paes
  viewComidasP7: {
    height: 210,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: -30,
  },

  viewComidasP8: {
    width: 340,
    height: 130,
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },

  ImgPaes4: {
    width: 100,
    height: 120,
    position: "relative",
    top: 5,
    right: 240,
  },

  BtnPaes4: {
    left: 190,
    top: 15,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d4a57b",
    justifyContent: "center",
    alignItems: "center",
  },

  // CARDAPIO Comidas -- item 1 Salgados
  viewComidasS1: {
    height: 300,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: -100,
    marginTop: -10,
  },

  viewComidasS2: {
    width: 340,
    height: 130,
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },

  TextoSalgado: {
    fontSize: 15,
    fontFamily: "TitanOne-Regular",
    marginBottom: 10,
    marginTop: -115,
    left: -120,
    color: "#d4a57b",
  },

  ImgSalgado1: {
    width: 100,
    height: 100,
    position: "relative",
    top: 20,
    right: 240,
  },

  BtnSalgado1: {
    left: 190,
    top: -3,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d4a57b",
    justifyContent: "center",
    alignItems: "center",
  },

  // CARDAPIO Comidas -- item 2 Salgados
  viewComidasS3: {
    height: 210,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  viewComidasS4: {
    width: 340,
    height: 130,
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },

  ImgSalgado2: {
    width: 100,
    height: 120,
    position: "relative",
    top: 5,
    right: 240,
  },

  BtnSalgado2: {
    left: 190,
    top: -9,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d4a57b",
    justifyContent: "center",
    alignItems: "center",
  },

  // CARDAPIO Comidas -- item 3 Salgados
  viewComidasS5: {
    height: 210,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: -20,
  },

  viewComidasS6: {
    width: 340,
    height: 130,
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },

  ImgSalgado3: {
    width: 100,
    height: 120,
    position: "relative",
    top: 5,
    right: 240,
  },

  BtnSalgado3: {
    left: 190,
    top: -9,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d4a57b",
    justifyContent: "center",
    alignItems: "center",
  },

  // CARDAPIO Comidas -- item 1 Doces
  viewComidasD1: {
    height: 210,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 50,
  },

  viewComidasD2: {
    width: 340,
    height: 130,
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },

  TextoDoces: {
    fontSize: 15,
    fontFamily: "TitanOne-Regular",
    marginBottom: 10,
    marginTop: -115,
    left: -120,
    color: "#d4a57b",
  },

  ImgDoce1: {
    width: 110,
    height: 90,
    position: "relative",
    top: 20,
    right: 230,
  },

  BtnDoce1: {
    left: 190,
    top: -9,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d4a57b",
    justifyContent: "center",
    alignItems: "center",
  },

  // CARDAPIO Comidas -- item 2 Doces
  viewComidasD3: {
    height: 210,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: -70,
  },

  viewComidasD4: {
    width: 340,
    height: 130,
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },

  ImgDoce2: {
    width: 100,
    height: 120,
    position: "relative",
    top: 5,
    right: 240,
  },

  BtnDoce2: {
    left: 190,
    top: -9,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d4a57b",
    justifyContent: "center",
    alignItems: "center",
  },

  // CARDAPIO Comidas -- item 3 Doces
  viewComidasD5: {
    height: 210,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: -20,
  },

  viewComidasD6: {
    width: 340,
    height: 130,
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },

  ImgDoce3: {
    width: 100,
    height: 90,
    position: "relative",
    top: 15,
    right: 240,
  },

  BtnDoce3: {
    left: 190,
    top: -9,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d4a57b",
    justifyContent: "center",
    alignItems: "center",
  },

  // CARDAPIO Comidas -- item 4 Doces
  viewComidasD7: {
    height: 210,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: -8,
  },

  viewComidasD8: {
    width: 340,
    height: 130,
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },

  ImgDoce4: {
    width: 100,
    height: 90,
    position: "relative",
    top: 15,
    right: 240,
  },

  BtnDoce4: {
    left: 190,
    top: -9,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d4a57b",
    justifyContent: "center",
    alignItems: "center",
  },

  //Carrinho
  modal2: {
    width: 20,
    height: 30,
  },

  flatListContent: {
    justifyContent: "center",
    flexGrow: 1,
    alignItems: "center",
  },

  box: {
    height: 100,
    flexDirection: "row",
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },

  containermodal: {
    flex: 1,
  },

  resultado: {
    fontSize: 20,
    fontWeight: "200",
    bottom:50,
    left:50,
    width:"50%",
  },
  text: {
    fontSize: 20,
    fontWeight: "900",
    marginTop: "200",
    top: 20,
    alignItems: "center",
    textAlign: "center",
  },

  funcao: {
    fontSize: 20,
    fontWeight: "700",
    bottom:50,
    left:80,
  },
});
