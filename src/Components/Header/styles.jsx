import styled, {keyframes} from 'styled-components';
import {PowerOff} from '@styled-icons/boxicons-regular/PowerOff'
export const Container = styled.div`
    width: 100%;
    background-color: var(--dark-grey);
`

const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
`

export const Content = styled.div`
    width: 70%;
    height: 100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 5fr 1fr;

    a {
        text-decoration: none;
        height: 3rem;
        display: flex;
        
        @media(max-width: 1080px){
            p {
                display: none;
            }
        }

        p {
                font-size: 2.4rem;
                margin-top: 1.3rem;
                margin-left: 1rem;
                font-family: 'Cabin', sans-serif;
                font-weight: 700;
                padding: 0;
                width: 100%;
            }
    }

    img {
        margin-top: 1.6rem;
        width: 3rem;
        height: 3rem;
        animation: ${rotate} 5s linear infinite;
  
    }
    .iconClass {
        width: 100%;
        float: right;
    }
`

export const PoweroffIcon = styled(PowerOff)`
    margin-top: 2rem;
    float:right;
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
        transform: translateY(-3px);
    }
    path {
        color: red;
    }
`

