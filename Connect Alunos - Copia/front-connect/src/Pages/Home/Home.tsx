import React from "react";
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge'; // Importação do Badge

import {
  PageContainer,
  PageContent,
  PageTitle,
  SectionContainer,
  ListItem,
  ListContainer,
  SectionJob,
  ListJob,
  JobItem,
} from "./Styles"; // Importe estilos conforme necessário
import Footer from "../../components/Footer/Footer";
import NavBarHome from "../../components/NavbarHome/Navbar";
import Universo from "../../assets/Universo.png";
import estudante from "../../assets/estudante.jpg";
import seguranca from "../../assets/seguranca.jpeg";
import negocio from "../../assets/negocio.jpg";
import conect from "../../assets/conect.png";
import real from  "../../assets/real.png";

const FluidExample = () => {
  return <Image src={conect} fluid style={{ width: '1300px', height: '500px', marginBottom: '40px', margin: '40px 0' }} />;
};

const BasicExample = () => {
  return (
    <div>
      <h1>
         <Badge bg="" style={{ marginBottom: '40px', margin: '40px 0', color: "#13B9A1",fontFamily: 'Arial, sans-serif' }}>
           Anuncie, contrate talentos e assegure transações seguras.
         </Badge>
      </h1>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <NavBarHome />
      <PageContainer>
        <PageTitle>Sobre Nós</PageTitle>
        <PageContent>
          <SectionJob>
            <div className="FotoInicial">
              <img src={real} alt="Imagem do universo" style={{ width: '1300px', height: '500px', marginBottom: '40px', margin: '40px 0' }} />
            </div>

            <BasicExample />
          
            <ListJob>
              <JobItem>
                <img src={estudante} alt="Ícone Vaga" />
                <h2 style = {{fontSize:'20px', margin: '15px'}}>Publique seu projeto</h2>

                
              </JobItem>

              <JobItem>
                <img src={negocio} alt="Ícone Contrate" />
                <h2 style = {{fontSize:'20px', margin: '15px'}}>Avalie</h2>
              </JobItem>

              <JobItem>
                <img src={seguranca} alt="Ícone Pague" />
                <h2 style = {{fontSize:'20px' , margin: '15px'}}>Pague com segurança</h2>
              </JobItem>
            </ListJob>
          </SectionJob><span></span>

          <SectionContainer>
            <h2>
              <Badge bg="" style={{ marginBottom: '40px', margin: '40px 0', color: "#13B9A1",fontFamily: 'Arial, sans-serif' }}>
                Encontre alunos desenvolvedores para...
              </Badge>
            </h2>
            <ListContainer>
              <ListItem><b>Front-end</b></ListItem>
              <ListItem><b>Back-end</b></ListItem>
              <ListItem><b>Database</b></ListItem>
              <ListItem><b>UI/UX</b></ListItem>
              <ListItem><b>AI Inteligência Artificial</b></ListItem>
              <ListItem><b>Suporte Técnico</b></ListItem>
            </ListContainer>
          
            <h2>
              <Badge bg="" style={{ marginBottom: '40px', margin: '40px 0', color: "#13B9A1",fontFamily: 'Arial, sans-serif' }}>
              Talentos pré-selecionados e certificados para trabalhar nas tecnologias que o seu negócio precisa
              </Badge>
            </h2>
          </SectionContainer>
          
          <FluidExample />
        </PageContent>
      </PageContainer>
      
      <Footer />
    </>
  );
};

export default Home;
export { FluidExample };