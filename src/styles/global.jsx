import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root{
    --background: #121214;
    --green: #4CBB17;
    --dark-grey: rgb(32, 32, 32);
    --description: rgb(168, 168, 179);
    --input-background: rgb(18, 18, 20);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #fff;
 }

 html {
     @media(max-width: 1080px){
         font-size: 93.75%;
     }
     @media(max-width: 720px){
         font-size: 87.5%;
     }
 }

 body {
     background: #121214;
     -webkit-font-smoothing: antialiased;
 }

button {
    background-color: #4CBB17;
    font-weight: 700;
    font-size: 16px;
    transition: filter 0.2s;
    border: 0;
    color: #fff;
    border-radius: 0.5rem;

    transition: transform 0.2s;

    &:hover{
        filter: brightness(0.8);
        transform: translateY(-2px);
    }
}
`