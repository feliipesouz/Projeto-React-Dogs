import React from "react";
import { ReactComponent as Enviar } from "../../../Assets/enviar.svg";
import { COMMENT_POST } from "../../../api";
import useFetch from "../../../Hooks/useFetch";
import { Button, Form, Textarea } from "./styles";

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = React.useState(null);
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    
    if (response.ok) {
      setComments((comments) => [...comments, json]);
      //Aqui eu faço como função pra acessar todos os comentarios que já existem, desestruturo e implemento o novo comentario.
    }
  }

  return (
    <Form single={single} onSubmit={handleSubmit}>
      <Textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <Button>
        <Enviar />
      </Button>
    </Form>
  );
};

export default PhotoCommentsForm;
