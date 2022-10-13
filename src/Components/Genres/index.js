import React from 'react'

import { Name,Container } from './styles';

function Genres ({data}) {
return(

    <Container>
        <Name>{data.name}</Name>


        </Container>
)
}

export default Genres;