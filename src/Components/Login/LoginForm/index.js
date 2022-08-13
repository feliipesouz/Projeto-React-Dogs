import React from "react";
import { Link } from "react-router-dom";
import Input from "../../Forms/Input";
import Button from "../../Forms/Button";
import { Section } from "../LoginCreate/styles";
import useForm from "../../../Hooks/useForm";

const LoginForm = () => {
  const username = useForm("email"); //Caso eu passe como (false) ele não irá validar esse campo!
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault(); //Aqui previnimos o evento para ele não recarregar a página;

    if (username.validate() && password.validate()) {
      const response = await fetch(
        "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(),
        }
      );
      console.log(response);
      const json = await response.json();
      console.log(json);
      return json;
    }
  }

  return (
    <Section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </Section>
  );
};

export default LoginForm;
