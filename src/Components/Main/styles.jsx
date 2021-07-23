import styled from 'styled-components'
import {Business} from '@styled-icons/boxicons-solid/Business'
import {Person} from '@styled-icons/bootstrap/Person'
import {Cog} from '@styled-icons/boxicons-regular/Cog'

export const Container = styled.main`
    width: 100%;
    height: 100%;
`

export const Content = styled.div`
    width: 70%;
    margin: 3rem auto;
    @media(min-width: 1080px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }


`

export const ContentSolo = styled.div`
    width: 70%;
    height: 50px;
    margin: 1rem auto;
`

export const Cards = styled.a`
    background-color: var(--dark-grey);
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 0.5rem;
    cursor: pointer;
    text-decoration: none;
    
    @media(min-width: 180px){
        display: inline-table;
        margin-bottom: 1rem;
    }

    transition: transform 0.4s;

     &:hover{
         border: 2px solid var(--green);
         transform: translateY(-7px);
     }
`

export const CardContent = styled.div`
    width: 80%;
    margin: 1rem auto;

    b {
        margin-top: 1rem;
        font-size: 3rem;
    }
`

export const CardTitle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    margin-top: 2rem;

`

export const CardTitleSolo = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 1.5fr;
    gap: 0.5rem;

`

export const CardDescription = styled.div`
    font-size: 1rem;
    margin-top: 2rem;
    width: 100%;
    color: var(--description);
`

export const BusinessIcon = styled(Business)`
    margin-top: 1rem;
    path {
        color: var(--green);
    }
`
export const PersonIcon = styled(Person)`
margin-top: 1rem;
    path {
        color: var(--green);
    }
`
export const CogIcon = styled(Cog)`
    path {
        color: var(--green);
    }
`