// imports usados
import {
  View, 
  Text ,
  Image,
  StyleSheet,
  TouchableOpacity,
  
} 
  from 'react-native';

import Swiper from 'react-native-swiper';

import {NavigationContainer} from '@react-navigation/native'



import React from 'react';

import { 
  useFonts,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold

 }
 from '@expo-google-fonts/josefin-sans';


import { useNavigation } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';




//tela de inicio

export default function Inicio() {
  const navigation=useNavigation();


//função que carrega as fontes
  const [fontsloaded]=useFonts({
    JosefinSans_600SemiBold,
    JosefinSans_700Bold
  });
//condição que garante o carregamento das fontes
  if(!fontsloaded){
    return <AppLoading></AppLoading>

  }


  return (
    
    <View style={styles.container}>
        
        <View style={styles.cabecalho}>

          <View style={styles.cabecalhoitens}>
          <Image style={styles.logo}
          source={require('../../assets/Logo.png')}
          
          
          />

          <Text style={styles.textoCabecalho}>
            Olá,{'\n'} Maria!
          </Text>

          <View style={styles.cabecalhoD}>

            {/* botao que leva pra aba de noticações */}
            <TouchableOpacity
            onPress={()=>navigation.navigate('Notificacao')}
            style={{marginTop:10}}
            >
              <Image
              source={require('../../assets/Bell_pin.png')}
              />
            </TouchableOpacity>

            {/* botao que leva pra aba de perfil */}
            <TouchableOpacity
            onPress={()=>navigation.navigate('Conta')}
            style={{marginLeft:20,marginTop:10}}
            >
              <Image
              source={require('../../assets/User_alt.png')}
              />
            </TouchableOpacity>
          
          </View>

          </View>

        </View>
        {/* fim do cabeçalho */}
        
        {/* restante da tela */}
        <View style={styles.tela}>
        <Text style={styles.textoTela}>
            Destaques
        </Text>


        {/* carrosel de imagens */}
        <Swiper
        activeDotColor='#000'
        dotColor='#808080'
        paginationStyle={styles.paginationStyle}
        
        style={styles.Swiper}
        loop
        >
          <Image
          source={require('../../assets/foto1.png')}
          />
          <Image
          source={require('../../assets/foto1.png')}
          />
          <Image
          source={require('../../assets/foto1.png')}
          />
          <Image
          source={require('../../assets/foto1.png')}
          />
        </Swiper>

        <Text style={styles.textoTela}>
        Especiais para você
        </Text>

        {/* carrosel de imagens */}
        <Swiper
        style={styles.Swiper}
        activeDotColor='#000'
        dotColor='#808080'
        paginationStyle={styles.paginationStyle}
        loop
        >
          <Image
          
          source={require('../../assets/foto1.png')}
          />
          <Image
          source={require('../../assets/foto1.png')}
          />
          <Image
          source={require('../../assets/foto1.png')}
          />
          <Image
          source={require('../../assets/foto1.png')}
          />
        </Swiper>
        </View>
    </View>
    
  );
}


//estilos usados
const styles=StyleSheet.create({
  container:{
    backgroundColor:"#0c9547",
    flex:1

  },
  cabecalho:{
    marginLeft:30,
    marginRight:30,
    marginTop:54,
    marginBottom:40,
    
  },

  logo:{
    height:71,
    width:60,
    marginRight:10
  },
  cabecalhoitens:{
    flexDirection:'row'

  },
  cabecalhoD:{
    marginLeft:'40%',
    flexDirection:'row'
    
  },
  textoCabecalho:{
    fontFamily:'JosefinSans_700Bold',
    color:'#FFF'

  },
  tela:{
    backgroundColor:'#FFF',
    flex:1,
    borderTopRightRadius:40,
    borderTopLeftRadius:40,
    paddingTop:50

  },
  textoTela:{
    marginLeft:35,
    marginBottom:20,
    fontFamily:'JosefinSans_600SemiBold',
    fontSize:18
  },
  Swiper:{
    marginHorizontal:7,
    height:210,
    
    
    
  },
  paginationStyle: {
    position:'absolute',
    marginTop:5,
    backgroundColor:'#DCDCDC',
    marginHorizontal:170,
    borderRadius:10,
    
  },


})