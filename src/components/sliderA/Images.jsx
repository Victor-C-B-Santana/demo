import React from "react";
import styled from "styled-components";

const ImagesS = styled.img`
    
    flex: 0 0 100%;

    width: 100%;
    height: 101vh;
    object-fit: cover; 
    object-position: 60%; 

    transition: 0.2s ease-in-out;

    // transform: translateX(100%);
    
    ${(props) => {
        // console.log(props.$indice * 100, props.$indice); 
        return `
        transform: translateX(-100%);    
        transform: translateX(${(100 * props.$indice)}%);    
    `}}
`

// eslint-disable-next-line react/prop-types
function Images({ indice, src, alt }) {
    return <ImagesS $indice={indice} src={src} alt={alt} />
}

export default Images;