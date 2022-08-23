import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../../UserContext";

import { ReactComponent as MinhasFotos } from "../../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../../Assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../../Assets/sair.svg";
import { A, MobileButton, Nav } from "./styles";
import useMedia from "../../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const location = useLocation();

  return (
    <>
      {mobile && (
        <MobileButton
          isActive={mobileMenu}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></MobileButton>
      )}
      <Nav>
        <A isActive={location.pathname === "/conta"}>
          <NavLink to="/conta" end>
            <MinhasFotos />
            {mobile && "Minhas Fotos"}
          </NavLink>
        </A>

        <A isActive={location.pathname === "/conta/estatisticas"}>
          <NavLink to="/conta/estatisticas">
            <Estatisticas />
            {mobile && "Estatísticas"}
          </NavLink>
        </A>
        <A isActive={location.pathname === "/conta/postar"}>
          <NavLink to="/conta/postar">
            <AdicionarFoto />
            {mobile && "Adicionar Foto"}
          </NavLink>
        </A>
        <A>
          <button onClick={userLogout}>
            <Sair />
            {mobile && "Sair"}
            Sair
          </button>
        </A>
      </Nav>
    </>
  );
};

export default UserHeaderNav;
