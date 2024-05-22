import { View, TouchableOpacity, Text, Modal, Button} from "react-native";
import React, { useState } from "react";
import { styles } from "../style/Styles";
import { useNavigation } from "@react-navigation/native"; 
//Importando Componentes:
import ButtonComponents from "../componentes/ButtonComponents";
import TextComponent from "../componentes/TextComponent";
import ImgComponent from "../componentes/ImgComponent";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Carrinho() {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  // visModal = (vis) => {
  //   if (!visible) {
  //     setVisible(vis);
  //   } else {
  //     setVisible(vis);
  //   }
  // };
 


  return (

    <View style={{ 
      height: 170, 
      width: "100%", 
      justifyContent: "center", 
      alignItems: "center", 
      backgroundColor: '#d4a57b',
      marginTop: -20,
      borderBottomLeftRadius: 60,}}> 
    <View style={styles.header}>

    <View style={styles.modal}>
    <Button  title="Pagar" onPress={() => setVisible(true)} />
<Modal animationType="fade" visible={visible}>
        <Text style={styles.pagamento}>Pagamento</Text>
      </Modal>
    </View>
             
              <View>
              <TouchableOpacity style={[styles.Btncomprar, { marginLeft: 220 }]} 
           onPress={() => setVisible(true)} >
          <Text> Pagar</Text>
        </TouchableOpacity>
              </View>
              <View>
                <Text style={{ fontSize: 20, fontWeight: "600", marginTop: 650,}}>Seu pedido ficou:</Text>
                <Text style={{ fontSize: 20, fontWeight: "300" }}>colocar função</Text>
              </View>
          

    </View>
    </View>
)
}