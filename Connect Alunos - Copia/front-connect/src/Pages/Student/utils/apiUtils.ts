import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchProjects = async () => {
  try {
    const token = localStorage.getItem("@Connect:token");
    const userId = localStorage.getItem("userId");
    const response = await axios.get(`${apiUrl}/projetos/aluno/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    throw error; // Lança o erro para ser tratado no componente que chama a função
  }
};
