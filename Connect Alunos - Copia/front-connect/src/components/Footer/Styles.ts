import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #16C3A7;
  color: #333;
  padding: 40px 20px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  font-family: 'Arial, sans-serif';
  border-top: 1px solid #e7e7e7;
`;

export const FooterItem = styled.div`
  flex: 1;
  margin: 20px;
  min-width: 200px;

  h3 {
    font-size: 20px;
    margin-bottom: 15px;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
    text-align: center;

    li {
      margin: 8px 0;

      a {
        color: #333;
        text-decoration: none;
        font-weight: bold;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  p {
    text-align: center;
    margin-top: 20px;
  }
`;

export const FooterSocialIcons = styled.div`
  display: flex;
  justify-content: center;

  a {
    margin: 0 10px;

    img {
      width: 24px;
      height: 24px;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;