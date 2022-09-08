import React from "react";

const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title + " | Dogs";
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", props.description || ""); //Significa que se a pessoa não passar nenhuma descrição eu passo uma string vazia
  }, [props]);
  return <></>;
};

export default Head;
