import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 150px;
  min-height: 100vh;
  width: 100vw;
`;

export const PageTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const PageContent = styled.div`
  font-size: 17px;
  line-height: 1.8;
  width: 70%;
  p{text-align:justify;}
`;

export const PartnersSection = styled.section`
  padding: 40px 0;
  text-align: center;
  
`;

export const LargeLogo = styled.img`
  width: 1300px;
  height: 500px;
  margin-bottom: 20px;
`;

export const PartnersSectionContainer = styled.div`
  padding: 50px 0;
  text-align: center;display:flex;
  justify-content: center;
  align-items: center;  flex-direction:column ;
`;

export const PartnersSectionTitle = styled.h2`
  font-size: 26px;
  margin-bottom: 20px;
  background-color: #f2f2f2;
`;

export const PartnersList = styled.ul`
  display: flex;
  flex-wrap: wrap;width:50vw;
  justify-content: center;
  align-items: center;
  list-style-type: none;

`;

export const PartnerItem = styled.li`
  margin: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const PartnerLogo = styled.img`
  width: 80px;
  height: auto;
`;


export const ContainerCard = styled.div`
  display: flex;
  justify-content:space-around;
  gap:135px;
`;
