import React from "react";
import { UserContext } from "../../../UserContext";
import PhotoCommentsForm from "../PhotoCommentsForm";
import { Comments, Li } from "./styles";

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scollTop = commentsSection.current.scrollHeight;
    console.log(commentsSection.current.scollTop);
  }, [comments]);

  return (
    <>
      <Comments ref={commentsSection}>
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
