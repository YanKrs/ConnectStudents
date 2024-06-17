import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  min-height: 100vh;
  width: 100vw;
`;

export const PageTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  font-family: Arial, sans-serif;
`;

export const ContactForm = styled.form`
  width: 30%;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #0B6A6C;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ContactInfo = styled.div`
  margin-top: 5px;
  text-align: center;
  font-family: Arial, sans-serif;
  margin-top: 20px;
`;

export const Footer = styled.footer`
  /* Estilos do footer aqui */
`;

export const NavBarHome = styled.nav`
  /* Estilos da barra de navegação aqui */
`;
