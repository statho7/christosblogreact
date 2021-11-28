import React from 'react'
import styled from 'styled-components'
import NewsSection from './NewsSection';

const Container = styled.div`
    margin-bottom: 45px;
    /* background: linear-gradient(to right, #182147 , white, #182147 ); */
    /* background: linear-gradient(to right, #182147 10%, white 50%, #182147 ); */
    /* background-image: radial-gradient(circle, #182147, white , #182147); */
    /* background: radial-gradient(#746bd8, #182147); */
    /* background: linear-gradient(#e66465, #9198e5); */
    
    @media (max-width: 500px) {
        h4 {
            display: flex;
            justify-content: center;
        }
    }
`

const News = () => {
    return (
        <Container>
            <h4>Τελευταία Νέα</h4>
            <NewsSection cat={'latest'}/>
            <h4>Ποδόσφαιρο</h4>
            <NewsSection cat={'football'}/>
            <h4>Καλαθοσφαίριση</h4>
            <NewsSection cat={'basketball'}/>
            <h4>Άλλα</h4>
            <NewsSection cat={'other'}/>
        </Container>
    )
}

export default News
