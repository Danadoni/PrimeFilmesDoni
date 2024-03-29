import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`

flex:1;

background-Color: #141a29;

`

export const Header = styled.View`
z-index: 99;

position:absolute;
top: 30px;
width:100%;
display:flex;
flex-direction: row;
justify-content:space-between;
padding:0 14px;



`

export const HeaderButton = styled.TouchableOpacity`

width:46px;
height:46px;
background-color:rgba(25,26,48,0.8);
border-radius :23px;
justify-content: center;
align-items:center;

`

export const BannerItem = styled.Image`
width:100%;
height:350px;
border-bottom-left-radius: 70px;
border-bottom-right-radius: 70px;
border-top-left-radius: 30px;
border-top-right-radius: 30px;
`;

export const ButtonLink = styled.TouchableOpacity`
background-color : #e72f49;
width:63px;
height:63px;
border-radius :35px;
position:absolute;
top:300px;
right:15px;
justify-content : center;
align-items :center;
`;

export const Title = styled.Text`

font-size : 25px;
color:#fff;
font-weight : bold;
padding: 8px 14px;
margin-top:8px;

`
export const ContentArea = styled.View`
flex-direction : row;
align-items:center;
padding : 0 14px;
justify-content: space-between;


`
export const Rate = styled.Text`
font-size : 18px;
color:#fff;


`

export const ListGenres = styled.FlatList`
padding-left : 14px;
margin: 8px 0;
max-height :35px;
min-height:35px;

`

export const Description = styled.Text`

padding-left:14px;
padding-right:14px;
padding-bottom:30px;
color:#fff;
line-height: 20px;


`