import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
 import Home from "../pages/Home";
 import Movies from "../pages/Movies";
import HomeStack from '../Routes/stackRoutes'
import {MaterialCommunityIcons} from '@expo/vector-icons'

 const Drawer = createDrawerNavigator();


 export default function Routes(){

 return(
    <Drawer.Navigator
    screenOptions={{
        headerShown:false,
    drawerStyle:{
        backgroundColor:'#090A0E',
        paddingTop:20
    },
    drawerActiveBackgroundColor:'#E72F49',
    drawerActiveTintColor:'#FFF',
    drawerInactiveTintColor:'#FFF'

    }}
    >
        <Drawer.Screen name='Homes' component={HomeStack} 
        options={{
            drawerIcon: ({focused,size,color}) => (
             <MaterialCommunityIcons
             name={focused ? 'movie-open' : 'movie-outline'}
             size={size}
             color={color} 
                />

            )
        }}
        />
        <Drawer.Screen name='Movies' component={Movies} 
        
        
        options = {{
            title:"Meus Filmes",
            drawerIcon: ({focused,size,color}) => (
                <MaterialCommunityIcons 

                name={focused ? 'archive-check-outline' :'archive'}
                size={size}
                color={color}
                />

            )

        }}
        
        
        />
    </Drawer.Navigator>
 );

 }