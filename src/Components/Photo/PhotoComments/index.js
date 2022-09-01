import React from "react";
import { UserContext } from "../../../UserContext";
import PhotoCommentsForm from "../PhotoCommentsForm";
import { Comments, Li } from "./styles";

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const { login } = React.useContext(UserContext);

  return (
    <>
      <Comments>
        {comments.map((comment) => (
          <Li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </Li>
        ))}
      </Comments>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
