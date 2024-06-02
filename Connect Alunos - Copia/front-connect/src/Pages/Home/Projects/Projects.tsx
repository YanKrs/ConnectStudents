import React, { useState, useEffect } from "react";


import {
  AppContainer,
  ColumnContainer,
  ColumnTitle,
  EmptyMessage,
  ProjectItem,
  ProjectTitle,
  ProjectDescription,
  ProjectPrice,
  ProjectOwner,
} from "./Styles";

import { fetchPublicProjects } from "../../CompanyPages/utils/apiUtils";

import Footer from "../../../components/Footer/Footer";
import NavBarHome from "../../../components/NavbarHome/Navbar";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetchPublicProjects();
      setProjects(data);
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  };

  return (
    <div>
      <NavBarHome />
      <AppContainer>
        <ColumnContainer>
          <ColumnTitle>Projetos</ColumnTitle>

          {projects.length === 0 ? (
            <EmptyMessage>No projects available</EmptyMessage>
          ) : (
            projects.map((project, index) => (
              <ProjectItem key={project.id}>
                <ProjectTitle>{project.titulo}</ProjectTitle>
                <ProjectDescription>{project.descricao}</ProjectDescription>
                <ProjectOwner>Empresa: {project.empresa.name}</ProjectOwner>
                <ProjectPrice>
                  {" "}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(project.preco)}
                </ProjectPrice>
              </ProjectItem>
            ))
          )}
        </ColumnContainer>
      </AppContainer>
      <Footer />
    </div>
  );
};

export default Projects;
