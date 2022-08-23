import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import { UserContext } from "../../UserContext";
import { Container, Login, Logo, Nav } from "./styles";

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <Container>
      <Nav className="container">
        <Logo>
          <Link to="/" aria-label="Dogs - Home">
            <Dogs />
          </Link>
        </Logo>
        {data ? (
          <Login>
            <Link to="/conta">
              {data.nome}
            </Link>
          </Login>
        ) : (
          <Login>
            <Link to="/login">Login / Criar</Link>
          </Login>
        )}
      </Nav>
    </Container>
  );
};

export default Header;
