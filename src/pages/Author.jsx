import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom"
import Footer from '../components/Footer';
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
import { useDispatch, useSelector } from 'react-redux';
import { getAuthor } from '../redux/apiCalls';

const Container = styled.div`
    margin-bottom: 45px;
    padding: 0px 25px;

    h3, .social {
        display: flex;
        justify-content: center;
    }

    .social{
        margin: 0 15px;
    }

    .social button{
        margin: 0 5px;
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
    justify-content: space-center;

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
        min-height: 100px;
        min-width: 100px;
        max-height: 20vh;
        max-width: 36vh;
        display: flex;
        margin: auto;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, 
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`

const Author = () => {
    const { name } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        getAuthor(dispatch, name);
        
    }, [dispatch, name]);

    const articles = useSelector((state) => state.news.all.articles.filter(article => article.author.includes(name)));
    // const pending = useSelector((state) => state.news.all.pending);
    // const error = useSelector((state) => state.news.all.error);


    return (
        <Container>
            <h3>{name}</h3>
            <Content>
                {/* {pending && 
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
                } */}
                {articles &&
                articles.sort(function(a, b){return Number(b.id)-Number(a.id)}).map((blog) =>(
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
            <br />
            <div className="social">                        
                <FacebookShareButton url={"https://mango-coast-0ce694803.azurestaticapps.net/author/" + name + "/"}>
                    <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <TwitterShareButton url={"https://mango-coast-0ce694803.azurestaticapps.net/author/" + name + "/"}>
                    <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <WhatsappShareButton url={"https://mango-coast-0ce694803.azurestaticapps.net/author/" + name + "/"}>
                    <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
                <ViberShareButton url={"https://mango-coast-0ce694803.azurestaticapps.net/author/" + name + "/"}>
                    <ViberIcon size={32} round={true} />
                </ViberShareButton>
                <EmailShareButton url={"https://mango-coast-0ce694803.azurestaticapps.net/author/" + name + "/"}>
                    <EmailIcon size={32} round={true} />
                </EmailShareButton>
                <PinterestShareButton url={"https://mango-coast-0ce694803.azurestaticapps.net/author/" + name + "/"}>
                    <PinterestIcon size={32} round={true} />
                </PinterestShareButton>
                <TelegramShareButton url={"https://mango-coast-0ce694803.azurestaticapps.net/author/" + name + "/"}>
                    <TelegramIcon size={32} round={true} />
                </TelegramShareButton>
            </div>
            <Footer />
        </Container>
    )
}

export default Author
