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


 export default function Conta(){
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
            <Text style={{color:"#FFF",marginVertical:15, fontFamily:"JosefinSans_500Medium",alignSelf:'center', marginLeft:"31%"}}>
                Perfil
            </Text>
            
        </View>
         {/* frame de perfil */}
        <View style={styles.divFrame}>
            <Image
            source={require("./../../assets/perfil.png")}
            />
            <View style={{maxWidth:"70%"}}>
                <Text style={{fontFamily:"JosefinSans_700Bold", fontSize:12, marginBottom:17, marginTop:9}}>
                    Maria Natalia Silva Macedo Cruz
                </Text>
                <Text style={{fontFamily:"JosefinSans_400Regular", fontSize:12}}>
                    000.000.000-00
                </Text>
            </View>           
        </View>


        {/* lista de botoes */}

        {/* meus dados */}
        <View style={styles.botao}>
            <Image
            style={{marginRight:13, marginTop:8}}
            source={require("./../../assets/engrenagem.png")}
            />
            <View >
                <Text style={{fontFamily:"JosefinSans_700Bold",fontSize:12}}>
                    Meus Dados
                </Text>
                <Text style={{fontFamily:"JosefinSans_400Regular",fontSize:10}}>
                    Visualize ou edite seus dados
                </Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Image
                    style={{marginLeft:32, marginTop:8}}
                    source={require("./../../assets/setaDM.png")}
                    />
                </TouchableOpacity>
            </View>
        </View>

        {/* Minhas notificações */}
        <View style={styles.botao}>
            <Image
            style={{marginRight:13, marginTop:8}}
            source={require("./../../assets/minhasN.png")}
            />
            <View >
                <Text style={{fontFamily:"JosefinSans_700Bold",fontSize:12}}>
                    Minhas Notificações
                </Text>
                <Text style={{fontFamily:"JosefinSans_400Regular",fontSize:10}}>
                    Acompanhe suas notificações
                </Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Image
                    style={{marginLeft:35, marginTop:8}}
                    source={require("./../../assets/setaDM.png")}
                    />
                </TouchableOpacity>
            </View>
        </View>
        {/* Meus Contratos */}
        <View style={styles.botao}>
            <Image
            style={{marginRight:13, marginTop:8}}
            source={require("./../../assets/contratos.png")}
            />
            <View >
                <Text style={{fontFamily:"JosefinSans_700Bold",fontSize:12}}>
                    Meus Contratos
                </Text>
                <Text style={{fontFamily:"JosefinSans_400Regular",fontSize:9}}>
                    Contratos e pendências de assinatura
                </Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Image
                    style={{marginLeft:3, marginTop:8, position:'absolute'}}
                    source={require("./../../assets/setaDM.png")}
                    />
                </TouchableOpacity>
            </View>
        </View>
        {/* Política de Privacidade */}
        <View style={styles.botao}>
            <Image
            style={{marginRight:13, marginTop:8}}
            source={require("./../../assets/politica.png")}
            />
            <View >
                <Text style={{fontFamily:"JosefinSans_700Bold",fontSize:12}}>
                    Política de Privacidade
                </Text>
                <Text style={{fontFamily:"JosefinSans_400Regular",fontSize:10}}>
                    Veja nossa política de privacidade
                </Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Image
                    style={{marginLeft:3, marginTop:8, position:'absolute'}}
                    source={require("./../../assets/setaDM.png")}
                    />
                </TouchableOpacity>
            </View>
        </View>
        {/* Interrupções de Serviço */}
        <View style={styles.botao}>
            <Image
            style={{marginRight:13, marginTop:8}}
            source={require("./../../assets/servico.png")}
            />
            <View >
                <Text style={{fontFamily:"JosefinSans_700Bold",fontSize:12}}>
                    Interrupções de Serviço
                </Text>
                <Text style={{fontFamily:"JosefinSans_400Regular",fontSize:9}}>
                    Histórico de interrupções de serviço
                </Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Image
                    style={{marginLeft:24, marginTop:8, position:'absolute'}}
                    source={require("./../../assets/setaDM.png")}
                    />
                </TouchableOpacity>
            </View>
        </View>
        {/* Sobre */}
        <View style={styles.botao}>
            <Image
            style={{marginRight:13, marginTop:8}}
            source={require("./../../assets/sobre.png")}
            />
            <View >
                <Text style={{fontFamily:"JosefinSans_700Bold",fontSize:12}}>
                    Sobre
                </Text>
                <Text style={{fontFamily:"JosefinSans_400Regular",fontSize:10}}>
                    Sobre desenvolvimento
                </Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Image
                    style={{marginLeft:80, marginTop:8, position:'absolute'}}
                    source={require("./../../assets/setaDM.png")}
                    />
                </TouchableOpacity>
            </View>
        </View>

        {/* Sair */}
        <TouchableOpacity style={{marginTop:22,alignSelf:'center'}}>
            <Text style={{color:"#0c9547"}}>
                Sair
            </Text>
        </TouchableOpacity>



    </View>
  )

    
 }


 const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f5f6fa"

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
    divFrame:{
        width:"90%",
        height:120,
        backgroundColor:"#FFF",
        alignSelf:'center',
        flexDirection:'row',
        marginBottom:40
    }, 
    botao:{
        paddingLeft:32,
        paddingRight:32,
        width:"90%",
        backgroundColor:"#FFF",
        alignSelf:'center',
        flexDirection:'row',
        borderTopWidth:0,
        borderRightWidth:0,
        borderLeftWidth:0,
        borderWidth: 0.2,
        borderColor: 'gray',
        height:55


    }
 })
 