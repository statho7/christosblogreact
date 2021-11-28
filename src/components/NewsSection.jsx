import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getFootballHome, getBasketballHome, getOtherHome, getLatest } from '../redux/apiCalls';

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 1150px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    
    @media (max-width: 900px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    
    @media (max-width: 600px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`

const Wrap = styled.div`
    min-height: 100px;
    min-width: 100px;
    max-height: 15vh;
    max-width: 28vh;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


    .contain {
        position: relative;
        width: 100%;
        height: 100%;
        /* padding: 25px; */
    }

    .overlay {
        /* border-radius: 2px; */
        position: absolute;
        top:0;
        bottom: 0;
        left: 0;
        /* right: 5%; */
        background-color: rgba(50,50,50,0.75);
        overflow: hidden;
        /* border: 3px solid rgb(249, 249, 249, 0.8); */
        /* margin: 0px !important; */
        /* width: 100%;
        height: 100%; */
        width: 100%;
        height: 100%;
        object-fit: cover;
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
        font-size: 15px;
        font-weight: 400;
        position: absolute;
        top: 40%;
        left: 20%;
        -webkit-transform: translate(-10%, -50%);
        -ms-transform: translate(-10%, -50%);
        transform: translate(-10%, -50%);
        text-align: center;
    }

    
    /* @media (max-width: 600px) {
        max-height: 16vh;
        max-width: 22vh;
    } */
    
    @media (max-width: 600px) {
        /* max-height: 20vh;
        max-width: 30vh; */
        margin-right: auto;
        margin-left: auto;
    }
        
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        align-items: center;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, 
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`
const NewsSection = ({cat}) => {    
    const dispatch = useDispatch();

    const num = useSelector((state) => {
        switch (cat) {
            case 'latest':
                return state.news.latest.numArticles;
            case 'football':
                return state.news.football.numArticles;
            case 'basketball':
                return state.news.basketball.numArticles;        
            default:
                return state.news.other.numArticles;
        }
    })

    useEffect(() => {
        switch (cat) {
            case 'latest':
                if (num === 0) {
                    getLatest(dispatch);
                }
                break;
            case 'football':
                if (num === 0) {
                    getFootballHome(dispatch);
                }
                break;
            case 'basketball':
                if (num === 0) {
                    getBasketballHome(dispatch);
                }
                break;      
            default:
                if (num === 0) {
                    getOtherHome(dispatch);
                }
                break;
        }
    }, [cat, num, dispatch]);
    
    const news = useSelector((state) => {
        switch (cat) {
            case 'latest':
                return state.news.latest;
            case 'football':
                return state.news.football;
            case 'basketball':
                return state.news.basketball;        
            default:
                return state.news.other;
        }
    })

    return (
        <Content>
            {news.pending && <div>Loading ...</div>}
            {!news.pending &&
            news.articles.slice(0,4).map((blog) =>(
                <Wrap key={blog.id}>
                    <Link to={`/article/` + blog.id}>
                        <div className="contain">
                            <img src={blog.imgLink} alt={blog.title} />
                            <div className="overlay">
                                <div className="text">{blog.title.slice(0,80)} ...</div>
                            </div>
                        </div>
                    </Link>
                </Wrap>
            ))}
            {news.error && <div>{news.error}</div>}
        </Content>
    )
}

export default NewsSection
