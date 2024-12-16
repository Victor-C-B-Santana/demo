import React, { useState } from "react";
import styled from "styled-components";

import Images from "./Images.jsx";
import { Circulo, Circulos } from "./circulos.jsx";



const SliderS = styled.section`

    max-width: 100%;
    position: relative;

    user-select: none;
    -webkit-user-select: none;
    
    
    & .images{
        display: flex;
        flex-flow: row nowrap;
        overflow: hidden;
    }

    &>span{
        position: absolute;

        z-index: 5;
        font-size: 7rem;
        color: rgba(255, 255, 255, 0.8);
        font-family: Poppins, sans-serif;

        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
    }

    &>span:first-child{
        top: 50%;
        right: 10px;
    }
    
    &>span:last-child{
        top: 50%;
        left: 10px;
    }
`

function Slider() {

    const [images, setImages] = useState([]);
    const [imageCurrent, setImageC] = useState(0);

    return (
        <SliderS id="home" $currentimage={imageCurrent} onLoad={() => {
            const divI = document.querySelector('.images');
            setImages([...divI.children]);
        }}>
            <span onClick={() => {
                setImageC(imageCurrent <= -2 ? 0 : imageCurrent - 1);
            }}>&#8250;</span>
            { }
            <div className="images">
                <Images indice={imageCurrent} src="/assets/images/Background2_upscaled.png" alt="Imagem de divulgação de marca" />
                <Images indice={imageCurrent} src="/assets/images/backgroun_2.png" alt="Imagem de divulgação de marca" />
                <Images indice={imageCurrent} src="/assets/images/Background2_upscaled.png" alt="Imagem de divulgação de marca" />

            </div>
            <Circulos className="circulos">
                {images.map((ima, i) => <Circulo key={i} $indice={i} $imageCurrent={imageCurrent} onClick={(e) => setImageC(i * -1)}></Circulo>)}
            </Circulos>
            <span onClick={() => {
                setImageC(imageCurrent >= 0 ? (images.length - 1) * -1 : imageCurrent + 1);
            }}>&#8249;</span>
        </SliderS>
    )
}


export { Slider as SliderA };