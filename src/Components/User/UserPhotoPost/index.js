import React from "react";
import useFetch from "../../../Hooks/useFetch";
import useForm from "../../../Hooks/useForm";
import Input from "../../Forms/Input";
import Button from "../../Forms/Button";
import Error from "../../Helper/Error";
import { PHOTO_POST } from "../../../api";
import { File, PhotoPost, Preview } from "./styles";
import { useNavigate } from "react-router-dom";
import Head from "../../Helper/Head";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = React.useState({});
  const navigate = useNavigate();

  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    if (data) navigate("/conta"); //Verifico se tem data pois as vezes ele altera pra null.
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    //Não verifico se tem token porque para o osuário chegar aqui ele precisa estar logado.
    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  return (
    <PhotoPost>
      <Head title="Poste sua foto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <File type="file" name="img" id="img" onChange={handleImgChange} />
        {loading ? (
          <Button disable>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>{img.preview && <Preview preview={img.preview} />}</div>
    </PhotoPost>
  );
};

export default UserPhotoPost;
