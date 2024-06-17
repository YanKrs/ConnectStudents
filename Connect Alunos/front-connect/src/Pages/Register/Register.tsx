import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Container,
  LoginForm,
  Title,
  Input,
  Button,
  ButtonNavigate,
  ErrorText,
  Select,
  Option,
  Label,
} from "./Styles";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

type FormData = {
  name: string;
  cnpj: string;
  email: string;
  password: string;
  type: string;
  cpf: string;
  image: File;
};

const RegisterPage: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showCnpjField, setShowCnpjField] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const formatCPF = (value: string) => {
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };

  // Função para formatar CNPJ
  const formatCNPJ = (value: string) => {
    return value.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      "$1.$2.$3/$4-$5"
    );
  };
  const onSubmit = async (data: any) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("type", data.type);
      formData.append("cpf", data.cpf);
      formData.append("cnpj", data.cnpj);

      const response = await axios.post(`${apiUrl}/cadastrar`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        navigate("/login");
        toast.success("Cadastro realizado com sucesso!");
      } else {
        toast.error(
          "Erro ao fazer cadastro. Por favor, tente novamente mais tarde."
        );
      }
    } catch (error) {
      
      toast.error(
        "Erro ao fazer cadastro. Por favor, tente novamente mais tarde."
      );
    }
  };
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = e.target.value;
    setSelectedType(selectedType);
    setShowCnpjField(selectedType === "empresa");
  };
  return (
    <Container>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <Title>Cadastro</Title>
        <Select {...register("type")} onChange={handleTypeChange}>
          <Option style={{ fontFamily: 'Arial, sans-serif' }} value="">Escolha o tipo de cadastro</Option>
          <Option style={{ fontFamily: 'Arial, sans-serif' }} value="aluno">Aluno</Option>
          <Option style={{ fontFamily: 'Arial, sans-serif' }} value="empresa">Empresa</Option>
        </Select>
        <Input type="text" {...register("name")} placeholder="Nome" />
        <Input type="email" {...register("email")} placeholder="Email" />
        <Input type="password" {...register("password")} placeholder="Senha" />
        {!showCnpjField && (
          <Input
            type="text"
            {...register("cpf", {
              required: true,
              pattern: {
                value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                message: "CPF inválido",
              },
              validate: (value) => value.length === 14, // Validação de comprimento do CPF
            })}
            placeholder="CPF"
            maxLength={14}
            onChange={(e) => {
              // Formatando o CPF enquanto digita
              e.target.value = formatCPF(e.target.value);
            }}
          />
        )}
        {showCnpjField && (
          <Input
            type="text"
            {...register("cnpj", {
              required: true,
              pattern: {
                value: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
                message: "CNPJ inválido",
              },
              validate: (value) => value.length === 18, // Validação de comprimento do CNPJ
            })}
            placeholder="CNPJ"
            maxLength={18}
            onChange={(e) => {
              // Formatando o CNPJ enquanto digita
              e.target.value = formatCNPJ(e.target.value);
            }}
          />
        )}

        <Label htmlFor="image">
          {selectedType === "aluno"
            ? "Comprovante de matrícula"
            : "Comprovante de CNPJ"}
        </Label>

        <Input type="file" id="image" {...register("image")} accept=".pdf" />

        <Button type="submit">Cadastrar</Button>
        <ButtonNavigate onClick={() => navigate("/login")}>
          Ir para o Login
        </ButtonNavigate>
        {error && <ErrorText>{error}</ErrorText>}
      </LoginForm>
    </Container>
  );
};

export default RegisterPage;
