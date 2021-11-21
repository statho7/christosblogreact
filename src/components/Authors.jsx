/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin-top: 30px;
    margin-left: 10vw;
    display: grid;
    padding: 30px 0px 26px;
    grid-gap: 35vw;
    grid-template-columns: repeat(2, minmax(0, 1fr));

    @media only screen and (max-width: 500px) {
        margin-left: 2vw;
        grid-gap: 8vw;
    }
`

const Wrap = styled.div`
    max-width: 360px;
    max-height: 220px;
    border-radius: 55px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    
    img { 
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, 
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(240, 240, 240, 0.9);
    }

    
`

const Authors = () => {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" />                
            </Wrap>
            {/* <Wrap>
                <img src="/images/viewers-marvel.png" />                
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" />                
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" />                
            </Wrap> */}
        </Container>
    )
}

export default Authors