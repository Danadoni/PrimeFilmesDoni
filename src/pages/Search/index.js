import React,{useState,useEffect} from 'react'
import { Container, ListMovies, Name } from './styles';
import { useRoute,useNavigation } from '@react-navigation/native';
import api,{key} from '../../services/api'
import {Button} from 'react-native'
import SearchMovie from '../../Components/SearchMovie';

export default function Search(){
    const navigation = useNavigation();
    const[movie,setMovie] = useState([]);
    const[loading,setLoading] = useState(true);
    const route = useRoute();

    useEffect(()=>{

        let isActive = true;

        async function getSearchMovie(){

            const response = await api.get(`/search/multi/`,{
                params:{
                    query:route.params.name,
                    api_key:key,
                    language: 'pt-BR',
                    page:1,
                    
                }

            })
            .catch((err) => {
                console.log(err)
            })

            if(isActive){
            setMovie(response.data.results)
             console.log(response.data.results)
            setLoading(false);
            }
        }

        if(isActive){
            
            getSearchMovie();
            
        }

        return() => {
            isActive = false;
        }


    },[])

   

    if(loading){
        return  <Container></Container>;
    }


    

    return(
        <Container>
            
            <ListMovies 
            data= {movie}
            showsVerticalScrollIndicator ={false}
            keyExtractor = { (item) => String(item.id)}
            renderItem ={({item})=> <SearchMovie data = {item} />}
            
            />
            

        </Container>

    );
}