import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

export const ProtectRoute = () => {
  const token = localStorage.getItem("@Connect:token");
  const userType = localStorage.getItem("userType");

  if (!token) {
    // Se não houver token, redireciona para a página inicial
    toast.error("Acesso negado, por favor realize o login");
    return <Navigate to="/" />;
  }
  // Se o tipo de usuário for "empresa" e a rota não for para a dashboard da empresa, redireciona para "/"
  if (userType === "empresa" && window.location.pathname !== "/company/dashboard" && window.location.pathname !== "/company/dashboard/alunos") {
    toast.error("Acesso negado");
    return <Navigate to="/" />;
  }
  // Se o tipo de usuário for "aluno" e a rota não for para a dashboard do aluno, redireciona para "/"
  if (userType === "aluno" && window.location.pathname !== "/student/dashboard" && window.location.pathname !== "/student/dashboard/meus-projetos") {
    toast.error("Acesso negado");
    return <Navigate to="/" />;
  }

  // Caso contrário, permite o acesso ao conteúdo protegido
  return <Outlet />;
};
