import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import {  useState } from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom"
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';

import { getFootball, getBasketball, getOther } from '../redux/apiCalls';
// import { selectBasketball, selectFootball, selectOther } from '../redux/newsSlice';
import Footer from '../components/Footer';

const Container = styled.div`
    margin-bottom: 45px;
    padding: 0px 12.5%;

    h3 {
            display: flex;
            justify-content: center;
    }

    .dropdown {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        width: 9vw;
        min-width: 160px;
        color: black;
        background-color: aliceblue;
        border-radius: 20%;
        margin-bottom: 20px;
        div {
            width: 100%;
            /* flex-wrap: nowrap; */
            .css-1hb7zxy-IndicatorsContainer {
                max-width: 30px;
            }
        }
    }
    /* background: linear-gradient(to right, #182147 , white, #182147 ); */
    /* background: linear-gradient(to right, #182147 10%, white 50%, #182147 ); */
    /* background-image: radial-gradient(circle, #182147, white , #182147); */
    /* background: radial-gradient(#746bd8, #182147); */
    /* background: linear-gradient(#e66465, #9198e5); */
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
    min-height: 200px;
    min-width: 100px;
    max-height: 20vh;
    max-width: 36vh;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


    .contain {
        position: relative;
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
        min-height: 200px;
        min-width: 100px;
        max-height: 20vh;
        max-width: 36vh;
        display: flex;
        margin: 0 auto;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, 
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`

    const subcategoriesFootball = [
        {label: 'Όλα', value: '0'},
        {label: 'SuperLeague 1', value: '1'},
        {label: 'Κύπελλο Ελλάδας', value: '2'},
        {label: 'Champions League', value: '3'},
        {label: 'Europa League', value: '4'},
        {label: 'Serie A', value: '5'},
        {label: 'La Liga', value: '6'},
        {label: 'Ligue 1', value: '7'},
        {label: 'Premier League', value: '8'},
        {label: 'Bundesliga', value: '9'},
        {label: 'Mundial', value: '10'},
        {label: 'Euro', value: '11'}
    ];

    const subcategoriesBasketball = [
        {label: 'Όλα', value: '0'},
        {label: 'Basket League', value: '1'},
        {label: 'Euroleague', value: '2'},
        {label: 'Basketball Champions League', value: '3'},
        {label: 'Mundobasket', value: '4'},
        {label: 'Eurobasket', value: '5'}
    ];

    const subcategoriesOther = [
        {label: 'Όλα', value: '0'},
        {label: 'Βόλεϊ', value: '1'},
        {label: 'Τένις', value: '2'},
        {label: 'Άλλα', value: '3'}
    ];

const Category = () => {
    const { name } = useParams();
    const [subcategories, setSubcategories] = useState({})

    const dispatch = useDispatch();

    const num = useSelector((state) => {
        switch (name) {
            case 'Ποδόσφαιρο':
                return state.news.football.numArticles;
            case 'Καλαθοσφαίριση':
                return state.news.basketball.numArticles;        
            default:
                return state.news.other.numArticles;
        }
    })

    useEffect(() => {
        switch (name) {
            case 'Ποδόσφαιρο':
                setSubcategories(subcategoriesFootball);
                if (num === 0 || num === 4) {
                    getFootball(dispatch);
                }
                break;
            case 'Καλαθοσφαίριση':
                setSubcategories(subcategoriesBasketball);
                if (num === 0 || num === 4) {
                    getBasketball(dispatch);
                }
                break;      
            default:
                setSubcategories(subcategoriesOther);
                if (num === 0 || num === 4) {
                    getOther(dispatch);
                }
                break;
        }
    }, [name, num, dispatch]);
    
    const articles = useSelector((state) => {
        switch (name) {
            case 'Ποδόσφαιρο':
                return state.news.football;
            case 'Καλαθοσφαίριση':
                return state.news.basketball;        
            default:
                return state.news.other;
        }
    })
    
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [filter, setFilter] = useState(false);

        
    const handleSubcategory = (event, value) => {
            console.log(event, value, articles.articles[0].category);
            if (event.label === "Όλα"){
                setFilter(false);
                setFilteredArticles(articles.articles);
            } else {
                setFilter(true);
                setFilteredArticles(articles.articles.filter(article=>article.subcategory === event.label));
            }
    };

    return (
        <Container>
            <h3>{name}</h3>
            <div className="dropdown">
                <Select options={ subcategories } defaultValue={{ label: "Όλα", value: 0 }} onChange={(event, value) => handleSubcategory(event, value)} />
            </div>
            <Content>
                {!filter &&
                articles.articles.map((blog) =>(
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
                {filter &&
                filteredArticles.map((blog) =>(
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
            <Footer />
        </Container>
    )
}

export default Category
