import styled from 'styled-components'
import { Progress } from 'reactstrap';


export const ContentProgress = styled.div`
width: 100%;
border: 2px solid rgb(41, 41, 46);
margin-top: 1.5rem;
border-radius: 0.5rem;
text-align: center;
`

export const ProgressComponent = styled(Progress)`
background-color: var(--green);
border-radius: 0.5rem;
text-align: center;
`