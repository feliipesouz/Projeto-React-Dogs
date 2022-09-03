import React from "react";
import { Img, Skeleton, Wrapper } from "./styles";

const Image = ({ alt, ...props }) => {
    const [skeleton, setSkeleton] = React.useState(true);

    function handleLoad({target}){
        setSkeleton(false);
        target.style.opacity = 1;
    }
  return (
    <Wrapper>
      {skeleton && <Skeleton></Skeleton>}
      <Img onLoad={handleLoad} alt={alt} {...props} />
    </Wrapper>
  );
};

export default Image;
