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
  cnpj?: string;
  email: string;
  password: string;
  type: string;
  cpf?: string;
  image: FileList; // Alterado para FileList
};

const RegisterPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const navigate = useNavigate();
  const [showCnpjField, setShowCnpjField] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  const formatCPF = (value: string) => value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  const formatCNPJ = (value: string) => value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("type", data.type);

      if (data.type === "aluno" && data.cpf) {
        formData.append("cpf", data.cpf);
      } else if (data.type === "empresa" && data.cnpj) {
        formData.append("cnpj", data.cnpj);
      }

      if (data.image.length > 0) {
        formData.append("image", data.image[0]);
      }

      const response = await axios.post(`${apiUrl}/cadastrar`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(response); // Log de resposta

      if (response.status === 201) {
        navigate("/login");
        toast.success("Cadastro realizado com sucesso!");
      } else {
        toast.error("Erro ao fazer cadastro. Por favor, tente novamente mais tarde.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro ao fazer cadastro. Por favor, tente novamente mais tarde.");
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
        <Input type="text" {...register("name", { required: "Nome é obrigatório" })} placeholder="Nome" />
        {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
        
        <Input type="email" {...register("email", { required: "Email é obrigatório" })} placeholder="Email" />
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

        <Input type="password" {...register("password", { required: "Senha é obrigatória" })} placeholder="Senha" />
        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

        {!showCnpjField && (
          <>
            <Input
              type="text"
              {...register("cpf", {
                required: "CPF é obrigatório",
                pattern: { value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/, message: "CPF inválido" },
                validate: (value) => value?.length === 14 || "CPF deve ter 14 caracteres",
              })}
              placeholder="CPF"
              maxLength={14}
              onChange={(e) => {
                e.target.value = formatCPF(e.target.value);
              }}
            />
            {errors.cpf && <ErrorText>{errors.cpf.message}</ErrorText>}
          </>
        )}

        {showCnpjField && (
          <>
            <Input
              type="text"
              {...register("cnpj", {
                required: "CNPJ é obrigatório",
                pattern: { value: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, message: "CNPJ inválido" },
                validate: (value) => value?.length === 18 || "CNPJ deve ter 18 caracteres",
              })}
              placeholder="CNPJ"
              maxLength={18}
              onChange={(e) => {
                e.target.value = formatCNPJ(e.target.value);
              }}
            />
            {errors.cnpj && <ErrorText>{errors.cnpj.message}</ErrorText>}
          </>
        )}

        <Label htmlFor="image">
          {selectedType === "aluno" ? "Comprovante de matrícula" : "Comprovante de CNPJ"}
        </Label>
        <Input type="file" id="image" {...register("image", { required: "Documento é obrigatório" })} accept=".pdf" />
        {errors.image && <ErrorText>{errors.image.message}</ErrorText>}

        <Button type="submit">Cadastrar</Button>
        <ButtonNavigate onClick={() => navigate("/login")}>Ir para o Login</ButtonNavigate>
      </LoginForm>
    </Container>
  );
};

export default RegisterPage;
