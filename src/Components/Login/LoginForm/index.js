import React from "react";
import { Link } from "react-router-dom";
import Input from "../../Forms/Input";
import Button from "../../Forms/Button";
import useForm from "../../../Hooks/useForm";
import { UserContext } from "../../../UserContext";
import Error from "../../Helper/Error";
import { Cadastro, Form, Perdeu, Subtitle, TemConta } from "./styles";
import { StyledButton } from "../../Forms/Button/styles";
import Head from "../../Helper/Head";

const LoginForm = () => {
  const username = useForm(); //Caso eu passe como (false) ele não irá validar esse campo!
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault(); //Aqui previnimos o evento para ele não recarregar a página;

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      {/*Concertar, não ta pegando*/}
      <Head title="Login" />
      <h1 className="title">Login</h1>
      {/*Concertar, não ta pegando*/}
      <Form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled="true">Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && 'Dados incorretos.'} />
      </Form>
      <Perdeu><Link to="/login/perdeu">Perdeu a senha?</Link></Perdeu>
      <Cadastro>
        <Subtitle>Cadastre-se</Subtitle>
        <TemConta>Ainda não tem conta? Cadastre-se no site.</TemConta>
      </Cadastro>
      <StyledButton>
        <Link to="/login/criar">Cadastro</Link>
      </StyledButton>
    </section>
  );
};

export default LoginForm;
