import React from "react";
import { useLocation } from "react-router-dom";
import UserHeaderNav from "../UserHeaderNav";
import { Header } from "./styles";

const UserHeader = () => {
  const [title, setTitle] = React.useState(null);
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    
    switch (pathname) {
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      case "/conta/postar":
        setTitle("Poste Sua Foto");
        break;
      default:
        setTitle("Minha Conta");
    }
  }, [location]);

  return (
    <Header>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </Header>
  );
};

export default UserHeader;
