import React from "react";
import { PHOTO_DELETE } from "../../../api";
import useFetch from "../../../Hooks/useFetch";
import { ButtonDelete } from "./styles";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <ButtonDelete disabled>Delete</ButtonDelete>
      ) : (
        <ButtonDelete onClick={handleClick}>Delete</ButtonDelete>
      )}
    </>
  );
};

export default PhotoDelete;
