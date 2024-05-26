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
   JosefinSans_500Medium,
   JosefinSans_700Bold,
   JosefinSans_600SemiBold,
   JosefinSans_400Regular
}from '@expo-google-fonts/josefin-sans'



export default function Planos(){
    //função para as rotas
    const navigation=useNavigation();

    //carregando as fontes.

    const [fontsloaded]=useFonts({
        JosefinSans_500Medium,
        JosefinSans_700Bold,
        JosefinSans_600SemiBold

    });
    //Condição que garante que as fontes vão ser carregadas.
    if(!fontsloaded){
        return <AppLoading></AppLoading>
    }


    return(
        <View style={styles.container}>
            <View style={styles.div1}>
                <Text style={{color:"#FFF",marginVertical:15}}>
                    Meus Planos
                </Text>

            </View>

            <View style={styles.div2}>
                <Text  style={styles.textotitulo} >
                    Meus endereços
                </Text>
                <View style={styles.divtextobtn1}>
                    <Text style={styles.textobtn} >
                    Rua Antônio Xenofonte, 158{"\n"}
                    Vila Alta, Crato / CE
                    </Text>
                    <TouchableOpacity style={styles.botaoseta}>
                        <Image
                        source={require('./../../assets/seta.png')}
                        />
                    </TouchableOpacity>
                </View>

                

                
            </View>


            <View style={styles.div2}>
                <Text style={styles.textotitulo} >
                    Sócio Nível 1
                </Text>
                <View style={styles.divtextobtn2}>
                    <Text style={styles.textobtn} >
                    <Image 
                    source={require('./../../assets/pessoas.png')}
                    /> {" "}
                    Direito a um acompanhante
                    </Text>
                    <View style={styles.divBotaoConfiguraçao}>
                    <TouchableOpacity style={styles.botaoseta}>
                        
                        <Image 
                    source={require('./../../assets/setaD.png')}
                    /> 
                    <Text style={styles.textoBtnConfiguracoes} >
                            Configurações
                        </Text>
                        
                    </TouchableOpacity>
                    </View>
                    
                </View>
            </View>



            {/* div telefone */}
            <View style={styles.div2}>
                <Text style={styles.textotitulo} >
                    Telefone
                </Text>
                <View>
                <View style={styles.divtextobtn3}>
                    <View style={styles.divTelefone} >
                        <View>
                        <Image style={{marginVertical:17, marginRight:5}}
                        source={require('./../../assets/telefone.png')}
                        />
                        </View>
                        
                        <View>
                            <Text style={styles.textoTelefone1}>
                                Fixo
                            </Text>
                            <Text style={styles.textoTelefone2}>
                            Fale mais FIy S A {"\n"}
                            Meu número: (XX)(1010-1212)
                            </Text>
                            
                        </View>
                        </View>
                    </View>
            
                    <View style={styles.divBotaoDetalhes}>
                    <TouchableOpacity style={styles.botaoseta}>
                        
                        <Image 
                    source={require('./../../assets/setaD.png')}
                    /> 
                    <Text style={styles.textoBtnConfiguracoes} >
                         Detalhes do plano
                    </Text>
                    </TouchableOpacity>
                    </View>
                    
                </View>
            </View>

            {/* div meus servicos */}
            
            <View style={styles.div2}>
                <Text  style={styles.textotitulo} >
                    Meus serviços
                </Text>
                <View style={styles.divtextobtn4}>
                    <View>
                        <Text style={styles.textobtnServicos} >
                        Sócio contribuente
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.botaoseta}>
                            <Image style={{marginLeft:"38%", marginTop:"5   %"}}
                            source={require('./../../assets/seta.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    
                    
                </View>
                <View style={styles.divtextobtn4}>
                    <View>
                        <Text style={styles.textobtnServicos} >
                        Sócio Proprietário
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.botaoseta}>
                            <Image style={{marginLeft:"38%", marginTop:"5   %"}}
                            source={require('./../../assets/seta.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    
                    
                </View>
                <View style={styles.divtextobtn4}>
                    <View>
                        <Text style={styles.textobtnServicos} >
                        Sócio Remido
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.botaoseta}>
                            <Image style={{marginLeft:"38%", marginTop:"5   %"}}
                            source={require('./../../assets/seta.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    
                    
                </View>
                <View style={styles.divtextobtn4}>
                    <View>
                        <Text style={styles.textobtnServicos} >
                        Aluguel final de semana
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.botaoseta}>
                            <Image style={{marginLeft:"38%", marginTop:"5   %"}}
                            source={require('./../../assets/seta.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    
                    
                </View>

                

                
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
        marginBottom:20,
        
        


    },
    div2:{
        marginVertical:10,
        width:"80%",
        height:125,
        alignSelf:'center',
        // backgroundColor:'#000'
        

    },
    divtextobtn1:{
        marginVertical:15,
        borderWidth: 0.2,
        borderColor: 'gray',
        height:90,
        
        

    },
    divtextobtn2:{
        marginVertical:15,
        borderWidth: 0.2,
        borderColor: 'gray',
        height:70,
        
        

    },
    divtextobtn3:{
        borderTopWidth:0,
        borderRightWidth:0,
        borderLeftWidth:0,
        marginVertical:15,
        borderWidth: 0.2,
        borderColor: 'gray',
        height:70,
    },
    textobtn:{
        fontSize:12,
        marginVertical:5,
        marginLeft:10,
        fontFamily:"JosefinSans_500Medium"
        

    },
    textotitulo:{
        fontSize:15,
        fontFamily:"JosefinSans_600SemiBold,"

    },
    botaoseta:{
        flexDirection:'row-reverse'
    },
    divBotaoConfiguraçao:{
        borderWidth: 0.2,
        borderColor: 'gray',
        height:35,

    },
    textoBtnConfiguracoes:{
        fontSize:11,
        marginLeft:10,
        fontFamily:"JosefinSans_700Bold",
        color:"#0c9547"

    },
    divTelefone:{
        flexDirection:'row',
        

    },
    textoTelefone1:{
        marginHorizontal:10,
        fontFamily:"JosefinSans_700Bold",
        color:"gray",
        fontSize:12

    },
    textoTelefone2:{
        marginHorizontal:10,
        fontFamily:"JosefinSans_400Regular",
        fontSize:12,

    },
    divBotaoDetalhes:{
        flexDirection:'row-reverse',
        
    },
    divtextobtn4:{
        height:50,
        borderWidth:0.2,
        flexDirection:'row',
        

    },
    textobtnServicos:{
        fontSize:15,
        fontFamily:"JosefinSans_600SemiBold",
    }
    

});