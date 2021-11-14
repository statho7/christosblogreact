import React from 'react'
import styled from 'styled-components'
import Carousel from './Carousel'
import Navbar from './Navbar'
import News from './News'

const Container = styled.div`
`

const Home = () => {
    return (
        <Container>
            <Navbar />
            <Carousel />
            <News />
            home page bitch
        </Container>
    )
}

export default Home
