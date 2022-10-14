import React,{useState,useEffect} from 'react';

import { Container,Title,BannerItem, HeaderButton,Header, ButtonLink,ContentArea,Rate,ListGenres,Description} from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import {Feather, Ionicons} from '@expo/vector-icons';
import api,{key} from '../../services/api'
import Stars from 'react-native-stars';
import Genres from '../../Components/Genres'
import ModalLink from '../../Components/ModalLink'
import { ScrollView,Modal } from 'react-native';

export default function Details(){
    const route = useRoute();
    const navigation = useNavigation();
    const [movie,setMovie] = useState(['']);
    const [openLink,SetOpenLink] = useState(false);
    const[type,SetType] = useState(route.params.filme.media_type)
    useEffect(()=> {

        async function getMovies(){
           
            const response = await api.get(`/${type}/${route.params.filme.id}`,{
                params:{
                    api_key:key,
                    language: 'pt-BR'
                }

            })
            .catch((err) => {
                console.log(err)
            })
      
           
            console.log(response.data)
            setMovie(response.data);
               
      
        }

        getMovies();   

    },[])

    

    
    
return(

    <Container>
        <BannerItem
        resizeMethod ="resize"
        source = {{ uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`}}
        />
      <Header style = {{alignItems:'center'}}>

        <HeaderButton onPress = {() => navigation.goBack()}>
        <Feather name ='arrow-left' size={28} color='#FFF'/>  
        </HeaderButton>
        <HeaderButton>    
        <Ionicons name ="bookmark" size={28} color ='#fff'/>    
        </HeaderButton>
     
      </Header>
      
        



        <ButtonLink onPress = {() => SetOpenLink(true)} >
        <Feather name='link' size={24} color ='#fff'/> 

        </ButtonLink>
        
        {type =='movie'?(
        <Title>{movie.title} </Title>
        ) : (
            <Title>{movie.name} </Title>
        )}





        <ContentArea>
            <Stars
            disable = {true}
            default = {movie.vote_average}
            count = {10}
            half = {true}
            starSize ={20}
            fullStar = {<Ionicons name='md-star' size={24} color='#E7A74e'/>}
            emptyStar = {<Ionicons name='md-star-outline' size={24} color='#E7A74e'/>}
            halfStar = {<Ionicons name='md-star-half' size={24} color='#E7A74e'/>}
           
    
            />
            <Rate>{ parseFloat(movie.vote_average).toFixed(1)}/10 </Rate>
        </ContentArea>
       
        <ListGenres
        data = {movie?.genres}
        horizontal = {true}
        showsHorizontalScrollIndicator = {false}
        keyExtractor = { (item) => String(item.id)}
        renderItem = { ({item} ) => <Genres data = {item} ></Genres>}
        />
        <Title> Sinopsess </Title>
        <ScrollView showsVerticalScrollIndicator={false}>
            
            <Description> {movie.overview}</Description>


        </ScrollView>

        <Modal animationType='slide'  visible={openLink}>

        <ModalLink
        link = {'google.com.br'}
        title = {movie?.title}
        closeModal = { () => SetOpenLink(false)}
        
        />

        </Modal>

    </Container> 

);

}