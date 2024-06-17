// Styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/logo.png';

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #09a58b;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

export const Logo = styled.div`
  width: 80px;
  height: 50px;
  background-image: url(${logoImage});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  width:100% ;
  
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

export const LogoutButton = styled.button`
  background-color: #d9534f;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 40px;

  &:hover {
    background-color: #c9302c;
  }
`;
export const HomeButton = styled.button`
  background-color: red; /* Cor azul: #4285f4 */
  color: #fff; /* Cor do texto branca */
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 45px; /* Reduzindo a margem para alinhar melhor com os outros botões */

  &:hover {
    background-color: #b71414; /* Cor azul mais escura no hover: #357ae8; */
  }
`;

export const WelcomeText = styled.span`
  font-weight: bold;
  color: #333;

`;