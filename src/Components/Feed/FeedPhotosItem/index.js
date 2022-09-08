import React from "react";
import Image from "../../Helper/Image";
import { Img, Photo, Visualizacao } from "./styles";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo)
  }

  return (
    <Photo onClick={handleClick}>
      <Img><Image src={photo.src} alt={photo.title} /></Img>
      {/* <Img src={photo.src} alt={photo.title} /> */}
      <Visualizacao>{photo.acessos}</Visualizacao>
    </Photo>
  );
};

export default FeedPhotosItem;
