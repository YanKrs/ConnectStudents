import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Container,
  LoginForm,
  Title,
  Input,
  Button,
  ButtonNavigate,
  ErrorText,
} from "./Styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


type FormData = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try { console.log(apiUrl)
      const response = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();
      
      if (response.ok) {
        const token = json.token;
        localStorage.setItem("userId", json.user.id);
        localStorage.setItem("@Connect:token", token);
        localStorage.setItem("userType", json.user.type);
        localStorage.setItem("UserName", json.user.name);
     
        if (json.user.type === "empresa") {
          navigate("/company/dashboard");
        } else if (json.user.type === "aluno") {
          navigate("/student/dashboard");
        }
        toast.success("Login realizado com sucesso!");
      } else {
        setError("Credenciais inválidas");
        toast.error("Credenciais inválidas");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      toast.error(
        "Erro ao fazer login. Por favor, tente novamente mais tarde."
      );
    }
  };
  return (
    <Container>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <Title><b>Login</b></Title>
        <Input type="email" {...register("email")} placeholder="Email" />
        <Input type="password" {...register("password")} placeholder="Senha" />
        <Button type="submit"><b>Entrar</b></Button>
        <ButtonNavigate onClick={() => navigate("/register")}>
          <b>Criar conta</b>
        </ButtonNavigate>
        {error && <ErrorText>{error}</ErrorText>}
      </LoginForm>
    </Container>
  );
};

export default LoginPage;
