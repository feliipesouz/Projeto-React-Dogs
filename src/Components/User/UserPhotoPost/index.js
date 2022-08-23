import React from "react";
import useFetch from "../../../Hooks/useFetch";
import useForm from "../../../Hooks/useForm";
import Input from "../../Forms/Input";
import Button from "../../Forms/Button";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = React.useState({});

  const { dat, error, loading, request } = useFetch();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);
  }

  function handleImgChange({ target }) {
    setImg({
      raw: target.files[0],
    });
  }
  return (
    <section>
      <form onChange={handleSubmit()}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="text" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input type="file" name="img" id="img" onChange={handleImgChange} />
        <Button>Enviar</Button>
      </form>
      <div></div>
    </section>
  );
};

export default UserPhotoPost;
