import {Container, Content, Input, Button, ProgressComponent, ContentProgress} from './styles'
import { Progress } from 'reactstrap';

export function UpdateCnpj(){
    return(
        <Container>
            <div className="card">
                <h3>Dados das APIs</h3>
                <Content>
                    <Input type="text" placeholder="Url de Busca de CNPJs" />
                    <Input type="text" placeholder="Url de Atualização de CNPJs" />
                </Content>
                
                <h1>Mapeamento de campos</h1>
                <hr />

                <h3> Dados Básicos</h3>
                <Content>
                    <Input type="text" className="map" placeholder="Coluna CNPJ" />
                    <Input type="text" className="map" placeholder="Coluna Codigo CNAE" />
                    <Input type="text" className="map" placeholder="Coluna Situação" />
                </Content>
                <Content>
                    <Input type="text" className="map" placeholder="Coluna Nome Fantasia" />
                    <Input type="text" className="map" placeholder="Coluna Razão Social" />
                    <Input type="text" className="map" placeholder="Coluna Porte" />
                </Content>
                <Content>
                    <Input type="text" className="map" placeholder="Coluna Email" />
                    <Input type="text" className="map" placeholder="Coluna Telefone" />
                    <Input type="text" className="map" placeholder="Coluna Tipo" />
                </Content>
                <hr />

                <h3> Dados do Endereço</h3>

                <Content>
                    <Input type="text" className="map" placeholder="Coluna Cep" />
                    <Input type="text" className="map" placeholder="Coluna Rua" />
                    <Input type="text" className="map" placeholder="Coluna Numero" />
                </Content>
                <Content>
                    <Input type="text" className="map" placeholder="Coluna Complemento" />
                    <Input type="text" className="map" placeholder="Coluna Bairro" />
                    <Input type="text" className="map" placeholder="Coluna Municipio" />
                </Content>
                <Content>
                    <Input type="text" className="map" placeholder="Coluna UF" />
                </Content>
                <Button>
                    Atualizar dados
                </Button>
                <ContentProgress>
                    <ProgressComponent bar animated value="40">30%</ProgressComponent>
                </ContentProgress>
            </div>
        </Container>
    )
}