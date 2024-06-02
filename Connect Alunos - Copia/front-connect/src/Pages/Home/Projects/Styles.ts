// Styles.js
import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
`;

export const ColumnContainer = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  margin-top: 120px;
  width: 100vh;
`;

export const EmptyMessage = styled.p`
  color: #999999;
  font-style: italic;
  margin-top: 20px;
`;

export const Button = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin-top: 5px;
  height: 30px;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const ProjectOwner = styled.h3`
  color: #333;
  font-size: 15px;
  margin-bottom: 10px;
`;

export const ProjectItem = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f0f0f0;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ProjectTitle = styled.h3`
  color: #333;
  font-size: 25px;
  margin-bottom: 10px;
`;

export const ProjectDescription = styled.p`
  color: #666;
  margin-bottom: 10px;
`;

export const ProjectPrice = styled.p`
  color: #007bff;
  font-weight: bold;
`;

export const ViewDetailsButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

export const Separator = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 20px 0;
`;

export const ColumnTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;
