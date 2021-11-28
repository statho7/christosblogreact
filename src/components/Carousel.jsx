/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';
// import link from '../links.json'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getCarousel } from '../redux/apiCalls';
import { selectCarousel } from '../redux/newsSlice';

const ImgSlider = styled(Slider)`
    margin-top: 20px;
    max-height: 240px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    .slick-slide {
        /* width: 100% !important; */
        height: 100% !important;
        display: flex;
        div {
            margin-top: auto;
            margin-bottom: auto;
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


    .contain {
        position: relative;
        /* padding: 25px; */
    }

    .overlay {
        border-radius: 55px;
        position: absolute;
        top:0;
        bottom: 0;
        left: 0;
        /* right: 5%; */
        background-color: rgba(50,50,50,0.75);
        overflow: hidden;
        border: 4px solid rgb(249, 249, 249, 0.8);
        /* margin: 0px !important; */
        width: 94%;
        height: 100%;
        min-height: 100px;
        max-width: 360px;
        max-height: 220px;
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
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
    }

    img {
        /* border: 4px solid transparent; */
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

        /* &:hover {
            border: 4px solid rgb(249, 249, 249, 0.8);
        } */
    }
`

function debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };
  }
  
let settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true
}
const Carousel = () => {
    const numArticles = useSelector((state) => state.news.carousel.numArticles);
    const [dimensions, setDimensions] = React.useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })
    const dispatch = useDispatch();
    useEffect(() => {
        if (numArticles === 0) {
            getCarousel(dispatch);
        }
        const debouncedHandleResize = debounce(function handleResize() {
          setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
          })
          if (dimensions.width > 1000) {
              settings.slidesToShow = 3;
          } else if (dimensions.width > 600) {
              settings.slidesToShow = 2;
          } else {
              settings.slidesToShow = 1;
          }
        console.log(dimensions.width)
    }, 500)
        window.addEventListener('resize', debouncedHandleResize)
        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)
          
      }
    }, [dimensions, dispatch, numArticles]);

    const news = useSelector(selectCarousel);

    return (
        <ImgSlider {...settings}>
            {news.articles &&
                news.articles.map((blog) =>(
                <Wrap key={blog.id}>
                    <Link to={`/article/` + blog.id}>
                        <div className="contain">
                            <img src={blog.imgLink}/>
                            <div className="overlay">
                                <div className="text">{blog.title}</div>
                            </div>
                        </div>
                    </Link>
                </Wrap>

                ))}
        </ImgSlider>
    )
}
// }

export default Carousel