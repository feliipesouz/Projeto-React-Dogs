import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../UserContext";
import PhotoComments from "../PhotoComments";
import PhotoDelete from '../PhotoDelete';
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
import Image from '../../Helper/Image';

const PhotoContent = ({ data, single }) => {
  const user = React.useContext(UserContext);
  const { photo, comments } = data;
  return (
    <Photo>
      <Image src={photo.src} alt={photo.title} />
      {/* <Img src={photo.src} alt={photo.title}></Img> */}
      <Details>
        <div>
          <Author>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id}/>
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

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
