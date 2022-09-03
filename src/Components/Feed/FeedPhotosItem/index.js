import React from "react";
import Image from "../../Helper/Image";
import { Img, Photo, Span } from "./styles";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo)
  }

  return (
    <Photo onClick={handleClick}>
      <Img><Image src={photo.src} alt={photo.title} /></Img>
      {/* <Img src={photo.src} alt={photo.title} /> */}
      <Span>{photo.acessos}</Span>
    </Photo>
  );
};

export default FeedPhotosItem;
