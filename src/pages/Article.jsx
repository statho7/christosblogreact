import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { Link } from "react-router-dom"
import Footer from '../components/Footer';
import { getSingleArticle } from '../redux/apiCalls';
import {
    EmailShareButton,
    FacebookShareButton,
    PinterestShareButton,
    TelegramShareButton,
    TwitterShareButton,
    ViberShareButton,
    WhatsappShareButton,
    EmailIcon,
    FacebookIcon,
    PinterestIcon,
    TelegramIcon,
    TwitterIcon,
    ViberIcon,
    WhatsappIcon
  } from "react-share";

const Container = styled.div`
    position: relative;
    min-height: calc(95vh - 70px);
    overflow-x: hidden;
    display: block;
    margin-top: 5vh;
    padding: 0 calc(8.5vw + 5px);
    /* background: radial-gradient(#161336, #273268); */
    /* background: radial-gradient(#182147, #1b2550); */
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

    .social button{
        margin: 5px;
    }
`;

const Article = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const num = useSelector((state) => {
        return state.news.all.articles.filter(article => article.id === id).length
    })

    useEffect(() => {
        if (num === 0) {
            getSingleArticle(dispatch, id);
        }
        
    }, [num, dispatch, id]);

    const articleData = useSelector((state) => state.news.all.articles.filter(article => article.id === id)[0]);
    const pending = useSelector((state) => state.news.all.pending);
    const error = useSelector((state) => state.news.all.error);

        
    return (
        <Container>
            {pending && 
                <div className="not-found">
                    <h2>Loading Article</h2>
                    <p>Please wait !</p>
                    <Link to="/">Back to the homepage...</Link>
                </div>
            }
            {error && 
                <div className="not-found">
                    <h2>Sorry</h2>
                    <p>That page cannot be found</p>
                    <Link to="/">Back to the homepage...</Link>
                </div>
            }
            {articleData && 
                <>        
                    <ImageTitle>
                        <img alt={articleData.title} src={articleData.imgLink} />
                    </ImageTitle>
                    <Content>
                        <p>Αρθρογράφος: {articleData.author}</p>
                        <p>Ημερομηνία: {articleData.date.slice(-2)}/{articleData.date.slice(5,7)}/{articleData.date.slice(0,4)}</p>
                        <p>Κατηγορία: <u><Link style={{color: 'lightblue'}} to={"/category/" + articleData.category}>#{articleData.category}</Link></u></p>
                        <p>Υποκατηγορία: {articleData.subcategory}</p>
                        <br />
                        <div dangerouslySetInnerHTML={{__html: articleData.content}} />
                        <br />
                        <div className="social">                        
                            <FacebookShareButton url={"https://mango-coast-0ce694803.azurestaticapps.net/article/" + id}>
                                <FacebookIcon size={32} round={true} />
                            </FacebookShareButton>
                            <TwitterShareButton url={"https://mango-coast-0ce694803.azurestaticapps.net/article/" + id}>
                                <TwitterIcon size={32} round={true} />
                            </TwitterShareButton>
                            <WhatsappShareButton url={"https://mango-coast-0ce694803.azurestaticapps.net/article/" + id}>
                                <WhatsappIcon size={32} round={true} />
                            </WhatsappShareButton>
                            <ViberShareButton url={"https://mango-coast-0ce694803.azurestaticapps.net/article/" + id}>
                                <ViberIcon size={32} round={true} />
                            </ViberShareButton>
                            <EmailShareButton url={"https://mango-coast-0ce694803.azurestaticapps.net/article/" + id}>
                                <EmailIcon size={32} round={true} />
                            </EmailShareButton>
                            <PinterestShareButton url={"https://mango-coast-0ce694803.azurestaticapps.net/article/" + id}>
                                <PinterestIcon size={32} round={true} />
                            </PinterestShareButton>
                            <TelegramShareButton url={"https://mango-coast-0ce694803.azurestaticapps.net/article/" + id}>
                                <TelegramIcon size={32} round={true} />
                            </TelegramShareButton>
                        </div>
                    </Content>
                </>
            }
          <Footer />
        </Container>
      )
}

export default Article
