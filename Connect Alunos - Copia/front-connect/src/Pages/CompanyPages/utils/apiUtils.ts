import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchProjects = async () => {
  try {
    const token = localStorage.getItem("@Connect:token");
    const userId = localStorage.getItem("userId");
    const response = await axios.get(`${apiUrl}/projetos/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    throw error;
  }
};
export const fetchPublicProjects = async () => {
  try {
  
    const response = await axios.get(`${apiUrl}/projetos`, {
     
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    throw error;
  }
};
export const createProject = async (newProjectData: any) => {
  try {
    const token = localStorage.getItem("@Connect:token");
    const userId = localStorage.getItem("userId");

    const newProject = {
      titulo: newProjectData.titulo,
      descricao: newProjectData.descricao,
      id_empresa: userId,
      preco: parseFloat(newProjectData.preco).toFixed(2),
    };

    const response = await axios.post(`${apiUrl}/projetos`, newProject, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to create project:", error);
    throw error;
  }
};

export const deleteProject = async (projectId: string) => {
  try {
    const token = localStorage.getItem("@Connect:token");
    console.log(projectId);
    await axios.delete(`${apiUrl}/projetos/${projectId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error("Failed to delete project:", error);
    throw error;
  }
};
export const fetchDevelopers = async () => {
  try {
    const token = localStorage.getItem("@Connect:token");
    const response = await axios.get(`${apiUrl}/alunos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // Retorna os dados da resposta
  } catch (error) {
    console.error("Failed to fetch developers:", error);
    throw error; // Lança o erro para ser tratado no componente
  }
};
