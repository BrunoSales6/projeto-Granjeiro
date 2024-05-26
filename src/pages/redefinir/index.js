import React from "react";

import {
    View,
    Text,
    TextInput,
    TouchableOpacity
    
 } from "react-native";


import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";


import AppLoading from "expo-app-loading";

import { 
    useFonts,
    JosefinSans_400Regular,
    JosefinSans_700Bold


 } from "@expo-google-fonts/josefin-sans";


//tela redefinir
export default function Redefinir(){
    //função para as rotas

    const navigation=useNavigation();
    //carregando as fontes.

    const [fontsloaded]=useFonts({
        JosefinSans_400Regular,
        JosefinSans_700Bold

    });
    //Condição que garante que as fontes vão ser carregadas.

    if(!fontsloaded){
        return <AppLoading></AppLoading>
    }




    return(
        <View style={styles.container}>
            <View >
                <Text style={styles.titulo}>
                    Redefinição de senha!

                </Text>

            </View>

            <View style={styles.form}>
                <Text style={styles.texto}>
                    Informe um email e enviaremos um link para recuperação da sua senha.
                </Text>

                {/* input email */}
                <TextInput
                placeholderTextColor={'#FFF'}
                style={styles.placeholder}
                placeholder='Senha'
                />
                {/* botão que envia o email */}
                <TouchableOpacity 
                onPress={()=> navigation.navigate('Inicio')}
                
                style={styles.button}
                >
                <Text style={styles.buttonText}>
                Enviar link de recuperação
                </Text>
                </TouchableOpacity>
                
                {/* botão que volta para a tela inicio */}
                <TouchableOpacity 
                onPress={()=> navigation.navigate('SingIn')}
                
                style={styles.button}
                >
                <Text style={styles.buttonText}>
                    Voltar
                </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}



{/* estilos usados */}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#0c9547"

    },
    form:{
        flex:1,
        alignItems:'center',
        marginBottom:40,

    },
    titulo:{
        color:"#FFF",
        marginLeft:30,
        marginVertical:134,
        marginBottom:307,
        fontSize:28,
        fontFamily:'JosefinSans_400Regular'

    },
    texto:{
        color:"#FFF",
        marginLeft:20,
        marginRight:30,
        fontFamily:'JosefinSans_700Bold',
        fontSize:13,
        marginBottom:60
    },
    placeholder:{
        borderBottomWidth:1,
        borderColor:"#FFF",
        width:"90%",
        height:40,
        fontFamily:'JosefinSans_400Regular',
        marginLeft:30,
        marginRight:30,
        marginBottom:25
        
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
    buttonText:{
        fontSize:13,
        fontFamily:'JosefinSans_400Regular',
        color:"#0c9547",
        
    },
})


