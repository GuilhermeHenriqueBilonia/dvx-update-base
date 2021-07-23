import { Container, Content, PoweroffIcon } from "./styles";
import logoImg from '../../assets/logo_antiga.png'

export function Header(){
    return (
        <Container>
            <Content>
                <div>
                    <a href="/">
                        <img src={logoImg} alt="Logo" />
                    </a>
                </div>
                <div className="iconClass">
                    <PoweroffIcon size={30} />
                </div>  
            </Content>
        </Container>
    )
}