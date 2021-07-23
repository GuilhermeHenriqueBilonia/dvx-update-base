import styled from 'styled-components';
import {PowerOff} from '@styled-icons/boxicons-regular/PowerOff'
export const Container = styled.div`
    width: 100%;
    background-color: var(--dark-grey);
`

export const Content = styled.div`
    width: 70%;
    height: 100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 5fr 1fr;

    a {
        text-decoration: none;
    }

    img {
        margin-top: 0.5rem;
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