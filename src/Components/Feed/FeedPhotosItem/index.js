import React from "react";
import { Img, Photo, Span } from "./styles";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo)
  }

  return (
    <Photo onClick={handleClick}>
      <Img src={photo.src} title={photo.title} alt={photo.title} />
      <Span>{photo.acessos}</Span>
    </Photo>
  );
};

export default FeedPhotosItem;
