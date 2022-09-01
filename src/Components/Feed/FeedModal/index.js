import React from "react";
import { PHOTO_GET } from "../../../api";
import useFetch from "../../../Hooks/useFetch";
import Loading from "../../Helper/Loading";
import Error from "../../Helper/Error";
import PhotoContent from '../../Photo/PhotoContent';

//Aqui fazemos o request novamente pois agora queremos a foto e os comentários.
const FeedModal = ({ photo, setModalPhoto }) => {//Photo é uma propriedade, e por isso deve ser passada como dependencia do useEffect();
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);//O photo.id é o único motivo de eu receber photo como propriedade na minha função
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
   if(event.target === event.currentTarget) setModalPhoto(null)
  }

  return (
    <div onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
      {/* não passo photo.src porque eu quero pegar o resultado da minha request, são fotos diferentes, por isso eu passo o data */}
    </div>
  );
};

export default FeedModal;
