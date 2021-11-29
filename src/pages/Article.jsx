import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from 'styled-components'
import link from '../links.json'
import { Link } from "react-router-dom"
import Footer from '../components/Footer';

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
    const [articleData, setArticleData] = useState([]);

    const url = link.link + `/api/G1etSingleArticle/` + id;
    useEffect(() => {
        if (articleData.length === 0 ){
            fetch(url,{method: "GET"})
            .then(res => {
                // console.log(res);
                if(!res.ok){
                    console.log(res.json());
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data =>{
                // console.log("lolo",data);
                setArticleData(data[0]);
            })
            .catch(err =>{
            console.log("yolo",err);
            })
        }})

    const htmlString = articleData.content;

        
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
