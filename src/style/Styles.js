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
    textAlign: 'center',
    marginTop: 40,
    color: "#A9A9A9",
    margin: 5,
  },

  Cadas1: {
    fontSize: 15,
    textAlign: 'center',
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
    marginLeft: 92,
    alignItems: "center",
    justifyContent: "center",
    height: 43,
    width: 130,
    backgroundColor: "#d4a57b",
    borderRadius: 25,
    borderBottomWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
  },
  

  // Pág Sobre

  // CARDAPIO Hot Coffee -- item 1
  viewHotCoffe: {
    height: 300,
    width: "100%",
    backgroundColor: "white",
  },

  viewHotCoffe1: { 
    height: 308, 
    width: "100%", 
    justifyContent: "center", 
    alignItems: "center", 
    marginTop: -220, 
    backgroundColor: 'white'
  },

  TextoCardapio: {
    fontSize: 25, 
    fontFamily: "TitanOne-Regular",
    marginBottom: 60,
    marginTop: -200,
    color: '#d4a57b',
    left: -100
  },

  TextoCafes: {
    fontSize: 15, 
    fontFamily: "TitanOne-Regular",
    marginBottom: 10,
    left: -140,
    color: '#d4a57b'
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
    backgroundColor: "white" 
  },

  ImgHot1: { width: 120, 
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
    alignItems: "center" 
  },

  // CARDAPIO Hot Coffee -- item 2

  

});
