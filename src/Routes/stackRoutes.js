import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Details from '../pages/Details'
import Search from '../pages/Search'
import { Title } from '../pages/Details/styles';


const Stack = createStackNavigator();

export default function StackRoutes(){

return(

    <Stack.Navigator >

    <Stack.Screen name='homeStack' component={Home} options={{headerShown:false}}></Stack.Screen>
    <Stack.Screen name='details' component ={Details}  options={{headerShown:false}}></Stack.Screen>
    <Stack.Screen name='search' component ={Search}  options=
    {{
        title: "Sua busca",
        headerTintColor: "#FFF",
        headerTitleStyle:{
            color:"#FFF"
        },
        headerStyle:{
            backgroundColor:'#141a29',
            borderBottomColor:'#141a29'
        }
        
    }}>

    </Stack.Screen>
    </Stack.Navigator>

);


}