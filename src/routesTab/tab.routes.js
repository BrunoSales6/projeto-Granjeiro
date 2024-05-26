//este tipo de rota está eninhada no tipo stack

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Financeiro from "../pages/financeiro";
import Suporte from "../pages/suporte";
import Inicio from "../pages/Inicio";
import Planos from "../pages/planos";
const Tab=createBottomTabNavigator();
import { Image, View } from "react-native";


//tela das rotas do tab navigation

export default function Tabe(){
    
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor:'#000',   
        }}
        >
            <Tab.Screen
            options={{
                tabBarIcon: ({focused}) => {
                    if(focused){
                        return<View style={{borderTopColor:'#0c9547', borderTopWidth:3 }}>
                        <Image source={require('../assets/Frame-3.png')} style={{tintColor:'#0c9547', height:30}} />
                    </View>                    }
                    return <Image source={require('../assets/Frame-3.png')} />
                },
                headerShown:false,
              }}
            name="Inicio"
            component={Inicio}
            />
            <Tab.Screen
            options={{
                tabBarIcon: ({focused}) => {
                    if(focused){
                        
                        return<View style={{borderTopColor:'#0c9547', borderTopWidth:3}}>
                            <Image source={require('../assets/Frame-2.png')} style={{tintColor:'#0c9547'}} />
                        </View>
                        
                    }
                    return <Image source={require('../assets/Frame-2.png')} />
                },
                headerShown:false,
              }}
            name="Planos"
            component={Planos}
            />
            <Tab.Screen
            options={{
                tabBarIcon: ({focused}) => {
                    if(focused){
                        return<View style={{borderTopColor:'#0c9547', borderTopWidth:3}}>
                        <Image source={require('../assets/Frame.png')} style={{tintColor:'#0c9547', height:30}} />
                    </View>                    }
                    return <Image source={require('../assets/Frame.png')} />
                },
                headerShown:false,
              }}
            name="Financeiro"
            component={Financeiro}
            />
            <Tab.Screen
            options={{
                tabBarIcon: ({focused}) => {
                    if(focused){
                        return<View style={{borderTopColor:'#0c9547', borderTopWidth:3}}>
                        <Image source={require('../assets/Frame-1.png')} style={{tintColor:'#0c9547', height:30}} />
                    </View>                    }
                    return <Image source={require('../assets/Frame-1.png')} />
                },
                headerShown:false,
              }}
            name="Suporte"
            component={Suporte}
            />
        </Tab.Navigator>
    )
}