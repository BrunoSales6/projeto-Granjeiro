//imports necesários
import {
    View,
    Text ,
    StyleSheet,
    Image,
    TouchableOpacity
    
   } from 'react-native';

import React from 'react';
import { useNavigation } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';

import{ 
   useFonts,
   JosefinSans_700Bold,
   JosefinSans_400Regular,
   JosefinSans_500Medium
}from '@expo-google-fonts/josefin-sans'


 export default function Alterar(){
    const navigation=useNavigation();


//função que carrega as fontes
  const [fontsloaded]=useFonts({
    JosefinSans_700Bold,
    JosefinSans_400Regular,
    JosefinSans_500Medium
  });
//condição que garante o carregamento das fontes
    if(!fontsloaded){
    return <AppLoading></AppLoading>

  }

  return(
    <View style={styles.container}>
        {/* texto princiapal */}
        <View style={styles.div1}>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Inicio')}
            style={{justifyContent:'center', marginLeft:"5%"}}
            >
                <Image style={{tintColor:"#FFF"}}
                source={require("./../../assets/setaE.png")}
                />
            </TouchableOpacity>
            <Text style={{color:"#FFF",marginVertical:15, fontFamily:"JosefinSans_500Medium",alignSelf:'center', marginLeft:"18%"}}>
                Alterar Vencimento
            </Text>
        </View>
        
        {/* balão da data selecionada */}
        <View style={styles.div2}>
            <View style={{marginRight:13, marginTop:15}}>
                <Image
                source={require('./../../assets/btnVnecimento.png')}
                />
            </View>
            <View>
                <Text style={{fontFamily:"JosefinSans_400Regular"}}>
                    Rua Antônio Xenofonte, 158
                </Text>
                <Text style={{fontFamily:"JosefinSans_700Bold"}}>
                Dia 30
                </Text>
            </View>
        </View>

        {/* texto pra troca de data */}
        <Text style={{fontFamily:"JosefinSans_700Bold", width:"90%", fontSize:13, alignSelf:'center'}}>
            Escolha a nova data de vencimento:
        </Text>
        
        {/* primeira linha de botões */}
        <View style={styles.botoes}>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textobtn}>
                    Dia 05
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} >
                <Text style={styles.textobtn}>
                    Dia 10
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} >
                <Text style={styles.textobtn}>
                    Dia 15
                </Text>
            </TouchableOpacity>
            
        </View>

        {/* segunda linha de botões */}
        <View style={styles.botoes}>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textobtn}>
                    Dia 20
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} >
                <Text style={styles.textobtn}>
                    Dia 25
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
 }

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FFF"

    },
    div1:{
        fontFamily:"JosefinSans_500Medium",
        width:"100%",
        height:"10%",
        backgroundColor:"#0c9547",
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        marginBottom:30,
        flexDirection:'row',
        
        
    },
    div2:{
        backgroundColor:"#f0eff4",
        width:"90%",
        alignSelf:'center',
        flexDirection:'row',
        paddingLeft:30,
        paddingBottom:20,
        paddingTop:5,
        marginBottom:20
    },
    botoes:{
        width:"90%",
        alignSelf:'center',
        alignContent:'center',
        flexDirection:'row',
        marginBottom:15
        

    },
    botao:{
        width:75,
        height:50,
        backgroundColor:"#f0eff4",
        marginRight:70,
        marginTop:10
        
    },
    textobtn:{
        alignSelf:'center', 
        marginTop:9,
        fontFamily:"JosefinSans_500Medium"

    }

})