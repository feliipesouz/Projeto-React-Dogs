import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import { Container, Login, Logo, Nav } from "./styles";

const Header = () => {
  return (
    <Container>
      <Nav className="container">
        <Logo>
          <Link to="/" aria-label="Dogs - Home">
            <Dogs />
          </Link>
        </Logo>
        <Login>
          <Link to="/login">Login / Criar</Link>
        </Login>
      </Nav>
    </Container>
  );
};

export default Header;
