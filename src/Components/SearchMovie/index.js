import react from "react";
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import {ContainerMovies,Banner,Title, ContainerRating,Rodape} from './style'

export default function SearchMovie ({data}) {

    const navigation = useNavigation();

    function goToDetails(item){

        navigation.navigate('details',{filme:item})
    }

    return(
     <ContainerMovies activeOpacity ={0.7} onPress ={()=>goToDetails(data)}>
        {data?.poster_path? (
        <Banner source = {{uri : `https://image.tmdb.org/t/p/original/${data.poster_path}`}} resizeMethod="resize" />
        ):(
        <Banner source = {require('../../assets/download.png')}/>
         )}

        <Rodape>
        <Title> {data.title}</Title>
        <ContainerRating>
        <Ionicons  name="md-star" size={12} color= '#e7a74e'/>
        <Title > {data.vote_average}/10</Title>
        
        </ContainerRating>
        </Rodape>
     </ContainerMovies>
    )
}