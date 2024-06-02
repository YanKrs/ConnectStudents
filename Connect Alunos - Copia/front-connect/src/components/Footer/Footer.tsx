import React from "react";
import { FooterContainer, FooterItem, FooterSocialIcons } from "./Styles";
import face from "../../assets/face.png";
import insta from "../../assets/insta.png";
import lkn from "../../assets/lkn.png";
import { Badge } from 'react-bootstrap'; // Importação do Badge

const Footer = () => {
  return (
    <FooterContainer>
      <FooterItem>
        <h3>
          <Badge bg="">Institucional</Badge>
        </h3>
        <ul>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Trabalhe Conosco</a>
          </li>
        </ul>
      </FooterItem>

      <FooterItem>
        <h3>
          <Badge bg="">Termos e Políticas</Badge>
        </h3>
        <ul>
          <li>
            <a href="#">Políticas de cookies</a>
          </li>
          <li>
            <a href="#">Termos e serviços</a>
          </li>
          <li>
            <a href="#">Políticas do Connect Students</a>
          </li>
        </ul>
      </FooterItem>

      <FooterItem>
        <h3>
          <Badge bg="">Redes Sociais</Badge>
        </h3>
        <FooterSocialIcons>
          <a href="#">
            <img src={insta} alt="Instagram" />
          </a>
          <a href="#">
            <img src={face} alt="Facebook" />
          </a>
          <a href="#">
            <img src={lkn} alt="LinkedIn" />
          </a>
        </FooterSocialIcons>
        <p>
          <b>@Connect Students, todos os direitos reservados.</b>
        </p>
      </FooterItem>
    </FooterContainer>
  );
};

export default Footer;