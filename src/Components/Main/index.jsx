import { BusinessIcon, CardContent, 
    CardDescription, Cards, CardTitle, Container, Content, 
    PersonIcon, ContentSolo, CogIcon, CardTitleSolo } from "./styles";


export function Main(){
    return(
        <Container>
            <Content>
                <Cards href="/UpdateCnpj">
                    <CardContent>
                        <CardTitle>
                            <BusinessIcon size={110} />

                            <b>Atualizar CNPJ's</b>
                        </CardTitle>
                        <CardDescription>
                            Atualizar Dados do seu banco de dados a partir do CNPJ com dados da receita federal
                        </CardDescription>
                    </CardContent>
                </Cards>
                <Cards href="/UpdateCpf">
                    <CardContent>
                        <CardTitle>
                            <PersonIcon size={110} />

                            <b>Atualizar CPF's</b>
                        </CardTitle>
                        <CardDescription>
                            Atualizar Dados do seu banco de dados a partir do CPF com dados da receita federal
                        </CardDescription>
                    </CardContent>
                </Cards>
            </Content>
            <ContentSolo>
                <Cards>
                    <CardContent>
                        <CardTitleSolo>
                            <CogIcon size={110} />

                            <b>Configurações do Perfil</b>
                        </CardTitleSolo>
                    </CardContent>
                </Cards>
            </ContentSolo>
        </Container>
    )
}