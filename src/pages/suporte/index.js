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
   JosefinSans_600SemiBold,
   JosefinSans_400Regular,
   JosefinSans_500Medium
}from '@expo-google-fonts/josefin-sans'


 export default function Suporte(){
    const navigation=useNavigation();


//função que carrega as fontes
  const [fontsloaded]=useFonts({
    JosefinSans_600SemiBold,
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
                <Text style={{color:"#FFF",marginVertical:15, fontFamily:"JosefinSans_500Medium"}}>
                    Suporte
                </Text>
            </View>
            

            {/* balão de informação */}
            <View style={styles.div2}>
                <View style={{flexDirection:'row' }}>
                    <Image
                    source={require("./../../assets/i.png")}
                    />
                    <Text style={{fontFamily:"JosefinSans_600SemiBold", fontSize:12, marginLeft:5}}>
                    Você sabia?
                    </Text>
                </View>
                <View>
                    <Text style={{fontFamily:"JosefinSans_400Regular", fontSize:8}}>
                    Você pode falar ou solicitar que alguém da nossa equipe fale com você sempre que precisar!
                    </Text>
                </View>
            </View>


            {/* linha de botao */}

            <View style={styles.divbtn1}>
                    <TouchableOpacity style={styles.btn}>
                        <Image style={{marginLeft:13, marginTop:16}}
                        source={require("./../../assets/btnRedes.png")}
                        />
                        <Text style={styles.txtBtn}>
                        Redes sociais
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Image style={{marginLeft:13, marginTop:16}}
                        source={require("./../../assets/btn0800.png")}
                        />
                        <Text style={styles.txtBtn}>
                            Falar pelo{"\n"}
                            0800
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
        alignItems:'center',
        alignSelf:'center',
        alignContent:'center',
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        marginBottom:30,
    },
    div2:{
        width:"80%",
        height:105,
        backgroundColor:"#f0eff4",
        alignSelf:'center',
        paddingTop:20,
        paddingLeft:20,
        paddingRight:30

    },
    divbtn1:{
        marginLeft:34,
        marginTop:37,
        flexDirection:'row',
        
    },
    divbtn2:{
        marginLeft:34,
        marginTop:37,
        flexDirection:'row',
    },
    btn:{
        marginRight:20,
        borderWidth:0.2,
        height:100,
        width:165

    },
    txtBtn:{
        fontFamily:"JosefinSans_600SemiBold",
        fontSize:11,
        marginLeft:13,
        marginTop:8
    }
})


 