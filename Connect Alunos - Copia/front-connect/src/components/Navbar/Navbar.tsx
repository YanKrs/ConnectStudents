import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavBar, Logo, NavItem, LogoutButton, WelcomeText, NavLinks, HomeButton } from './Styles';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

const NavbarStudant = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        // Limpar localStorage
        localStorage.clear();
        // Redirecionar para a página de login
        navigate("/login");
    };
    const loggedInUserName = localStorage.getItem("UserName"); 
    const userType = localStorage.getItem("userType"); 

    return (
      <NavBar>
      <Logo />
      <NavLinks>
          <NavItem to="/company/dashboard">Meus Projetos</NavItem>
          <NavItem to="/company/dashboard/alunos">Alunos </NavItem>
      </NavLinks>
      <WelcomeText>Bem-vindo, {loggedInUserName} ({userType})</WelcomeText>
      <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
      <NavLink to="/">
          <HomeButton>Home</HomeButton>
      </NavLink>
  </NavBar>
    );
};

export default NavbarStudant;
