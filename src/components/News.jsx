import React from 'react'
// import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import styled from 'styled-components'
// import { selectNews } from '../redux/newsRedux'
import { useEffect, useState } from "react";

const Container = styled.div`
    padding-bottom: 45px;
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
`

const Wrap = styled.div`
    min-height: 100px;
    min-width: 100px;
    max-height: 12vh;
    max-width: 17vh;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
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
        border-color: rgba(249, 249, 249, 0.8);
    }
`

const News = () => {
    const [news, setNews] = useState([]);
  
    // useEffect(() => {
    //   (async function () {
    //     const { articles } = await( await fetch(`/api/Articles/GetAllArticles`)).json();
    //     setNews(articles);
    //   })();
    // });

    const url = `http://localhost:7071/api/GetAllArticles`;
    useEffect(() => {
        fetch(url,{method: "GET"})
        .then(res => {
            console.log(res);
            if(!res.ok){
                throw Error('Could not fetch the data for that resource');
            }
            return res.json();
        })
        .then(data =>{
            console.log("lolo",data);
            setNews(data.slice(0,20));
                // dispatch(
                //     setMovies({
                //       movies: data
                //     })
                //   );
        //   setIsPending(false);
        //   setError(null);
        })
        .catch(err =>{
          console.log("yolo",err);
            // setError(err.message);
            // setIsPending(false);
        })
    }, [url]);

    // const news = data;
    // console.log(news);
    // const [footballnews, setFootballnews] = useState([]);
    // const [basketballnews, setBasketballnews] = useState([]);
    // const [othernews, setOthernews] = useState([]);
    const latestNews = news.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Number(b.id) - new Number(a.id);
      }).slice(0,4);
    const footballnews  = news.filter(blog => blog.category === "Ποδόσφαιρο").slice(0,4);
    const basketballnews  = news.filter(blog => blog.category === "Καλαθοσφαίριση").slice(0,4);
    const othernews  = news.filter(blog => blog.category === "Άλλα").slice(0,4);
    
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
