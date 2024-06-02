import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AppContainer,
  ColumnContainer,
  DeveloperContainer,
  DeveloperName,
  DeveloperEmail,
} from "./Styles";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { fetchDevelopers } from "../utils/apiUtils";
import { NavItem } from "../../../components/Navbar/Styles";


const StudentList: React.FC = () => {
  const [developers, setDevelopers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDevelopers(); // Chama a função fetchDevelopers
        setDevelopers(data); // Atualiza o estado dos desenvolvedores com os dados obtidos
      } catch (error) {
        console.error("Failed to fetch developers:", error);
      } finally {
        setLoading(false); // Após a requisição, define o carregamento como falso
      }
    };

    fetchData(); // Chama a função fetchData
  }, []);

  
  if (loading) {
    return <div>  <Navbar /><p>Carregando...</p>; <Footer /></div>
  }

  return (
    <div>
      <Navbar  /> 
      <AppContainer>
        <ColumnContainer>
          <h3>Alunos</h3>
          {developers.length === 0 ? ( // Verifica se não há alunos e se não estiver carregando
            <h4>Não há alunos cadastrados</h4>
          ) : (
            developers.map((developer) => (
              <DeveloperContainer key={developer.id}>
                <DeveloperName>Name: {developer.name}</DeveloperName>
                <DeveloperEmail>Email: {developer.email}</DeveloperEmail>
              </DeveloperContainer>
            ))
          )}
        </ColumnContainer>
      </AppContainer>{" "}
      <Footer />
    </div>
  );
};

export default StudentList;
