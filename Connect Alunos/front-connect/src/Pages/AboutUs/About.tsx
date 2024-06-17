import React from "react";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import {
  LargeLogo,
  PageContainer,
  PageContent,
  PageTitle,
  PartnerItem,
  PartnerLogo,
  PartnersList,
  PartnersSection,
  PartnersSectionContainer,
  PartnersSectionTitle,
} from "./Styles";
import NavBarHome from "../../components/NavbarHome/Navbar";
import Footer from "../../components/Footer/Footer";
import royal from "../../assets/royal.png";
import infinity from "../../assets/infinity.png";
import sobre from  "../../assets/sobre.png";
import digital from  "../../assets/digital.png";
import artificial from  "../../assets/artificial.png";
import brain from  "../../assets/brain.png";
import human from  "../../assets/human.png";
import sobrenos from  "../../assets/sobrenos.png";
import { ContainerCard } from "./Styles";

// Definição do componente GroupExample

function GroupExample() {
  return (
<ContainerCard>
<Card style={{ width: '18rem', borderRadius:'15px', border: 'none', boxShadow: 'grey 0px 7px 34px 13px' }}>
    <Card.Header style={{ backgroundColor: '#47bca7', color:'white', borderRadius:'15px', textAlign:'center' }}>Gratuito</Card.Header>
    <Card.Body>
      <Card.Title>Plano Gratuito</Card.Title>
      <Card.Text>
        <ul>
        <li> 2 projetos em execução simultânea</li>
        <li> Envio de proposta para projetos</li>
        </ul>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem', borderRadius:'15px', border: 'none', boxShadow: 'grey 0px 7px 34px 13px' }}>
    <Card.Header style={{ backgroundColor: '#47bca7', color:'white', borderRadius:'15px', textAlign:'center' }}>Básico</Card.Header>
    <Card.Body>
      <Card.Title>Plano Básico</Card.Title>
      <Card.Text>
        <ul>
        <li> 4 projetos em execução simultânea</li>
        <li> Envio de proposta para projetos</li>
        <li> Sem anúncios </li>
        </ul>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem', borderRadius:'15px', border: 'none', boxShadow: 'grey 0px 7px 34px 13px' }}>
    <Card.Header style={{ backgroundColor: '#47bca7', color:'white', borderRadius:'15px', textAlign:'center' }}>Intermediário</Card.Header>
    <Card.Body>
      <Card.Title>Plano Intermediário</Card.Title>
      <Card.Text>
        <ul>
        <li> 10 projetos em execução simultânea</li>
        <li> Envio de proposta para projetos</li>
        <li> Sem anúncios </li>
        </ul>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem', borderRadius:'15px', border: 'none', boxShadow: 'grey 0px 7px 34px 13px' }}>
    <Card.Header style={{ backgroundColor: '#47bca7', color:'white', borderRadius:'15px', textAlign:'center' }}>Avançado</Card.Header>
    <Card.Body>
      <Card.Title>Plano Avançado</Card.Title>
      <Card.Text>
        <ul>
        <li> Ilimitdos projetos em execução simultânea</li>
        <li> Envio de proposta para projetos</li>
        <li> Sem anúncios </li>
        </ul>
      </Card.Text>
    </Card.Body>
  </Card>

</ContainerCard>
  );
}
const SobreNos = () => {
  return (
    <>
      <NavBarHome />
      <PageContainer>
        <Image src={sobrenos} fluid style={{ width: '1500px', height: '670px', margin: '10px', borderRadius:'25px' }} />
        <h2 style={{ margin: '50px', fontFamily: 'Roboto, sans-serif' }}>Planos de Assinaturas</h2>

        <GroupExample /> {/* Adicione o componente GroupExample aqui */}
        <PageTitle></PageTitle>
        <PageContent>
          <p></p>
          <PartnersSectionContainer>
            <PartnersSectionTitle style={{ margin: '50px', fontFamily: 'Roboto, sans-serif' }}>Empresas Parceiras</PartnersSectionTitle>
            
            <PartnersList>
              <PartnerItem>
                <PartnerLogo src={royal} alt="royal" />
              </PartnerItem>
              <PartnerItem>
                <PartnerLogo src={infinity} alt="infinity" />
              </PartnerItem>
              <PartnerItem>
                <PartnerLogo src={digital} alt="digital" />
              </PartnerItem>
              <PartnerItem>
                <PartnerLogo src={artificial} alt="artificial" />
              </PartnerItem>
              <PartnerItem>
                <PartnerLogo src={brain} alt="brain" />
              </PartnerItem>
              <PartnerItem>
                <PartnerLogo src={human} alt="human" />
              </PartnerItem>
            </PartnersList>
          </PartnersSectionContainer>
        </PageContent>
      </PageContainer>
      <Footer />
    </>
  );
};

export default SobreNos;