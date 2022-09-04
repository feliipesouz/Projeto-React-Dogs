import React from "react";
import { Route, Routes } from "react-router-dom";
import UserHeader from "./UserHeader";
import Feed from "../Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats/UserStats";
import { UserContext } from "../../UserContext";
import NotFound from "../NotFound";

const User = () => {
  const { data } = React.useContext(UserContext);
  return (
    <section>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </section>
  );
};

export default User;
