import React from "react";

import { NavBar, Logo, NavItem, LoginButton } from "./Styles";
import { useNavigate } from "react-router-dom";

const NavBarHome = () => {
  const navigate = useNavigate();

  return (
    <NavBar>
      <Logo onClick={() => navigate("/")}></Logo>
      <NavItem to="/projetos"><b>Projetos</b></NavItem>

      <NavItem to="/sobre-nos"><b>Sobre Nós</b></NavItem>
      <NavItem to="/contato"><b>Contato</b></NavItem>
      <LoginButton onClick={() => navigate("/login")}><b>Login</b></LoginButton>
      {}
    </NavBar>
  );
};

export default NavBarHome;
