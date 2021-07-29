import {useState} from 'react'
import {Container, Content, Input, Button, ProgressComponent, ContentProgress} from './styles'
import {api} from '../../services/index'

export function UpdateCnpj(){
    //URLs
    const [Token, setToken] = useState('');
    const [urlBusca, setUrlBusca] = useState('');
    const [urlEdicao, setUrlEdicao] = useState('');

    //campos
    const [Cnpj, setCnpj] = useState('');
    const [Cnae, setCnae] = useState('');
    const [Situacao, setSituacao] = useState('');
    const [NomeFantasia, setNomeFantasia] = useState('');
    const [RazaoSocial, setRazaoSocial] = useState('');
    const [Porte, setPorte] = useState('');
    const [Email, setEmail] = useState('');
    const [Telefone, setTelefone] = useState('');
    const [Tipo, setTipo] = useState('');
    const [Cep, setCep] = useState('');
    const [Rua, setRua] = useState('');
    const [Numero, setNumero] = useState('');
    const [Complemento, setComplemento] = useState('');
    const [Bairro, setBairro] = useState('');
    const [Municipio, setMunicipio] = useState('');
    const [Uf, setUf] = useState('');

    async function handleSubmit(){
        const data = {
            urlBusca,urlEdicao,
            Cnpj, Cnae, Situacao, NomeFantasia,
            RazaoSocial, Porte, Email, Telefone, 
            Tipo, Cep, Rua, Numero, Complemento,
            Bairro, Municipio, Uf
        }
        console.log(data)
        const response = await api.post('/UpdateCnpj', data)
        console.log(response)
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
                        placeholder="Url de Busca de CNPJs" />
                    <Input type="text" 
                        value={urlEdicao}
                        onChange={(event) => {setUrlEdicao(event.target.value)}}
                        placeholder="Url de Atualização de CNPJs" />
                </Content>
                
                <h1>Mapeamento de campos</h1>
                <hr />

                <h3> Dados Básicos</h3>
                <Content>
                    <Input type="text" 
                        value={Cnpj}
                        onChange={(event) => {setCnpj(event.target.value)}}
                        className="map" placeholder="Coluna CNPJ" />

                    <Input type="text" 
                        value={Cnae}
                        onChange={(event) => {setCnae(event.target.value)}}
                        className="map" placeholder="Coluna Codigo CNAE" />

                    <Input type="text" 
                        value={Situacao}
                        onChange={(event) => {setSituacao(event.target.value)}}
                        className="map" placeholder="Coluna Situação" />
                </Content>
                <Content>
                    <Input type="text" 
                        value={NomeFantasia}
                        onChange={(event) => {setNomeFantasia(event.target.value)}}
                        className="map" placeholder="Coluna Nome Fantasia" />

                    <Input type="text" 
                        value={RazaoSocial}
                        onChange={(event) => {setRazaoSocial(event.target.value)}}
                        className="map" placeholder="Coluna Razão Social" />

                    <Input type="text" 
                        value={Porte}
                        onChange={(event) => {setPorte(event.target.value)}}
                        className="map" placeholder="Coluna Porte" />
                </Content>
                <Content>
                    <Input type="text" 
                        value={Email}
                        onChange={(event) => {setEmail(event.target.value)}}
                        className="map" placeholder="Coluna Email" />

                    <Input type="text" 
                        value={Telefone}
                        onChange={(event) => {setTelefone(event.target.value)}}
                        className="map" placeholder="Coluna Telefone" />

                    <Input type="text" 
                        value={Tipo}
                        onChange={(event) => {setTipo(event.target.value)}}
                        className="map" placeholder="Coluna Tipo" />
                </Content>
                <hr />

                <h3> Dados do Endereço</h3>

                <Content>
                    <Input type="text" 
                        value={Cep}
                        onChange={(event) => {setCep(event.target.value)}}
                        className="map" placeholder="Coluna Cep" />

                    <Input type="text" 
                        value={Rua}
                        onChange={(event) => {setRua(event.target.value)}}
                        className="map" placeholder="Coluna Rua" />

                    <Input type="text" 
                        value={Numero}
                        onChange={(event) => {setNumero(event.target.value)}}
                        className="map" placeholder="Coluna Numero" />
                </Content>
                <Content>
                    <Input type="text" 
                        value={Complemento}
                        onChange={(event) => {setComplemento(event.target.value)}}
                        className="map" placeholder="Coluna Complemento" />

                    <Input type="text" 
                        value={Bairro}
                        onChange={(event) => {setBairro(event.target.value)}}
                        className="map" placeholder="Coluna Bairro" />

                    <Input type="text" 
                        value={Municipio}
                        onChange={(event) => {setMunicipio(event.target.value)}}
                        className="map" placeholder="Coluna Municipio" />
                </Content>
                <Content>
                    <Input type="text" 
                        value={Uf}
                        onChange={(event) => {setUf(event.target.value)}}
                        className="map" placeholder="Coluna UF" />
                </Content>
                <Button onClick={handleSubmit}>
                    Atualizar dados
                </Button>
                <ContentProgress>
                    <ProgressComponent bar animated value="40">30%</ProgressComponent>
                </ContentProgress>
            </div>
        </Container>
    )
}