import styled from 'styled-components'
import { Progress } from 'reactstrap';

export const Container = styled.div`
    width: 100%;
    margin-top: 3rem;

    div.card{
        width: 70%;
        margin: 0 auto;
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: var(--dark-grey);

        & h1 {
            margin-top: 2rem;
        }
        hr {
            
            margin-top: 1rem;
        }

        hr + h3 {
            margin-top: 1rem;
        }
    }

`

export const Content = styled.div`
    height: 100%;
    padding-top: 1.5rem;
    display: flex;
    gap: 10px;
`

export const Input = styled.input`
    border: 2px solid rgb(41, 41, 46);
    padding: 0.8rem;
    font-size: 1rem;
    width: 50%;
    &.map {
        width: 33.333%;
    }
    height: 3rem;
    font-weight: 500;
    background-color: var(--input-background);
    border-radius: 5px;

    &:focus{
        outline: none;
        border: 2px solid var(--green)
    }
`
export const Button = styled.button`
    width: 100%;
    margin-top: 2rem;
    height: 60px;
    cursor: pointer;
    font-size: 1.3rem;
`

export const ContentProgress = styled.div`
    width: 100%;
    border: 2px solid rgb(41, 41, 46);
    margin-top: 1.5rem;
    border-radius: 0.5rem;
`

export const ProgressComponent = styled(Progress)`
    background-color: var(--green);
    border-radius: 0.5rem;
`