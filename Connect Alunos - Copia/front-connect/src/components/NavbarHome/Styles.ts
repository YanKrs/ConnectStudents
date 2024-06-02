// Styles.js
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoImage from "../../assets/logo.jpg";

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

export const LoginButton = styled.button`
  background-color: rgb(23,183,165); /* Cor de fundo */
  color: #fff; /* Cor do texto */
  padding: 10px 20px; /* Espaçamento interno */
  border: none; /* Sem borda */
  border-radius: 5px; /* Bordas arredondadas */
  font-size: 16px; /* Tamanho da fonte */
  cursor: pointer; /* Cursor do mouse */
  transition: background-color 0.3s ease;
  margin-right: 40px;

  &:hover {
    background-color: #0056b3; /* Cor de fundo mais escura */
  }

  &:disabled {
    opacity: 0.5; /* Opacidade reduzida */
    cursor: not-allowed; /* Cursor de não permitido */
  }
`;
export const Logo = styled.div`
  width: 80px;cursor:pointer;
  height: 78px;
  background-image: url(${logoImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const NavItem = styled(Link)`
  color: #333;
  text-decoration: none;

  padding: 12px;
  border-radius: 4px;
  transition: background-color 0.4s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;
