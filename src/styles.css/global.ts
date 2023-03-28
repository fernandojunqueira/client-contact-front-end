import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-primary:#4C6EF5;
        --color-primary-focus: #364FC7;
        --color-primary-negative: #59323F;

        //paleta de cinzas do mais escuro pro mais claro
        --color-grey-4: #191C1F;
        --color-grey-3: #212529;
        --color-grey-2: #343A40;
        --color-grey-1: #ADB5BD;
        --color-grey-0: #CED4DA;
        --color-grey-00:#EDF2FF
        --color-black30: rgba(0,0,0,0.3);

        //feedback Pallete
        --color-sucess: #3FE864;
        --color-negative: #E83F5B;
    }

    *{
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: black;
    }

    h1 , h2 , h3{
        font-weight: 700;
        color: var(--color-grey-0)
    }

    button{
        border: none;
        background: transparent;
        cursor: pointer;
    }
    input{
        border: none;
        outline: none;
        background: transparent;
    }

    p, span  {
        color: var(--color-grey-1)  
    }

    ol, ul, li{
        list-style: none;
    }

    label{
        font-size: 12px;
        font-weight: 400;
        color: var(--color-grey-0);

        @media (width < 425px){
            font-size: 10px;
        }
        
    }

    ::-webkit-scrollbar{
        background-color: var(--color-grey-3);
        border-radius: 8px;
        width: 8px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: var(--color-grey-1);
        border-radius: 8px;
        width: 50px;

    }

`