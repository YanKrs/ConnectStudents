import { Route, Routes, Navigate } from "react-router-dom";
import { ProtectRoute } from "./ProtectedRoute";
import CompanyDashboard from "../Pages/CompanyPages/CompanyDashboard/CompanyDashboard";
import StudentDashboard from "../Pages/Student/StudentDashboard/StudentDashboard";
import Login from "../Pages/Login/Login";
import RegisterPage from "../Pages/Register/Register";
import ClassListDashboard from "../Pages/CompanyPages/ListStudents/StudentsList";
import MyProjects from "../Pages/Student/MyProjects/MyProjects";
import SobreNos from "../Pages/AboutUs/About";
import Contato from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Home/Projects/Projects";


export const RoutesMain = () => {
  return (
    <Routes>
      {/* Rotas comuns para ambos os tipos de usuário */}
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/projetos" element={<Projects />} />
     
      {/* Rota de proteção para páginas restritas */}
      <Route element={<ProtectRoute />}>
        {/* Rotas exclusivas para empresa */}
        <Route path="/company/dashboard" element={<CompanyDashboard />} />
        <Route path="/company/dashboard/alunos" element={<ClassListDashboard />} />

        {/* Rotas exclusivas para aluno */}
        <Route path="/student/dashboard/meus-projetos" element={<MyProjects />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
       
      </Route>
    </Routes>
  );
};
