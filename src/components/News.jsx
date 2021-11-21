import React from 'react'
// import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import styled from 'styled-components'
// import { selectNews } from '../redux/newsRedux'
import { useEffect, useState } from "react";
import link from '../links.json'

const Container = styled.div`
    padding-bottom: 45px;
    /* background: linear-gradient(to right, #182147 , white, #182147 ); */
    /* background: linear-gradient(to right, #182147 10%, white 50%, #182147 ); */
    /* background-image: radial-gradient(circle, #182147, white , #182147); */
    /* background: radial-gradient(#746bd8, #182147); */
    /* background: linear-gradient(#e66465, #9198e5); */
    
    @media (max-width: 400px) {
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

    @media (max-width: 1000px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    
    @media (max-width: 800px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    
    @media (max-width: 450px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`

const Wrap = styled.div`
    min-height: 100px;
    min-width: 100px;
    max-height: 14vh;
    max-width: 20vh;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


    
    @media (max-width: 600px) {
        max-height: 16vh;
        max-width: 22vh;
    }
    
    @media (max-width: 400px) {
        max-height: 20vh;
        max-width: 30vh;
        margin-right: auto;
        margin-left: auto;
    }
        
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, 
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`

const News = () => {
    const [latestNews, setLatestNews] = useState([]);
    const [footballnews, setFootballnews] = useState([]);
    const [basketballnews, setBasketballnews] = useState([]);
    const [othernews, setOthernews] = useState([]);
    // useEffect(() => {
    //   (async function () {
    //     const { articles } = await( await fetch(`http://localhost:7071/api/Articles/GetAllArticles`)).json();
    //     setNews(articles);
    //   })();
    // });

    useEffect(() => {
        fetch(link.link + `/api/GetLatestNews`,{method: "GET"})
        .then(res => {
            // console.log(res);
            if(!res.ok){
                throw Error('Could not fetch the data for that resource');
            }
            return res.json();
        })
        .then(data =>{
            // console.log("lolo",data);
            setLatestNews(data);
        })
        .catch(err =>{
          console.log("yolo",err);
        })
         
        fetch(link.link + `/api/GetFootballNews`,{method: "GET"})
        .then(res => {
            // console.log(res);
            if(!res.ok){
                throw Error('Could not fetch the data for that resource');
            }
            return res.json();
        })
        .then(data =>{
            // console.log("lolo",data);
            setFootballnews(data);
        })
        .catch(err =>{
          console.log("yolo",err);
        })
         
        fetch(link.link + `/api/GetBasketballNews`,{method: "GET"})
        .then(res => {
            // console.log(res);
            if(!res.ok){
                throw Error('Could not fetch the data for that resource');
            }
            return res.json();
        })
        .then(data =>{
            // console.log("lolo",data);
            setBasketballnews(data);
        })
        .catch(err =>{
          console.log("yolo",err);
        })
         
        fetch(link.link + `/api/GetOtherNews`,{method: "GET"})
        .then(res => {
            // console.log(res);
            if(!res.ok){
                throw Error('Could not fetch the data for that resource');
            }
            return res.json();
        })
        .then(data =>{
            // console.log("lolo",data);
            setOthernews(data);
        })
        .catch(err =>{
          console.log("yolo",err);
        })
    }, []);

    // const news = data;
    // console.log(news);
    // const latestNews = news.sort(function(a,b){
    //     // Turn your strings into dates, and then subtract them
    //     // to get a value that is either negative, positive, or zero.
    //     return Number(b.id) - Number(a.id);
    //   }).slice(0,4);
    // const footballnews  = news.filter(blog => blog.category === "Ποδόσφαιρο").slice(0,4);
    // const basketballnews  = news.filter(blog => blog.category === "Καλαθοσφαίριση").slice(0,4);
    // const othernews  = news.filter(blog => blog.category === "Άλλα").slice(0,4);
    
    return (
        <Container>
            <h4>Τελευταία Νέα</h4>
            <Content>
                {latestNews &&
                latestNews.map((blog) =>(
                    <Wrap key={blog.id}>
                        <Link to={`/detail/` + blog.id}>
                            <img src={blog.imgLink} alt={blog.title} />
                        </Link>
                    </Wrap>
                ))}
            </Content>
            <h4>Ποδόσφαιρο</h4>
            <Content>
                {footballnews &&
                footballnews.map((footballblog) =>(
                    <Wrap key={footballblog.id}>
                        <Link to={`/detail/` + footballblog.id}>
                            <img src={footballblog.imgLink} alt={footballblog.title} />
                        </Link>
                    </Wrap>
                ))}
            </Content>
            <h4>Καλαθοσφαίριση</h4>
            <Content>
                {basketballnews &&
                basketballnews.map((basketballblog) =>(
                    <Wrap key={basketballblog.id}>
                        <Link to={`/detail/` + basketballblog.id}>
                            <img src={basketballblog.imgLink} alt={basketballblog.title} />
                        </Link>
                    </Wrap>
                ))}
            </Content>
            <h4>Άλλα</h4>
            <Content>
                {othernews &&
                othernews.map((otherblog) =>(
                    <Wrap key={otherblog.id}>
                        <Link to={`/detail/` + otherblog.id}>
                            <img src={otherblog.imgLink} alt={otherblog.title} />
                        </Link>
                    </Wrap>
                ))}
            </Content>
        </Container>
    )
}

export default News
