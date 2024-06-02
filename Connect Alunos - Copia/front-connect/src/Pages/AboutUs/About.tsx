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

// Definição do componente GroupExample

function GroupExample() {
  return (
    <CardGroup>
      <Card style={{ border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
        <Card.Body>
          <Card.Title style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}></Card.Title>
          <Card.Text style={{ fontSize: '14px', color: '#666' }}>
            Este site é excelente para encontrar profissionais de diferentes áreas e especialidades. Após utilizar esta plataforma para um projeto, você se questiona como conseguiu trabalhar sem ela antes. Definitivamente, vale muito a pena!
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: '#14BDA8', borderTop: '1px solid #ddd' }}>
          <small className="text-muted" style={{ color: '#777' }}><b>Caique Araujo</b></small>
        </Card.Footer>
      </Card>
      <Card style={{ border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
        <Card.Body>
          <Card.Title style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}></Card.Title>
          <Card.Text style={{ fontSize: '14px', color: '#666' }}>
          Uma plataforma de freelancers se destaca pela sua extensa gama de respostas às propostas de projetos e pela qualidade excepcional dos profissionais disponíveis, superando expectativas. Embora haja espaço para pequenos aprimoramentos nas respostas às informações, sua clareza e eficiência a diferenciam. Parabéns à equipe pelo trabalho excepcional!
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: '#14BDA8', borderTop: '1px solid #ddd' }}>
          <small className="text-muted" style={{ color: '#777' }}><b>Yan Kairos</b></small>
        </Card.Footer>
      </Card>
      <Card style={{ border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
        <Card.Body>
          <Card.Title style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}></Card.Title>
          <Card.Text style={{ fontSize: '14px', color: '#666' }}>
            Minha primeira experiência com o site foi excelente, e sem dúvida, recomendo-o pela rapidez do suporte ao usuário, pela segurança do processo realizado dentro da plataforma e pela incrível experiência de trabalho que oferece. Altamente recomendado!
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: '#14BDA8', borderTop: '1px solid #ddd' }}>
          <small className="text-muted" style={{ color: '#777' }}><b>Everton Ribeiro</b></small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}
const SobreNos = () => {
  return (
    <>
      <NavBarHome />
      <PageContainer>
        <Image src={sobrenos} fluid style={{ width: '1500px', height: '500px', margin: '10px' }} />
        <h2 style={{ margin: '50px', fontFamily: 'Roboto, sans-serif' }}>A experiência de nossos clientes</h2>

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