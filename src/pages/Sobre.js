import { View, Image, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Sobre() {
  return (
    <ScrollView>
        <View
          style={{
            height: 400,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
            backgroundColor: 'white',
          }}
        >
          <Image
            source={require("../assets/image/SobreNós.png")}
            style={{
              width: 400,
              height: 460,
            }}
          />
        </View>

      <View style={{
            height: 250,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
            backgroundColor: 'white',
          }}>
        
        <Text style={{
        fontSize: 25, 
        fontFamily: "TitanOne-Regular",
        color: '#d4a57b',
        marginTop: -15,
        marginBottom: 20,
        right: 100,}}
        > Sobre nós </Text>
      
       <Text style={{
        fontSize: 20,
       }}
       > Bem-vindo ao nosso aplicativo de cafeteria, onde a paixão pelo café encontra 
       a conveniência moderna! Aqui, nossa missão é simples: tornar a sua experiência
       com o café mais fácil, acessível e deliciosa do que nunca.</Text>

      </View>


      <View style={{
            height: 430,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: '#d4a57b',
            opacity: '10%',
          }}>
        
       <Text style={{
        fontSize: 20,
       }}
       > Nosso aplicativo foi criado com um objetivo claro em mente: facilitar 
       o acesso ao seu café favorito, onde quer que você esteja. Quer seja uma 
       pausa rápida no meio do expediente ou um momento de relaxamento em casa, 
       estamos aqui para tornar cada gole de café uma experiência memorável.</Text>

       <Text style={{
        fontSize: 20,
        marginTop: 30,
       }}
       > Além de proporcionar uma experiência de pedido fácil e rápida, também 
       nos dedicamos a fornecer informações detalhadas sobre cada bebida. Queremos 
       que você conheça a origem dos grãos, o processo de preparo e até mesmo a história 
       por trás de cada criação. Acreditamos que quanto mais você conhece sobre o café,
       mais você aprecia cada xícara.</Text>
      </View>


      <View style={{
            height: 350,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: '#DCDCDC',
          }}>
        
       <Text style={{
        fontSize: 20,
       }}
       > Estamos comprometidos em fornecer um serviço excepcional, 
       desde o momento em que você faz o pedido até o último gole de café.
        Nossa equipe está aqui para garantir que cada pedido seja preparado 
        com precisão e cuidado, mantendo sempre a qualidade e o sabor que você merece.

       Agradecemos por fazer parte da nossa jornada e por escolher o nosso aplicativo 
       para satisfazer seus desejos de café. Juntos, vamos continuar a tornar cada momento
        do seu dia um pouco mais especial, uma xícara de café de cada vez.
       
       Bem-vindo ao mundo do café simplificado. Bem-vindo ao nosso aplicativo de cafeteria.</Text>
      </View>
        </ScrollView>
  );
}