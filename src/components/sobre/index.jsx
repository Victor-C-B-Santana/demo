import React from "react";
import styled from "styled-components";

const SobreS = styled.section`
    display: flex;
    justify-content: space-evenly;
    @media screen and (min-width: 1200px){
        flex-flow: row nowrap;
    }

    @media screen and (max-width: 1200px){
        flex-flow: column nowrap;
        align-items: center;
    }

    &>*{
        flex: 1 1 1px;
    }

    &>div:first-child p,h2{
        width: 75%;
        margin: 20px auto
    }

    & h2{
        font-family: Quicksand, sans-serif;
        font-size: 5rem;
    }

    & h2::after{
        content: ' ';

        display: block;

        width: 150px;
        height: 2px;
        background-color: red;
        border-radius: 10px;
    }

    & p{
        font-family: Poppins, sans-serif;
        font-size: 1.6rem;

        text-align: justify;
    }

    & img{
        width: 100%;
    }
`;

export default function Sobre() {
    return <SobreS id="sobre">
        <div>
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa recusandae molestiae est quod delectus temporibus voluptate omnis quaerat fugiat minus odit deleniti mollitia voluptates ab dignissimos, eaque quis rerum cum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa recusandae molestiae est quod delectus temporibus voluptate omnis quaerat fugiat minus odit deleniti mollitia voluptates ab dignissimos, eaque quis rerum cum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa recusandae molestiae est quod delectus temporibus voluptate omnis quaerat fugiat minus odit deleniti mollitia voluptates ab dignissimos, eaque quis rerum cum.
            </p>
        </div>
        <div>
            <img src="./assets/images/sobre.png" alt="" />
        </div>
    </SobreS>
}