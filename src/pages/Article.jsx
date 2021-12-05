import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { Link } from "react-router-dom"
import Footer from '../components/Footer';
import { getSingleArticle } from '../redux/apiCalls';
import {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    RedditShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    MailruShareButton,
    ViberShareButton,
    WorkplaceShareButton,
    EmailShareButton,
    FacebookShareCount,
    GooglePlusShareCount,
    LinkedinShareCount,
    PinterestShareCount,
    VKShareCount,
    OKShareCount,
    RedditShareCount,
    TumblrShareCount,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    ViberIcon,
  } from 'react-share';

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
                        <p>Κατηγορία: <u><Link style={{color: 'blue'}} to={"/category/" + articleData.category}>{articleData.category}</Link></u></p>
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
                        </div>
                    </Content>
                    {/* <div class="fb-share-button" data-href={"https://mango-coast-0ce694803.azurestaticapps.net/article/" + id} data-layout="button" data-size="large">
                        <a target="_blank" href={"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmango-coast-0ce694803.azurestaticapps.net%2Farticle%2F" + id + "&amp;src=sdkpreparse"} class="fb-xfbml-parse-ignore">Share on Facebook</a>
                    </div> */}
                </>
            }
          <Footer />
        </Container>
      )
}

export default Article
