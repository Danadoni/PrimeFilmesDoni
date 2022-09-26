import React,{useState,useEffect} from 'react';
import {ScrollView} from 'react-native';
import {
    Container,
    SearchContainer,
    Input,
    SearchButton,
    Title,
    Banner,
    BannerButton,
    SliderMovie
} from './styles'
import api,{key} from '../../services/api'
import Header from '../../Components/Header'
import SliderItem from '../../Components/SliderItem';
import {Feather} from '@expo/vector-icons';
import { getListMovies } from '../../utils/movies';
export default function Home(){

const [nowMovies,setNowMovies] = useState([]);
const [popular,setPopular] = useState([]);
const [topMovies,setTopMovies] = useState([]);


useEffect( () =>{

    let isActive = true;

    async function getMovies(){

        // const response = await api.get('/movie/now_playing',{
        //     params:{
        //         api_key:key,
        //         language:'pt-BR',
        //         page:1,
        //     }
        // })

        const [nowData,popularData,topData] = await Promise.all([

            api.get('/movie/now_playing',{
                    params:{
                        api_key:key,
                        language:'pt-BR',
                        page:1,
                    }
                 }),
                 api.get('/movie/popular',{
                    params:{
                        api_key:key,
                        language:'pt-BR',
                        page:1,
                    }
                 }),
                 api.get('/movie/top_rated',{
                    params:{
                        api_key:key,
                        language:'pt-BR',
                        page:1,
                    }
                 })

        ])
        

        const nowList = getListMovies(10,nowData.data.results);
        const popularList = getListMovies(6,popularData.data.results);
        const topList = getListMovies(10,topData.data.results);


        setNowMovies(nowList)
        setPopular(popularList)
        setTopMovies(topList)
    }

    getMovies();

},[])

return(


        <Container>
        
            <Header title = "Prime Video "/>
            <SearchContainer>

                <Input placeholder = "Ex Cyberpunk 2077" placeholderTextColor = "#ddd"/>
            <SearchButton>
                <Feather name = 'search' size={30} color ='#FFF' />
                </SearchButton>
            </SearchContainer>
            <ScrollView  showsVerticalScrollIndicator={false} >
                <Title >Em Cartaz</Title>

                <BannerButton >
                    <Banner 
                    resizeMethod="resize"
                    source = {{ uri: 'https://sm.ign.com/t/ign_pt/screenshot/default/capa_b14y.1080.jpg'}}
                    />
                </BannerButton>
            <SliderMovie
            
            horizontal = {true}
            showsHorizontalScrollIndicator ={false}
            data ={nowMovies}
            keyExtractor = {(item)=> String(item.id)}
            renderItem ={ ({item}) =>
            
            
            <SliderItem data = {item}/>
        
        }
       
            />


            <Title> Populares</Title>
        
            <SliderMovie
            horizontal = {true}
            showsHorizontalScrollIndicator ={false}
            keyExtractor = {(item)=> String(item.id)}
            data ={popular}
            renderItem ={ ({item}) =>
            
            
            <SliderItem data = {item}/> 
        
        }
            />


<Title> Mais bem Votados </Title>
        
        <SliderMovie
        horizontal = {true}
        showsHorizontalScrollIndicator ={false}
        keyExtractor = {(item)=> String(item.id)}
        data ={topMovies}
        renderItem ={ ({item}) =>
        
        
        <SliderItem data = {item}/> 
    
    }
        />



            </ScrollView>
        
            </Container>


);


}