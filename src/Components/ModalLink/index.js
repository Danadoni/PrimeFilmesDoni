import React from 'react';
import {View,Text} from 'react-native';
import { BackButton,Name } from './style';
import {Feather} from '@expo/vector-icons'

import { WebView } from 'react-native-webview';
 
export default function ModalLink ({ link,title,closeModal}){

    return(
        <>
            <BackButton onPress = {closeModal}> 
                 
                 <Feather name = 'x' size = {40} color = '#fff'/>
                 <Name>{title}</Name>

            </BackButton>

            <WebView
                source = {{ uri: link }}
            />
            

        </>

    );
}