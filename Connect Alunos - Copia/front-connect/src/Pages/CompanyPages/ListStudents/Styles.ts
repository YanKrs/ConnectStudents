import { Link } from "react-router-dom";
import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  margin: 20px;
`;

export const ColumnContainer = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  margin-top: 80px;
`;

export const DeveloperContainer = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f0f0f0;
  width: 70%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const DeveloperName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const DeveloperEmail = styled.p`
  font-size: 16px;
  color: #666;
`;

export const ActionButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
`;

export const Logo = styled.div`
  font-size: 24px;
`;

export const NavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-left: 20px;
`;

/* Footer */
export const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const FooterItem = styled.div`
  flex: 1;
`;

export const FooterSocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;
