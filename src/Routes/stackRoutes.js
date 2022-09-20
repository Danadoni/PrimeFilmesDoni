import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';



const Stack = createStackNavigator();

export default function StackRoutes(){

return(

    <Stack.Navigator >

    <Stack.Screen name='homeStack' component={Home} options={{headerShown:false}}></Stack.Screen>

    </Stack.Navigator>

);


}