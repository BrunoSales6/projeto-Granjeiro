//imports necesários



import {
     View,
     Text ,
     StyleSheet,
     Image,
     TouchableOpacity,
     TextInput
    } from 'react-native';

import React from 'react';
import { useNavigation } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';

import{ 
    useFonts,
    JosefinSans_400Regular,
    JosefinSans_700Bold,
    JosefinSans_600SemiBold
}from '@expo-google-fonts/josefin-sans'


//tela de SingIn

export default function SingIn() {
    //função para as rotas
    const navigation=useNavigation();

    //carregando as fontes.

    const [fontsloaded]=useFonts({
        JosefinSans_400Regular,
        JosefinSans_700Bold,
        JosefinSans_600SemiBold

    });
    //Condição que garante que as fontes vão ser carregadas.
    if(!fontsloaded){
        return <AppLoading></AppLoading>
    }

  return (
    <View style={styles.container}>
        <View style={styles.containerLogo}>
            <Image
            source={require('../../assets/Logo2.png')}
            style={{width:243, height:117}}
            resizeMode='contain'
            
            
            />
                
        </View>

        <View style={styles.containerForm}>
            <Text style={styles.texto}>
                Olá! Digite seu usuário e senha
            </Text>

            <TextInput
            placeholderTextColor={'#FFF'}
            style={styles.placeholder}
            placeholder='Usuário'
            />

            <TextInput
            placeholderTextColor={'#FFF'}
            style={styles.placeholder}
            placeholder='Senha'
            />

            {/* /botao que leva pra tela de inicio/ */}
            <TouchableOpacity 
            onPress={()=> navigation.navigate('Inicio2')}
            
            style={styles.button}
            >
            <Text style={styles.buttonText}>
                Continuar
            </Text>
            </TouchableOpacity>

            {/* /botao que leva pra tela de refinição/ */}
            <TouchableOpacity style={styles.button}
            onPress={()=>navigation.navigate('Redefinir')}
            >
            <Text style={styles.buttonText}>
                Não sabe seu login?
            </Text>
            </TouchableOpacity>
        </View>

        
    </View>
    
  );
}

//estilos aplicados nos elementos

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#0c9547"
    },
    containerLogo:{
        flex:1,
        marginLeft:30,
        marginVertical:134

    },
    containerForm:{
        flex:1,
        marginBottom:40,
        alignItems:'center'
        

    },
    texto:{
        fontSize:16,
        fontFamily:'JosefinSans_700Bold',
        color:'#FFF',
        marginBottom:10
    },
    buttonText:{
        fontSize:13,
        fontFamily:'JosefinSans_400Regular',
        color:"#0c9547",
        
    },
    button:{
        backgroundColor:'#FFF',
        width:'90%',
        height:'15%',
        marginBottom:10,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
        
    },
    placeholder:{
        borderBottomWidth:1,
        borderColor:"#FFF",
        width:"90%",
        height:40,
        marginBottom:25,
        fontFamily:'JosefinSans_400Regular',
        
    }
    
})