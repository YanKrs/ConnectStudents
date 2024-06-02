import React, { useState, useEffect } from "react";
import axios from "axios";

import { AssociateButton, Button, ProjectCard, ProjectDescription, ProjectTitle } from "./Styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import { AppContainer, ColumnContainer, ColumnTitle, EmptyMessage } from "./Styles";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import NavbarStudant from "../../../components/NavbarStudent/Navbar";
const apiUrl = process.env.REACT_APP_API_URL;


const MyProjects: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]); 
 
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem("@Connect:token");
      const userId = localStorage.getItem("userId"); // Obtem o ID do usuário do localStorage
      const response = await axios.get(`${apiUrl}/projetos/aluno/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProjects(response.data);
      console.log(response.data)
      
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  };

  
  const renderProjects = () => {
    if (projects.length === 0) {
      return  <AppContainer><EmptyMessage>Voçe ainda nao participa de nenhum projeto</EmptyMessage></AppContainer>;
    }

    return projects.map((projectObj) => {
        const project = projectObj.projeto; // Acesse o objeto do projeto dentro do objeto de projeto-aluno
        return (
          <ProjectCard key={project.id}>
            <ProjectTitle>{project.titulo}</ProjectTitle>
            <ProjectDescription>{project.descricao}</ProjectDescription>
            <ProjectDescription>Preço: {project.preco}</ProjectDescription>
        
          </ProjectCard>
        );
      });
    };

  return (<div> <NavbarStudant />
    <AppContainer>
        <div>
     
      <Link to="/student/dashboard">
        <Button>Projetos Publicos</Button>
      </Link></div>
      <ColumnContainer>
        <ColumnTitle>Meus Projetos</ColumnTitle>
        {renderProjects()}
      </ColumnContainer>
    </AppContainer><Footer /></div>
  );
};

export default MyProjects;
