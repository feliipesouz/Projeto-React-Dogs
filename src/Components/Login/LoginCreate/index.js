import React, { useContext, useEffect } from "react";
import Input from "../../Forms/Input";
import Button from "../../Forms/Button";
import useForm from "../../../Hooks/useForm";
import { USER_POST } from "../../../api";
import { UserContext } from "../../../UserContext";
import useFetch from "../../../Hooks/useFetch";
import Error from "../../Helper/Error";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm();
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);

    if (response.ok) userLogin(username.value, password.value);
    console.log(response);
  }

  return (
    <section>
      <h1>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="text" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
