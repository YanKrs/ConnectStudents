import styled from "styled-components";

export const AppContainer = styled.div`
 display: flex;
  flex-direction: column; 
  justify-content: space-between;
  align-items: center;
  min-height: 100vh; 
`;

export const ColumnContainer = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;min-height: 100vh;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1000px;border: 
  margin: 0 20px; margin-top: 120px;margin-bottom: 50px;
`;

export const ColumnTitle = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
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
  width: 10%;
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

export const AssociateButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  
  &:hover {
    background-color: #0056b3;
  }
`;
