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

    // Obter o nome do aluno logado e o tipo de usuário (por exemplo, "Aluno")
    const loggedInUserName = localStorage.getItem("UserName"); // Altere para o nome do aluno logado
    const userType = localStorage.getItem("userType"); // Altere para o tipo de usuário

    return (
      <NavBar>
      <Logo />
      <NavLinks>
          <NavItem to="/student/dashboard">Projetos Públicos</NavItem>
          <NavItem to="/student/dashboard/meus-projetos">Meus Projetos</NavItem>
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
