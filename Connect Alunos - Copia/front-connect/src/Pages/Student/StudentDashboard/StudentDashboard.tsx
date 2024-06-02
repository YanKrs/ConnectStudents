import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AppContainer,
  ColumnContainer,
  ColumnTitle,
  EmptyMessage,
  AssociateButton,
  ProjectCard,
  ProjectDescription,
  ProjectTitle,
  ProposalDialog,
  ProposalTitle,
  ProposalTextarea,
  ProposalButton,
  CancelButton,
  ProjectOwner,
  ProposalPrice,
} from "./Styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarStudant from "../../../components/NavbarStudent/Navbar";
import Footer from "../../../components/Footer/Footer";

const apiUrl = process.env.REACT_APP_API_URL;

const StudentDashboard: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );
  const [proposalText, setProposalText] = useState("");
  const [proposalPrice, setProposalPrice] = useState("");
  const [showProposalDialog, setShowProposalDialog] = useState(false);
  const [propostaFeita, setPropostaFeita] = useState<boolean>(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem("@Connect:token");
      const allProjectsResponse = await axios.get(`${apiUrl}/projetos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const allProjects = allProjectsResponse.data;
      console.log(allProjects);
      const userId = localStorage.getItem("userId");
      const myProjectsResponse = await axios.get(
        `${apiUrl}/projetos/aluno/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const myProjects = myProjectsResponse.data.map(
        (projectObj: any) => projectObj.projeto.id
      );

      const updatedProjects = allProjects.map((project: any) => {
        if (myProjects.includes(project.id)) {
          return {
            ...project,
            isAssociated: true,
          };
        } else {
          return {
            ...project,
            isAssociated: false,
          };
        }
      });

      setProjects(updatedProjects);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  };

  const openProposalDialog = (projectId: number) => {
    setSelectedProjectId(projectId);
    setShowProposalDialog(true);
  };

  const handleProposalSubmit = async () => {
    try {
      const token = localStorage.getItem("@Connect:token");
      const userId = localStorage.getItem("userId");

      const response = await axios.post(
        `${apiUrl}/projetos/${userId}/proposta/${selectedProjectId}`,
        {
          proposta: proposalText,
          preco: proposalPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Proposta enviada com sucesso!");
      setShowProposalDialog(false);
      setProposalText("");
      setProposalPrice("");
      setPropostaFeita(true);
      fetchProjects();
    } catch (error) {
      console.error("Failed to submit proposal:", error);
      toast.error("Erro ao enviar proposta. Tente novamente mais tarde.");
    }
  };
  // Filtrar os projetos que não estão associados
  const unassociatedProjects = projects.filter(
    (project) => !project.isAssociated
  );
  const renderProjects = () => {
    if (unassociatedProjects.length === 0) {
      return <EmptyMessage>Não há projetos disponíveis</EmptyMessage>;
    }

    // Renderizar apenas os projetos não associados
    return unassociatedProjects.map((project) => (
      <ProjectCard key={project.id}>
        <ProjectTitle>{project.titulo}</ProjectTitle>
        <ProjectDescription>{project.descricao}</ProjectDescription>
        <ProjectDescription>Preço: {project.preco}</ProjectDescription>
        <ProjectOwner>Empresa: {project.empresa.name}</ProjectOwner>
        <AssociateButton
          onClick={() => openProposalDialog(project.id)}
          disabled={propostaFeita}
        >
          {propostaFeita ? "Proposta Feita" : "Fazer Proposta"}
        </AssociateButton>
      </ProjectCard>
    ));
  };

  return (
    <div>
      <NavbarStudant />
      <AppContainer>
        <ColumnContainer>
          <ColumnTitle>Projetos</ColumnTitle>
          {renderProjects()}
        </ColumnContainer>
      </AppContainer>
      <Footer />
      {showProposalDialog && (
        <ProposalDialog>
          <ProposalTitle>Enviar Proposta</ProposalTitle>
          <ProposalTextarea
            value={proposalText}
            onChange={(e) => setProposalText(e.target.value)}
            placeholder="Escreva sua proposta aqui..."
          />
          <ProposalPrice
            value={proposalPrice}
            onChange={(e) => setProposalPrice(e.target.value)}
            placeholder="Escreva sua proposta de valor aqui..."
          />
          <ProposalButton onClick={handleProposalSubmit}>Enviar</ProposalButton>
          <CancelButton onClick={() => setShowProposalDialog(false)}>
            Cancelar
          </CancelButton>
        </ProposalDialog>
      )}
    </div>
  );
};

export default StudentDashboard;
