import styled from "styled-components";

export const AppContainer = styled.div`
 display: flex;
  flex-direction: column; 
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
 margin-top: 120px;
`;

export const ColumnContainer = styled.div`
background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;min-height: 100vh;
  max-width: 1000px;border: 
  margin: 0 20px; margin-top: 40px;margin-bottom:50px;
`;

export const ColumnTitle = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;
export const ProjectOwner = styled.h3`
  color: #333;
  font-size: 15px;
  margin-bottom: 10px;
`;
export const EmptyMessage = styled.p`
  color: #666;
  text-align: center;
`;

export const Button = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin-top: 10px;
  height: 40px;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  width: 5%;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ProjectCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProjectTitle = styled.p`
  font-weight: bold;
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

export const ProjectDescription = styled.p`
  color: #666;
  margin-bottom: 10px;
`;
export const ProposalDialog = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  width: 80%;
  max-width: 600px;
color:white ;

`;

export const ProposalTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: white;
`;

export const ProposalTextarea = styled.textarea`
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: rgba(250, 255, 255, 0.8);
  color: #333;
`;

export const ProposalButton = styled.button`
  padding: 12px 24px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
export const ProposalPrice = styled.input`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: rgba(250, 255, 255, 0.8);
  color: #333;
  /* Estilos específicos para valores monetários */
  ::placeholder {
    color: #aaa; /* Cor do texto de placeholder */
  }
  :-ms-input-placeholder {
    color: #aaa; /* Cor do texto de placeholder no Internet Explorer */
  }
  ::-ms-input-placeholder {
    color: #aaa; /* Cor do texto de placeholder no Microsoft Edge */
  }
`;
export  const CancelButton = styled.button`
  padding: 12px 24px;
  background-color: #ccc;
  color: #fff;
  border: none;
  margin-left: 30px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #999;
  }
`;
export const AssociateButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin-top:10px ;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 20%;
  
  &:hover {
    background-color: #0056b3;
  }
`;
