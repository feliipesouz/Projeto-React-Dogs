import React from "react";
import { Link } from "react-router-dom";
import PhotoComments from "../PhotoComments";
import {
  Attributes,
  Author,
  Details,
  Img,
  Li,
  Photo,
  Title,
  Visualizacoes,
} from "./styles";

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  return (
    <Photo>
      <Img src={photo.src} alt={photo.title}></Img>
      <Details>
        <div>
          <Author>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <Visualizacoes>{photo.acessos}</Visualizacoes>
          </Author>
          <Title>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </Title>
          <Attributes>
            <Li>{photo.peso}</Li>
            <Li>{photo.idade} anos</Li>
          </Attributes>
        </div>
      </Details>
      <PhotoComments id={photo.id} comments={comments} />
    </Photo>
  );
};

export default PhotoContent;
