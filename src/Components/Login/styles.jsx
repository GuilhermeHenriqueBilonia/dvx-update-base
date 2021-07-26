import styled, { keyframes } from 'styled-components'
import {User} from '@styled-icons/boxicons-solid/User'
import {Password} from '@styled-icons/fluentui-system-filled/Password'
import {Loader3} from '@styled-icons/remix-fill/Loader3'

export const Container = styled.div`
`

export const Content = styled.div`
    background: var(--dark-grey);
    border-radius: 0.5rem;
    margin: 0;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    padding: 2rem 4rem;
`

export const Input = styled.input`
    border: 0;
    padding: 0.8rem;
    font-size: 1rem;
    width: 90%;
    height: 3rem;
    font-weight: 500;
    background-color: var(--input-background);
    &:focus{
        outline: none;
    }
`

export const InputDiv = styled.div`
    background-color: var(--input-background);
    padding: 0.5rem;
    border-radius: 5px;
    
    &:focus-within {
        outline: none;
        border: 2px solid var(--green)
    }
    margin-top: 2rem;
    & + div{
        margin-top: 1rem;
    }
`

export const UserIcon = styled(User)`
     path {
        color: var(--green);
    }
`

export const PasswordIcon = styled(Password)`
     path {
        color: var(--green);
    }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`


export const LoaderIcon = styled(Loader3)`
  animation: ${rotate} 2s linear infinite;
  

  path {
    color: #FFFFFF;
  }
`

export const Button = styled.button`
    width: 100%;
    margin-top: 2rem;
    height: 60px;
    cursor: pointer;
    font-size: 1.3rem;

    &[disabled]{
        opacity: 0.6
    }
`