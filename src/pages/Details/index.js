import React,{useState} from 'react';
import { Container,Title,BannerItem} from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Details(){
    const route = useRoute();

    const [movie,setMovie] = useState(route.params.filme);


//    console.log(movie)
    
return(

    <Container>

        <BannerItem 
        resizeMode="cover"
        source = {{uri : `https://image.tmdb.org/t/p/original/${movie.poster_path}`}}
        
        />

        <Title> {movie.title} </Title>
    

    </Container> 

);

}