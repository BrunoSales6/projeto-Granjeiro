//Nesse arquivo estão as rotas que vai levar o usuário a cada tela desejada.

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SingIn from "../pages/singIn";
import Inicio from "../pages/Inicio";
import Redefinir from "../pages/redefinir";
import Notificacao from "../pages/notificacoes";
import Conta from "../pages/conta";
import Tabe from "../routesTab/tab.routes";
const Stack=createNativeStackNavigator();


//rotas dos botoões
export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="SingIn"
                component={SingIn}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="Inicio2"
                component={Tabe}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="Redefinir"
                component={Redefinir}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="Notificacao"
                component={Notificacao}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="Conta"
                component={Conta}
                options={{headerShown:false}}
            />
        </Stack.Navigator>
    )
}



