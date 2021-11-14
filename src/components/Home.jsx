import React from 'react'
import styled from 'styled-components'
import Authors from './Authors'
import Carousel from './Carousel'
import News from './News'

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 150px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 15px);

  &:after {
    /* background-color: #182147; */
  background: radial-gradient(#a9a4e0, #182147);
    /* background: url("/images/home-background.png") center center / cover
      no-repeat fixed; */
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

const Home = () => {
    return (
        <Container>
            <Carousel />
            <Authors />
            <News />
        </Container>
    )
}

export default Home