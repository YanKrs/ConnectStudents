import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  AppContainer,
  ColumnContainer,
  ColumnTitle,
  EmptyMessage,
  ModalContainer,
  ModalInput,
  ModalButton,
  ModalCancelButton,
  ModalTextArea,
  Button,
  ProjectItem,
  ProjectTitle,
  ProjectDescription,
  ProjectPrice,
  ViewDetailsButton,
  ModalTitle,
  ProposalInfo,
  ProposalButton,
  ModalProposalContainer,
} from "./Styles";
import { toast } from "react-toastify";
import { deleteProject, fetchProjects, createProject } from "../utils/apiUtils";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import fundocp from '../../../assets/fundocp.jpg';

const apiUrl = process.env.REACT_APP_API_URL;

const CompanyDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newProjectData, setNewProjectData] = useState({
    titulo: "",
    descricao: "",
    id_empresa: "",
    preco: "",
  });
  const [showProposalModal, setShowProposalModal] = useState(false);
  const [projectProposals, setProjectProposals] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const projectsData = await fetchProjects();
      const filteredProjects = await Promise.all(projectsData.map(async (project:any) => {
        const token = localStorage.getItem("@Connect:token");
        const response = await axios.get(`${apiUrl}/projetos/projeto/${project.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.data.associado) {
          return project;
        }
      }));
      setProjects(filteredProjects.filter(Boolean));
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
 }
  const handleCreateProject = async () => {
    setShowProposalModal(false);
    try {
      await createProject(newProjectData);
      setShowModal(false);
      
      toast.success("Projeto criado com sucesso!");
      fetchData();
    } catch (error) {
      console.error("Failed to create project:", error);
    }
  };

  const handleDeleteProject = async (projectId: string) => {
    try {
      await deleteProject(projectId);
      toast.success("Projeto Deletado!");
      fetchData();
    } catch (error) {
      console.error("Failed to delete project:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const fetchProjectProposals = async (projectId: string) => {
    try {
      const token = localStorage.getItem("@Connect:token");
      const response = await axios.get(`${apiUrl}/projetos/${projectId}/proposta`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const projectProposalsData = response.data.map((proposal: any) => {
        return {
          ...proposal,
          id_projeto: projectId, // Adicionando o ID do projeto ao objeto de proposta
        };
      });
  
      setProjectProposals(projectProposalsData);
      setShowProposalModal(true);
    } catch (error) {
      console.error("Failed to fetch project proposals:", error);
    toast.error("Ainda não existem propostas para este projeto.");
    }
  };
  

  const handleAcceptProposal = async (projectId: string,id_aluno: string) => {
    try {
      const token = localStorage.getItem("@Connect:token");
    
      
      // Lógica para aceitar a proposta...
      const response = await axios.post(
        `${apiUrl}/projetos/associar`,
        {
          id_projeto: projectId,
          id_aluno: id_aluno,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      setShowProposalModal(false);
      toast.success("Proposta aceita com sucesso!");
      fetchData(); // Atualiza a lista de projetos
    } catch (error) {
      console.error("Failed to accept proposal:", error);
    }
  };
  

  return (
    <div>
      <Navbar />
      <AppContainer>   
        <ColumnContainer>

          <ColumnTitle>Meus Projetos</ColumnTitle>
          <ViewDetailsButton onClick={() => { setShowModal(true); setShowProposalModal(false); }}>Criar Projeto</ViewDetailsButton>

          {projects.length === 0 ? (
            <EmptyMessage>No projects available</EmptyMessage>
          ) : (
            projects.map((project, index) => (
              <ProjectItem key={project.id}>
                <ProjectTitle>{project.titulo}</ProjectTitle>
                <ProjectDescription>{project.descricao}</ProjectDescription>
                <ProjectPrice>
                  Preço:{" "}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(project.preco)}
                </ProjectPrice>
                <ViewDetailsButton onClick={() => { fetchProjectProposals(project.id); setShowModal(false); }}>Ver Propostas</ViewDetailsButton>

                <ViewDetailsButton style={{backgroundColor:'red'}} onClick={() => handleDeleteProject(project.id)}>
                  Deletar
                </ViewDetailsButton>
              </ProjectItem>
            ))
          )}

          {showModal && (
            <ModalContainer>
              <h3>Criar Projeto</h3>
              <ModalInput
                type="text"
                name="titulo"
                placeholder="Titulo"
                value={newProjectData.titulo}
                onChange={handleInputChange}
              />
              <ModalTextArea
                name="descricao"
                placeholder="Descricao"
                value={newProjectData.descricao}
                onChange={handleDescriptionChange}
              />
              <ModalInput
                type="number"
                name="preco"
                placeholder="Preço"
                value={newProjectData.preco}
                onChange={handleInputChange}
              />
              <ModalButton onClick={handleCreateProject}>
                Cadastrar Projeto
              </ModalButton>
              <ModalCancelButton onClick={() => setShowModal(false)}>
                Cancelar
              </ModalCancelButton>
            </ModalContainer>
          )}
        </ColumnContainer>
      </AppContainer>
      <Footer />

      {showProposalModal && (
       <ModalProposalContainer>
       <ModalTitle>Propostas </ModalTitle>
       {projectProposals.map((proposal, index) => (
        console.log(proposal),
         <ProposalInfo key={index}>
           <p>Proposta: {proposal.proposta}</p>
           <p>Preço: {proposal.preco}</p>
           {/* <p>Aluno: {proposal.name}</p> */}
           <ProposalButton onClick={() => handleAcceptProposal(proposal.id_projeto, proposal.id_aluno)}>Aceitar Proposta</ProposalButton>

         </ProposalInfo>
       ))}
       <ModalCancelButton onClick={() => setShowProposalModal(false)}>Fechar</ModalCancelButton>
     </ModalProposalContainer>
      )}
    </div>
  );
};

export default CompanyDashboard;
