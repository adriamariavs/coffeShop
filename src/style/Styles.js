import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  //Pag Home:

  ImgLogo: {
    height: 302,
    width: 300,
    marginBottom: 40,
  },

  TextHome: {
    fontSize: 25,
    marginTop: 75,
  },

  BtnLoginHome: {
    alignSelf: "center",
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 120,
    backgroundColor: "#755645",
    borderRadius: 25,
    borderBottomWidth: 1,
    borderColor: "black",
    margin: 7,
  },

  BtnCdsHome: {
    alignSelf: "center",
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 120,
    borderRadius: 25,
    borderBottomWidth: 1,
    borderColor: "black",
    margin: 7,
  },

  BtnSaiba: {
    alignSelf: "center",
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 255,
    backgroundColor: "#d4a57b",
    borderRadius: 25,
  },

  //Pag Login:

  BtnLogin: {
    alignSelf: "center",
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 200,
    backgroundColor: "#d4a57b",
    borderRadius: 25,
    borderBottomWidth: 1,
    borderColor: "black",
    margin: 7,
  },

  Welcome: {
    fontSize: 25,
    right: 70,
    fontWeight: "bold",
    marginBottom: 40,
    marginTop: 15,
  },

  TelaLogin: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 35,
    marginBottom: 100,
  },

  InputName: {
    width: 320,
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginTop: 10,
  },

  //Pag Cadastro:

  ViewCadastro: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
    marginBottom: 80,
  },

  TituloCds: {
    fontSize: 25,
    right: 80,
    fontWeight: "bold",
    marginBottom: 40,
  },

  BtnCds: {
    alignSelf: "center",
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 200,
    backgroundColor: "#d4a57b",
    borderRadius: 25,
    borderBottomWidth: 1,
    borderColor: "black",
    margin: 7,
  },

  //Pág Saiba mais

  TextSaiba: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    margin: 15,
  },

  TextSaibaD: {
    fontSize: 20,
    textAlign: "left",
    margin: 30,
    marginTop: 15,
  },

  ImgSobreNós: {
    alignItems: "center",
    justifyContent: "center",
    height: 10,
    width: 10,
  },

  BtnSaibaPG: {
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 255,
    backgroundColor: "#d4a57b",
    borderRadius: 25,
  },

  //Página Menu
  img: {
    width: "300",
    height: "200",
    borderBottomLeftRadius: "20",
    backgroundColor: "#d4a57b",
  },

  header: {
    height: 120,
    backgroundColor: "#d4a57b",
  },

  ViewMenu: { 
    height: 400, 
    width: "100%", 
    justifyContent: "center", 
    alignItems: "center", 
    marginTop: 30 
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
    backgroundColor: "white" 
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
    alignItems: "center" 
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#6200ea',
    paddingVertical: 10,
  },
  
   imgsourceitem: {
    width: 140, 
    height: 190, 
    position: "relative", 
    right: -40,
   },

   animatedViewMenu: {
    backgroundColor: "#d4a57b", 
    borderBottomLeftRadius: 100 
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
    color: '#d4a57b',
   },
   carrinho: { 
    backgroundColor: "#d4a57b",
   },

   //Hot Coffee
   viewHotCoffe: {
    height: 300, 
    width: "100%", 
    backgroundColor: "white" 
   },

   viewHotCoffe2: {

   },

  //Pagamento
  Header: {
    backgroundColor:"#d4a57b",
    height:120,
  }

});
