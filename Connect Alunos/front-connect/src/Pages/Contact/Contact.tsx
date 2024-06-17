import React from "react";

import {
  PageContainer,
  PageTitle,
  ContactInfo,
  ContactForm,
  FormGroup,
  Input,
  SubmitButton,
  Textarea,
  Label,
} from "./Styles";

import Footer from "../../components/Footer/Footer";
import NavBarHome from "../../components/NavbarHome/Navbar";

const Contato = () => {
  return (
    <>
      <NavBarHome />
      <PageContainer>
        <PageTitle>Entre em contato conosco</PageTitle>
        <ContactForm>
          <FormGroup>
            <Label htmlFor="name">Nome:</Label>
            <Input type="text" id="name" name="name" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input type="email" id="email" name="email" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="telefone">Telefone:</Label>
            <Input type="tel" id="telefone" name="telefone" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Mensagem:</Label>
            <Textarea id="message" name="message" />
          </FormGroup>
          <SubmitButton type="submit">Enviar</SubmitButton>
        </ContactForm>
        <ContactInfo>
          <p><b>Endereço: Av. Eng. Eusébio Stevaux, 823 - Santo Amaro, São Paulo - SP, 04696-000</b></p>
          <p><b>Telefone: (11) 5682-7300</b></p>
        </ContactInfo>
      </PageContainer>
      <Footer />
    </>
  );
};
export default Contato;
