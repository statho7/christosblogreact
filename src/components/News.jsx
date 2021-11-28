import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getFootballHome, getBasketballHome, getOtherHome, getLatest } from '../redux/apiCalls';
import { selectBasketball, selectFootball, selectLatest, selectOther } from '../redux/newsSlice';

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

const News = () => {
    const numLatestArticles = useSelector((state) => state.news.latest.numArticles);
    const numFootballArticles = useSelector((state) => state.news.football.numArticles);
    const numBasketballArticles = useSelector((state) => state.news.basketball.numArticles);
    const numOtherArticles = useSelector((state) => state.news.other.numArticles);
    const dispatch = useDispatch();

    useEffect(() => {
        if (numLatestArticles === 0) {
            getLatest(dispatch);
        }
        if (numFootballArticles === 0) {
            getFootballHome(dispatch);
        }
        if (numBasketballArticles === 0) {
            getBasketballHome(dispatch);
        }
        if (numOtherArticles === 0) {
            getOtherHome(dispatch);
        }
    }, [numLatestArticles, numFootballArticles, numBasketballArticles, numOtherArticles, dispatch]);
    
    const latestNews = useSelector(selectLatest);
    const footballnews = useSelector(selectFootball);
    const basketballnews = useSelector(selectBasketball);
    const othernews = useSelector(selectOther);

    return (
        <Container>
            <h4>Τελευταία Νέα</h4>
            <Content>
                {latestNews.articles &&
                latestNews.articles.slice(0,4).map((blog) =>(
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
            </Content>
            <h4>Ποδόσφαιρο</h4>
            <Content>
                {footballnews.articles &&
                footballnews.articles.slice(0,4).map((footballblog) =>(
                    <Wrap key={footballblog.id}>
                        <Link to={`/article/` + footballblog.id}>
                            <div className="contain">
                                <img src={footballblog.imgLink} alt={footballblog.title} />
                                <div className="overlay">
                                    <div className="text">{footballblog.title.slice(0,80)} ...</div>
                                </div>
                            </div>
                        </Link>
                    </Wrap>
                ))}
            </Content>
            <h4>Καλαθοσφαίριση</h4>
            <Content>
                {basketballnews.articles &&
                basketballnews.articles.slice(0,4).map((basketballblog) =>(
                    <Wrap key={basketballblog.id}>
                        <Link to={`/article/` + basketballblog.id}>
                            <div className="contain">
                                <img src={basketballblog.imgLink} alt={basketballblog.title} />
                                <div className="overlay">
                                    <div className="text">{basketballblog.title.slice(0,80)} ...</div>
                                </div>
                            </div>
                        </Link>
                    </Wrap>
                ))}
            </Content>
            <h4>Άλλα</h4>
            <Content>
                {othernews.articles &&
                othernews.articles.slice(0,4).map((otherblog) =>(
                    <Wrap key={otherblog.id}>
                        <Link to={`/article/` + otherblog.id}>
                            <div className="contain">
                                <img src={otherblog.imgLink} alt={otherblog.title} />
                                <div className="overlay">
                                    <div className="text">{otherblog.title.slice(0,80)} ...</div>
                                </div>
                            </div>
                        </Link>
                    </Wrap>
                ))}
            </Content>
        </Container>
    )
}

export default News
