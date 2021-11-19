/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react';

const ImgSlider = styled(Slider)`
    margin-top: 20px;
    max-height: 240px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before{
        color: white;
    }

    .slick-list{
        overflow: visible;
    }

    button {
        z-index: 1;
    }

    /* .slick-slide.slick-active{
        padding-right: 40px;
    } */

`

const Wrap = styled.div`
    cursor: pointer;
        padding-right: 25px;

    img {
        border: 4px solid transparent;
        /* border: 0.25px solid rgb(249, 249, 249, 0.1); */
        border-radius: 55px;
        /* margin: 10px; */
        
        width: 95%;
        height: 100%;
        min-height: 100px;
        max-width: 360px;
        max-height: 220px;

        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover {
            border: 4px solid rgb(249, 249, 249, 0.8);
        }
    }
`

const getWidth = () => window.innerWidth;

const Carousel = () => {
    const [dimensions, setDimensions] = React.useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })
    const [news, setNews] = useState([]);

    const url = `http://localhost:7071/api/GetCarousel`;
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
            setNews(data);
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
        function handleResize() {
          setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
          })
        console.log(dimensions)
    }
        window.addEventListener('resize', handleResize)
    }, [url]);
    window.addEventListener("resize", console.log('yolo'))
    let settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true
    }

    console.log(news);
    if (getWidth() > 1000) {
        settings.slidesToShow = 3;
    } else if (getWidth() > 600) {
        settings.slidesToShow = 2;
    } else {
        settings.slidesToShow = 1;
    }

    return (
        <ImgSlider {...settings}>
            {news &&
                news.map((blog) =>(
                <Wrap>
                    <img src={blog.imgLink}/>
                </Wrap>

                ))}
            {/* <Wrap>
                <img src="/images/viewers-marvel.png"/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png"/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png"/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-disney.png"/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png"/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png"/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png"/>
            </Wrap> */}
        </ImgSlider>
    )
}
// }

export default Carousel