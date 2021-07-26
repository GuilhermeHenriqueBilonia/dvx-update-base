import { useState } from "react";
import { Button, Container, Content, UserIcon, Input, InputDiv, 
    PasswordIcon, LoaderIcon } from "./styles";
import {api} from '../../services/index'
import {addToastError} from '../../hooks/toast'
import { useHistory } from "react-router-dom";



export function Login(){
    const [user,setUser] = useState('')
    const history = useHistory();
    const [password,setPassword] = useState('')
    const [isClicked,setIsClicked] = useState(false);

    async function handleLogin(){
        setIsClicked(true)
        try {
            const response = await api.post('/Account/Login', {
                "userName": user,
                "password": password,
                "persistentLogin": true
            })
            localStorage.setItem('#DvxUpdateData:token', response.data.data.access_token )
            history.push('/')
        } catch {
            addToastError('Falha na autenticação.\nUsuário ou senha incorreta.');
            setIsClicked(false)
        }
    }

    return(
        <Container>
            <Content>
                <h3>Login</h3>
                <div>
                    <InputDiv>
                        <UserIcon size={20}/>
                        <Input 
                            type="text" 
                            value={user}
                            onChange={event => (setUser(event.target.value))}
                            placeholder="Usuário" 
                        />
                    </InputDiv>
                    <InputDiv>
                        <PasswordIcon size={20}/>
                        <Input 
                            type="password" 
                            value={password}
                            onChange={event => (setPassword(event.target.value))}
                            placeholder="Senha" 
                        />
                    </InputDiv>
                </div>
                <Button onClick={handleLogin} disabled={isClicked}>
                    <span hidden={isClicked}> 
                        Entrar 
                    </span>
                    <LoaderIcon
                        hidden={!isClicked}
                        size={40}
                    >
                    </LoaderIcon>
                </Button>
            </Content>
        </Container>
    )
}