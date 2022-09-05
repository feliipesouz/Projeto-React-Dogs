import React from "react";
import Input from "../../Forms/Input";
import Button from "../../Forms/Button";
import useForm from "../../../Hooks/useForm";
import useFetch from "../../../Hooks/useFetch";
import { PASSWORD_RESET } from "../../../api";
import Error from "../../Helper/Error.js";

const LoginPasswordLost = () => {
  const login = useForm();
  const { request, error, data, loading } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = PASSWORD_RESET({
      login: login.value,
      url: window.location.href.replace("perdeu", "resetar"),
    });
    const { json } = await request(url, options);
  }

  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            label={"Email / Usuário"}
            type={"email"}
            name={"login"}
            {...login}
          />
          {loading ? (
            <Button disable>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
