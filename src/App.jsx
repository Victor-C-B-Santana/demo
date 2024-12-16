import React from "react";
import styled from "styled-components";

import './app.css';

import { Menu } from "./components/menu";
import { SliderA } from "./components/sliderA/index.jsx";
import Sobre from "./components/sobre/index.jsx";
import Produtos from "./components/produtos/index.jsx";

const AppC = styled.div`
    width: 100%;
    max-width: 100%;
    min-height: 100vh;

    position: relative;
`

export default function App(){
    return (
        <AppC>
            <Menu></Menu> 
            <SliderA></SliderA>
            <Sobre></Sobre>
            <Produtos></Produtos>
        </AppC>
    );
}