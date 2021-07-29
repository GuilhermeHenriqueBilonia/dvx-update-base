import {Container, Content, Input, Button, ProgressComponent, ContentProgress} from './styles'

export function UpdateCpf(){
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
                    <Input type="text" className="map" placeholder="Coluna Nome" />
                    <Input type="text" className="map" placeholder="Coluna Data de Nascimento" />
                </Content>
                <Content>
                    <Input type="text" className="map" placeholder="Coluna Gênero" />
                    <Input type="text" className="map" placeholder="Coluna Situação" />
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