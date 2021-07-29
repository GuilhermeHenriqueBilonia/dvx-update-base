import { Container, Content, PoweroffIcon } from "./styles";
import logoImg from '../../assets/logo_dvx_update.png'
import { useHistory } from "react-router-dom";

export function Header(){
    const history = useHistory()

    function handleLogout(){
        localStorage.removeItem('@DvxUpdateData:token');
        history.push('/login')
    }

    return (
        <Container>
            <Content>
                <div>
                    <a href="/">
                        <img src={logoImg} alt="Logo" />
                        <p>DVX Updated Base</p>
                    </a>
                </div>
                <div className="iconClass">
                    <PoweroffIcon size={30} onClick={handleLogout} />
                </div>  
            </Content>
        </Container>
    )
}