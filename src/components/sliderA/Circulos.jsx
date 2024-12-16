import React from "react";
import styled from "styled-components";

const Circulos = styled.div`

    z-index:6;
    position: absolute;
    bottom: 30px;
    left: 50%;

    display: flex;
    flex-flow: row nowrap;
    column-gap: 10px;
    justify-content: center;

    & span:nth-child(n+attr($indice)){
        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
        e.target.style.transform = 'scale(1.5)';
    }
`;

const Circulo = styled.span`
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: rgba(255, 255, 255, 0.3);
    border: 1px solid rgba(160, 160, 160, 0.5);
    border-radius: 50%;
    cursor: pointer;

    ${ props => props.$indice*-1 === props.$imageCurrent ? ` background-color: white;` : ``}}
`;

export { Circulo, Circulos};