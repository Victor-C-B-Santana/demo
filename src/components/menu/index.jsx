import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Menu = styled.header`

    width: 100%;
    height: 100px;
    background-color: black;

    opacity: 0.9;

    padding: 0 100px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    column-gap: 10px;

    position: fixed;
    top:0;
    left:0;

    z-index: 3;

    font-family: Poppins, sans-serif;

    &>div{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;

        flex: 1 1 1px;
        height: 100%;
    }

    &>div img{
        width: 200px;
    }

    ${props => props.$theme==="white"? (
        `
        background-color: white;

        & a{
            color:rgba(0,0,0,0.75);
            text-decoration: none;
    
            font-size: 1.8rem;
        }
    
        & nav a:nth-child(2){
            color: #ED3237;
        }
    
        & nav a:nth-child(2):hover{
            color: rgb(255, 0, 4);
        }   
    
        & nav a:last-child{
            border: 1px solid rgba(0, 0, 0, 0.75);
            padding: 5px;
        }
    
        & nav{
            display: inline-flex;
            flex-flow: row nowrap;
            justify-content: space-evenly;
            align-items: center;
    
            flex: 2 1 1px;
            height: 100%;
        }
    
        & nav a:hover{
            color:white;
            border-color: white;
        }`
    )
    : `    
        & a{
            color:rgba(255, 255, 219, 0.75);
            background-color: black;
            text-decoration: none;
    
            font-size: 1.8rem;
        }
    
        & nav a:nth-child(2){
            color: #ED3237;
        }
    
        & nav a:nth-child(2):hover{
            color: rgb(255, 0, 4);
        }   
    
        & nav a:last-child{
            border: 1px solid rgba(255, 255, 219, 0.75);
            padding: 5px;
        }
    
        & nav{
            display: inline-flex;
            flex-flow: row nowrap;
            justify-content: space-evenly;
            align-items: center;
    
            flex: 2 1 1px;
            height: 100%;
        }
    
        & nav a:hover{
            color:white;
            border-color: white;
        }
    `}

`

function MenuC() {

    let [scroll, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <Menu $theme={scroll ? "white" : "black"}>
            <div>
                <a href="#home"><img src={scroll ? "assets/images/logo.png" :"assets/images/logoB.png"} alt="" /></a>
            </div>
            <nav>
                <a href="#home">HOME</a>
                <a href="#sobre">QUEM SOMOS</a>
                <a href="#produtos">NOSSOS SERVIÇOS</a>
                <a href="#">CLIENTE</a>
                <a href="#">BLOG</a>
                <a href="#">CONTATO</a>
            </nav>
        </Menu>
    );
}

export { MenuC as Menu };