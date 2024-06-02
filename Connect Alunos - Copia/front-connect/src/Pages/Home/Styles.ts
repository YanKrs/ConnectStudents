import styled, { keyframes } from "styled-components";

const hoverAnimation = keyframes`
  from {
    background-color: #f0f0f0;
  }
  to {
    background-color: #c0c0c0;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 40vw;
  margin-top: 50px;
  flex-direction: column;
`;

export const PageTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  background-color: #f0f0f0;
`;

export const PageContent = styled.div`
  font-size: 16px;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionJob = styled.section`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ListJob = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`;

export const JobItem = styled.div`
  width: 35%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 10px;

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  padding: 0;
  list-style: none;
  width: 40vw; 
  min-height: 200px; 
`;

export const ListItem = styled.li`
  width: 256px;
  height: 152px;
  margin: 15px 10px; 
  text-align: center;
  background-color: rgb(23,183,165);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;

  p {
    margin-bottom: 0;
    transition: margin-bottom 0.5s; 
  }

  &:hover {
    background-color: #f5f5f5;
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }

  &:hover p {
    margin-bottom: 100px; 
  }
`;

export const ImageConect = styled.img`
  width: 200px; /* Ajuste para o tamanho desejado */
  height: auto; /* Mantém a proporção da imagem */
`;
