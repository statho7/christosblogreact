/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Container = styled.div`
    margin-top: 30px;
    margin-left: 5vw;
    display: grid;
    padding: 30px 0px 26px;
    grid-gap: 35vw;
    grid-template-columns: repeat(2, minmax(0, 1fr));

    @media only screen and (max-width: 1000px) {
        margin-left: 4vw;
        grid-gap: 30vw;
    }

    @media only screen and (max-width: 850px) {
        margin-left: 3vw;
        grid-gap: 15vw;
    }

    @media only screen and (max-width: 650px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        margin-left: 2vw;
        grid-gap: 8vw;
    }
`

const Wrap = styled.div`
    max-width: 360px;
    max-height: 220px;
    border-radius: 55px;
    cursor: pointer;
    /* border: 3px solid rgba(249, 249, 249, 0.1); */
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    
    img { 
        width: 100%;
        height: 100%;
        min-height: 100px;
        max-width: 360px;
        max-height: 220px;
        object-fit: cover;
        border-radius: 55px;
        /* border: 3px solid rgba(249, 249, 249, 0.1); */
        &:hover {
            /* box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, 
                rgb(0 0 0 / 72%) 0px 30px 22px -10px;
            transform: scale(1.05); */
            border-color: rgba(240, 240, 240, 0.9);
        }
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, 
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        /* border-color: rgba(240, 240, 240, 0.9); */
    }

    .contain {
        position: relative;
        min-height: 100px;
        max-width: 360px;
        max-height: 220px;
        /* padding: 25px; */
    }

    .overlay {
        width: 98%;
        height: 98%;
        min-height: 100px;
        max-width: 360px;
        max-height: 220px;
        border-radius: 55px;
        position: absolute;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(50,50,50,0.75);
        overflow: hidden;
        border: 4px solid rgb(249, 249, 249, 0.8);
        /* margin: 0px !important; */
        -webkit-transform: scale(0);
        -ms-transform: scale(0);
        transform: scale(0);
        -webkit-transition: 0.7s ease;
        transition: 0.7s ease;
    }

    .contain:hover .overlay {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
    }

    .text {
        color: white;
        font-size: 18px;
        font-weight: 500;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
    }

    /* img {
        border-radius: 55px;
        
        width: 95%;
        height: 100%;
        min-height: 100px;
        max-width: 360px;
        max-height: 220px;

        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
    } */
    
`

const Authors = () => {
    return (
        <Container>
            <Wrap>
                <Link to={`/author/Χρήστος/`}>
                    <div className="contain">
                        <img src="/images/christos.jpg" />
                            <div className="overlay">
                                <div className="text">Χρήστος</div>
                            </div>
                    </div>
                </Link>
            </Wrap>
            <Wrap>
                <Link to={`/author/Γιώργος/`}>
                    <div className="contain">
                        <img src="/images/giorgos.jpg" />  
                            <div className="overlay">
                                <div className="text">Γιώργος</div>
                            </div>
                    </div>
                </Link>              
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