import React from "react";
import FeedPhotosItem from "../FeedPhotosItem";
import useFetch from "../../../Hooks/useFetch";
import { PHOTOS_GET } from "../../../api";
import Error from "../../Helper/Error";
import Loading from "../../Helper/Loading";
import { Feed } from "./styles";

const FeedPhotos = ({setModalPhoto}) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 }); //Quando a gente puxa o user: 0, significa que ele vai puxar de qualquer usuário
      const { response, json } = await request(url, options);
    }
    fetchPhotos();
  }, [request]);
  console.log(data);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <Feed>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </Feed>
    );
  else return null;
};

export default FeedPhotos;
