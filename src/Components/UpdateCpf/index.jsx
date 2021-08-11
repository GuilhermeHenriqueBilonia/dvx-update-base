import {useState} from 'react'
import { progress } from '../../hooks/progress';
import { addToastError, addToastSuccess } from '../../hooks/toast';
import { api } from '../../services';
import {ProgressBar} from '../ProgressBar';
import {Container, Content, Input, Button, 
    ContentProgress, ProgressComponent, LoaderIcon } from "./styles";

export function UpdateCpf(){
    const [Token, setToken] = useState('');
    const [urlBusca, setUrlBusca] = useState('');
    const [urlEdicao, setUrlEdicao] = useState('');

    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [genero, setGenero] = useState('');
    const [situacao, setSituacao] = useState('');
    const [isClicked,setIsClicked] = useState(false);

    const [intervalProgress, setIntervalProgress] = useState(false);
    const [value, setValue] = useState(0)

    async function handleUpdateCpf(){
        setIsClicked(true)
        var interval = setInterval(function() {
                            api.get('/progress')
                                .then(response => {
                                    setValue(response.data.progress);
                                })
                        }, 300)
        

        await api.post('/UpdateCpf', {
            "Nome": nome,
            "Cpf": cpf,
            "DataNascimento": dataNascimento,
            "Genero": genero,
            "Situacao": situacao,
            "urlBusca": urlBusca,
            "urlEdicao": urlEdicao,
            "Token": Token
        }).catch( err => {
            addToastError('Erro na Requisição, verifique os parâmetros')
            setIsClicked(false)
            clearInterval(interval)
        })

        setIsClicked(false)
        clearInterval(interval)

        addToastSuccess('Processamento finalizado com sucesso 😊')
        setTimeout(function(){
            setValue(0);
        }, 500)

    }

    return(
        <Container>
            <div className="card">
                <h3>Dados das APIs</h3>
                <Content>
                <Input type="text" 
                        value={Token}
                        onChange={(event) => {setToken(event.target.value)}}
                        placeholder="Token de Autenticação" />
                    <Input type="text" 
                        value={urlBusca}
                        onChange={(event) => {setUrlBusca(event.target.value)}}
                        placeholder="Url de Busca de CPFs" />
                    <Input type="text" 
                        value={urlEdicao}
                        onChange={(event) => {setUrlEdicao(event.target.value)}}
                        placeholder="Url de Atualização de CPFs" />
                </Content>
                
                <h1>Mapeamento de campos</h1>
                <hr />

                <h3> Dados Básicos</h3>
                <Content>
                <Input type="text" 
                    value={cpf}
                    onChange={(event) => {setCpf(event.target.value)}}
                    className="map" placeholder="Coluna Cpf" />
                    <Input type="text" 
                    value={nome}
                    onChange={(event) => {setNome(event.target.value)}}
                    className="map" placeholder="Coluna Nome" />
                    
                </Content>
                <Content>
                    <Input type="text" 
                    value={dataNascimento}
                    onChange={(event) => {setDataNascimento(event.target.value)}}
                    className="map" placeholder="Coluna Data de Nascimento" />
                    <Input type="text" 
                    value={genero}
                    onChange={(event) => {setGenero(event.target.value)}}
                    className="map" placeholder="Coluna Gênero" />
                    <Input type="text" 
                    value={situacao}
                    onChange={(event) => {setSituacao(event.target.value)}}
                    className="map" placeholder="Coluna Situação" />
                </Content>
                
                <Button onClick={handleUpdateCpf} disabled={isClicked}>
                    <span hidden={isClicked}>
                        Atualizar dados
                    </span>
                    <LoaderIcon
                        hidden={!isClicked}
                        size={40}
                    ></LoaderIcon>
                </Button>

                <ContentProgress processing>
                    <ProgressComponent bar animated value={value}>{`${value}%`}</ProgressComponent>
                </ContentProgress>
                
            </div>
        </Container>
    )
}