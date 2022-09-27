import React,{useState} from 'react';
import { Container,Title} from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Details(){
    const route = useRoute();

    const [movie,setMovie] = useState(route.params.filme);


   console.log(movie)
    
return(

    <Container>

        <Title> {movie.title} </Title>
    

    </Container> 

);

}