import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from 'styled-components'
import link from '../links.json'
import { Link } from "react-router-dom"

const Container = styled.div`
    position: relative;
    min-height: calc(95vh - 70px);
    overflow-x: hidden;
    display: block;
    margin-top: 5vh;
    padding: 0 calc(3.5vw + 5px);
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
    line-height: 1.8;
    padding: 0 25px;

    p {
        justify-content: center;
    }
`;

// const Background = styled.div`
//     left: 0px;
//     opacity: 0.8;
//     position: fixed;
//     right: 0px;
//     top: 0px;
//     z-index: -1;
//     img {
//         width: 100vw;
//         height: 100vh;
//         @media (max-width: 768px) {
//             width: initial;
//         }
//     }
// `;

// const ContentMeta = styled.div`
//     max-width: 874px;
// `;

// const Controls = styled.div`
//     align-items: center;
//     display: flex;
//     flex-flow: row nowrap;
//     margin: 24px 0px;
//     min-height: 56px;
// `;

// const Player = styled.button`
//     font-size: 15px;
//     margin: 0px 22px 0px 0px;
//     padding: 0px 24px;
//     height: 56px;
//     border-radius: 4px;
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     letter-spacing: 1.8px;
//     text-align: center;
//     text-transform: uppercase;
//     background: rgb (249, 249, 249);
//     border: none;
//     color: rgb(0, 0, 0);
//     img {
//     width: 32px;
//     }
//     &:hover {
//     background: rgb(198, 198, 198);
//     }
//     @media (max-width: 768px) {
//     height: 45px;
//     padding: 0px 12px;
//     font-size: 12px;
//     margin: 0px 10px 0px 0px;
//     img {
//         width: 25px;
//     }
//     }
// `;

// const Trailer = styled(Player)`
//     background: rgba(0, 0, 0, 0.3);
//     border: 1px solid rgb(249, 249, 249);
//     color: rgb(249, 249, 249);
// `;

// const AddList = styled.div`
//     margin-right: 16px;
//     height: 44px;
//     width: 44px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: rgba(0, 0, 0, 0.6);
//     border-radius: 50%;
//     border: 2px solid white;
//     cursor: pointer;
//     span {
//     background-color: rgb(249, 249, 249);
//     display: inline-block;
//     &:first-child {
//         height: 2px;
//         transform: translate(1px, 0px) rotate(0deg);
//         width: 16px;
//     }
//     &:nth-child(2) {
//         height: 16px;
//         transform: translateX(-8px) rotate(0deg);
//         width: 2px;
//     }
//     }
// `;

// const GroupWatch = styled.div`
//     height: 44px;
//     width: 44px;
//     border-radius: 50%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     cursor: pointer;
//     background: white;
//     div {
//         height: 40px;
//         width: 40px;
//         background: rgb(0, 0, 0);
//         border-radius: 50%;
//     img {
//         width: 100%;
//     }
//     }
// `;

// const SubTitle = styled.div`
//     color: rgb(249, 249, 249);
//     font-size: 15px;
//     min-height: 20px;
//     @media (max-width: 768px) {
//     font-size: 12px;
//     }
// `;

// const Description = styled.div`
//     line-height: 1.4;
//     font-size: 20px;
//     padding: 16px 0px;
//     color: rgb(249, 249, 249);
//     @media (max-width: 768px) {
//     font-size: 14px;
//     }
// `;

const Article = () => {
    const { id } = useParams();
    const [articleData, setArticleData] = useState([]);

    const url = link.link + `/api/GetSingleArticle/` + id;
    useEffect(() => {
        if (articleData.length === 0 ){
            fetch(url,{method: "GET"})
            .then(res => {
                // console.log(res);
                if(!res.ok){
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
            {/* <Background>
                <img alt={articleData.title} src={articleData.imgLink} />
            </Background> */}
        
            <ImageTitle>
                <img alt={articleData.title} src={articleData.imgLink} />
            </ImageTitle>
            <Content>
                <p>Αρθρογράφος: {articleData.author}</p>
                <br />
                <div dangerouslySetInnerHTML={{__html: htmlString}} />
            </Content>
            {/* <ContentMeta>
                <Controls>
                <Player>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>Play</span>
                </Player>
                <Trailer>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>Trailer</span>
                </Trailer>
                <AddList>
                    <span />
                    <span />
                </AddList>
                <GroupWatch>
                    <div>
                        <img src="/images/group-icon.png" alt="" />
                    </div>
                </GroupWatch>
                </Controls>
                <SubTitle>{articleData.subTitle}</SubTitle>
                <Description>{articleData.description}</Description>
            </ContentMeta> */}
            </>
          }
        </Container>
      )
}

export default Article