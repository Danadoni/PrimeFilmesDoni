import React from 'react'
import {View,Text} from 'react-native'
import {BannerItem,Container,Title,RateContainer,Rate} from './styles'
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function SliderItem ({data}){
const navigation = useNavigation();


    function goDetails(item){

        navigation.navigate('details',{filme:item});

    }

    // console.log(data)

    return(
       <Container activeOpacity = {0.7} onPress ={()=> goDetails(data)}>
        <BannerItem 
        
        source = {{uri : `https://image.tmdb.org/t/p/original/${data.poster_path}`}}
        
        />
        {/* numberOflines limita o tamanho do texto para uma linha */}
        <Title numberOfLines ={1}> {data.title ? data.title : data.name}  </Title>
        <RateContainer>
            <Ionicons name="md-star" size={12} color= '#e7a74e'/>
            <Rate> {data.vote_average.toFixed(1)} </Rate>
        </RateContainer>
       </Container>
    );
}