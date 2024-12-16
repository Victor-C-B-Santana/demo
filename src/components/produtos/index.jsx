import React from "react";
import styled from "styled-components";

const ProdutosS = styled.section`
    min-height: 100vh;
    width: 100%;
    // background-color: rgba(3, 3, 3, 0.8);
    background-image: url(./assets/images/backgroundP.jpg);
    background-size: cover;
    padding-top: 50px;

    font-family: Quicksand, sans-serif;
    font-weight: 500;
    color: white;

    z-index: -1;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    position: relative;

    &::before{
        content: ' ';

        display: block;

        position: absolute;
        top: 0;
        z-index: -2;

        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,1);
        opacity: 0.85;
    }

    & h2{
        font-size: 40px;
        margin-bottom: 20px;
    }

    & h2::after{
        content: ' ';

        display: block;

        width: 150px;
        height: 4px;
        background-color: red;
        border-radius: 10px;
        margin: 0 auto;
    }

    &>div{
        width: 100%;

        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        column-gap: 40px;
        row-gap: 20px;

        margin: 0 75px;
    }

    &>div>div{
        height: 300px;

        flex: 0 0 310px;
        background-color: black;
        border-radius: 20px;
        padding: 30px;
    }
`

const Produto = styled.div`

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: start;
    row-gap: 30px;
    z-index:2;

    position: relative;

    &::after{
        content: ' ';

        display: block;

        position: absolute;
        top: 0;
        z-index: -2;

        width: 100%;
        height: 100%;
        background: rgba(0,0,0, 0.9) linear-gradient(39.08deg,#000 -22.22%,rgba(0,0,0,.6) 76.78%);
        opacity: 0.6;
        border-radius: 20px;
    }

    background-image: url(${props => props.$img});

    & img{
        width: 100px;
    }

    & p{
        font-size: 2rem;
        font-weight: 700
    }
`

export default function Produtos() {
    return <ProdutosS id="produtos">
        <h2>NOSSOS SERVIÇOS</h2>
        <div>
            <Produto className="prod" $img={"./assets/images/cover-assessoria-marketing.jpg"}>
                <img src="./assets/images/icon-assessoria-marketing.png" alt="Icone" />
                <p>Desenvolvimento de sites</p>
            </Produto>
            <Produto className="prod" $img={"./assets/images/cover-assessoria-marketing.jpg"}>
                <img src="./assets/images/icon-assessoria-marketing.png" alt="Icone" />
                <p>Marketing digital</p>
            </Produto>
            <Produto className="prod" $img={"./assets/images/cover-assessoria-marketing.jpg"}>
                <img src="./assets/images/icon-assessoria-marketing.png" alt="Icone" />
                <p>Identidade visual</p>
            </Produto>
            <Produto className="prod" $img={"./assets/images/cover-assessoria-marketing.jpg"}>
                <img src="./assets/images/icon-assessoria-marketing.png" alt="Icone" />
                <p>Web services</p>
            </Produto>
            <Produto className="prod" $img={"./assets/images/cover-assessoria-marketing.jpg"}>
                <img src="./assets/images/icon-assessoria-marketing.png" alt="Icone" />
                <p>Vendas</p>
            </Produto>
            <Produto className="prod" $img={"./assets/images/cover-assessoria-marketing.jpg"}>
                <img src="./assets/images/icon-assessoria-marketing.png" alt="Icone" />
                <p>SEO e Search Engine</p>
            </Produto>
            <Produto className="prod" $img={"./assets/images/cover-assessoria-marketing.jpg"}>
                <img src="./assets/images/icon-assessoria-marketing.png" alt="Icone" />
                <p>Account management</p>
            </Produto>
            <Produto className="prod" $img={"./assets/images/cover-assessoria-marketing.jpg"}>
                <img src="./assets/images/icon-assessoria-marketing.png" alt="Icone" />
                <p>Gerenciamento de contas</p>
            </Produto>
        </div>
    </ProdutosS>;
}