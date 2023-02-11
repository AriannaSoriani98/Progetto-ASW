import React,{useEffect, useState,useRef} from 'react'
import styled, {css} from "styled-components";
import {IoMdArrowRoundForward} from "react-icons/io";
import {Button} from './Button';
import {IoArrowForward,IoArrowBack} from "react-icons/io5";
import "./home.css";

const HomeSection=styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  background-color: #FFFFFF;
`;
const HomeWrapper=styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;
const HomeSlide=styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const HomeSlider=styled.div`
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HomeImage=styled.img`
  position: absolute;
  top:0;
  left:0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  
  &::before{
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
            0deg,
            rgba(0,0,0,0.2) 0%, 
            rgba(0,0,0,0.2) 50%,
            rgba(0,0,0,0.6) 100%
    );
  }
`;
const HomeContent=styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color:#fff;
  
  h1{
    font-size: clamp(1rem,8vw,10rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }
  
`;
const Arrow=styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`;

const SliderButtons=styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;
const arrowButtons = css`
  height: 50px;
  width: 50px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;
  
  &:hover{
    background: #cd853f;
    transform: scale(1.05);
  }
`;
const PrevArrow=styled(IoArrowBack)`
  ${arrowButtons}
`;
const NextArrow=styled(IoArrowForward)`
  ${arrowButtons}
`;

const Home=({slides})=> {
    const [current,setCurrent]=useState(0)
    const lenght=slides.length
    const timeout=useRef(null)

    useEffect(()=>{
        const nextSlide=()=>{
            setCurrent(current=>(current===lenght-1?0:current+1))
        }
        timeout.current=setTimeout(nextSlide,5000)
        return function (){
            if(timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    },[current,lenght])

    const nextSlide=()=>{
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current==lenght-1 ? 0 :  current+1) //se arriva a 0 ricomincia
    };

    const prevSlide=()=>{
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current==0 ? lenght-1:current-1)
    };
    if(!Array.isArray(slides)|| slides.length<=0){
        return null
    }
    return (
        <HomeSection>
            <HomeWrapper>
                {slides.map( (slide,index)=>{
                    return(
                        <HomeSlide key={index}>
                            {index===current&&(
                                <HomeSlider>
                                    <HomeImage src={slide.image}/>
                                    <HomeContent>
                                        <h1>{slide.title}</h1>
                                        <Button to={slide.path}
                                                primary='true'
                                                css={`
                                                max-width: 160px;`}>
                                            {slide.label}
                                            <Arrow/>
                                        </Button>
                                    </HomeContent>
                                </HomeSlider>
                            )}
                        </HomeSlide>
                    )
                })}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide}/>
                    <NextArrow onClick={nextSlide}/>
                </SliderButtons>
            </HomeWrapper>
        </HomeSection>

    )
}

export default Home;