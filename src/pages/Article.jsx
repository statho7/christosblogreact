import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import link from '../links.json'
import { Link } from "react-router-dom"
import Footer from '../components/Footer';
import { getSingleArticle } from '../redux/apiCalls';

const Container = styled.div`
    position: relative;
    min-height: calc(95vh - 70px);
    overflow-x: hidden;
    display: block;
    margin-top: 5vh;
    padding: 0 calc(8.5vw + 5px);
    background: radial-gradient(#7168d6, #182147);
`;

const ImageTitle = styled.div`
    align-items: center;
    display: flex;
    -webkit-box-pack: start;
    justify-content: center;
    margin: 0px auto;
    min-height: 170px;
    padding-bottom: 12px;
    width: 100%;
    img {
        max-width: 600px;
        min-width: 200px;
        width: 75vw;
    }
`;

const Content = styled.div`
    margin: 0px auto;
    line-height: 1.15;
    padding: 0 25px;

    p {
        justify-content: center;
    }
`;

const Article = () => {
    const { id } = useParams();    
    console.log(id)
    const dispatch = useDispatch();
    const [htmlString, setHtmlString] = useState("");

    const num = useSelector((state) => {   
        console.log("yolo")     
        const article = state.news.all.articles.filter(article => article.id === id);
        return article.length
    })

    useEffect(() => {
        if (num === 0) {
            console.log('swag')
            getSingleArticle(dispatch, id);
        }
        
    }, [num, dispatch, id]);

    const articleData = useSelector((state) => {
        const article = state.news.all.articles.filter(article => article.id === id)[0];
        setHtmlString(article.content);
        return article;
    });

        
    return (
        <Container>
          {!articleData && 
            <div className="not-found">
                <h2>Sorry</h2>
                <p>That page cannot be found</p>
                <Link to="/">Back to the homepage...</Link>
            </div>
            }
            {articleData && <>        
            <ImageTitle>
                <img alt={articleData.title} src={articleData.imgLink} />
            </ImageTitle>
            <Content>
                <p>Αρθρογράφος: {articleData.author}</p>
                <br />
                <div dangerouslySetInnerHTML={{__html: htmlString}} />
            </Content>
            </>
          }
          <Footer />
        </Container>
      )
}

export default Article
