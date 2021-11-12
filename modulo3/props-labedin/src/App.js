import React from 'react';
import CardGrande from './components/CardGrande';
import ImagemButton from './components/ImagemButton';
import CardPequeno from './components/CardPequeno';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;

  }
`
const AppContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
const ContainerSecao = styled.div`
  width: 40vw;
  margin: 10px 0;
`

const SubtituloApp = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

function App() {
  return (
    <AppContainerPrincipal>
      <GlobalStyle />
      <ContainerSecao>
        <SubtituloApp>Dados pessoais</SubtituloApp>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQH1KSxis4AUUw/profile-displayphoto-shrink_200_200/0/1609531163578?e=1642032000&v=beta&t=ifGzkmdjghCIpHz_TDvUMxhCJB197Q2dm_XtkINvbcs" 
          nome="Adriano Becco Nunes" 
          descricao="Oi, eu sou o Adriano. Sou estudante da Turma Joy do Curso Web Full Stack da Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </ContainerSecao>

      <ContainerSecao>
        <CardPequeno
          imagem="https://www.caceres.mt.leg.br/banco-de-imagens/email.png/image"
          nome="Email:"
          descricao= " adrianobn.nunes@gmail.com"
        />

        <CardPequeno
          imagem="https://i.pinimg.com/736x/96/5c/7e/965c7eedc399211edfd5d59d8ce179e5.jpg"
          nome="Localização:"
          descricao=" Canoas, Rio Grande do Sul, Brasil"
        />
      </ContainerSecao>

      <ContainerSecao>
        <SubtituloApp>Formação Acadêmica</SubtituloApp>
        <CardGrande 
          imagem="https://clubedoassinanterbs.com.br/imagens/beneficio/large_beneficio20200117041445.png" 
          nome="Graduando no Curso Tecnológico em Análise e Desenvolvimento de Sistemas" 
          descricao="3º Semestre. Previsão de Conclusão: 12/2022. Instituição: SENAC/SP."
        />

        <CardGrande 
          imagem="https://lh3.googleusercontent.com/proxy/-dW9EoZbQZqYz3WEggF2PYoU00ckYo3HvrixiqRpjz0FCgwT_16J0Y5U4rwnIFFtkZ0xYCR9t3hziIa_TLjNoslBBT95cUCHXOJG-O0oIGvO-w" 
          nome="Graduado no Curso Superior de Ciências Biológicas" 
          descricao="Conclusão: 01/2013. Instituição: Faculdade Cenecista de Osório/RS."
        />
      </ContainerSecao>

      <ContainerSecao>
        <SubtituloApp>Experiências profissionais</SubtituloApp>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQHPqlON09PYvw/company-logo_200_200/0/1635796565180?e=1644451200&v=beta&t=a3rq3A8yLTomZDcnHy8sJqh9rpEEdVxiEBarcmqPUTI" 
          nome="Lojas Lebes" 
          descricao="Consultor de Vendas no Setor de Móveis. Período 08/2014 à 07/2021. " 
        />
        
        <CardGrande 
          imagem="https://s4.static.brasilescola.uol.com.br/img/2018/09/simbolo-da-biologia.jpg" 
          nome="Biólogo" 
          descricao="Biólogo Autônomo - Realização de Serviços de Licenciamento Ambiental." 
        />
      </ContainerSecao>

      <ContainerSecao>
        <SubtituloApp>Minhas redes sociais</SubtituloApp>
        <ImagemButton 
          imagem="data:image/jpeg;base64,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" 
          texto="Instagram" 
        />        

        <ImagemButton 
          imagem="data:image/jpeg;base64,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" 
          texto="LinkedIn" 
        />  

        <ImagemButton 
          imagem="https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg"
          texto="GitHub" 
        />      
      </ContainerSecao>
    </AppContainerPrincipal>
  );
}

export default App;
