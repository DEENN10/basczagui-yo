import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0f172a;
  color: white;
  padding: 1rem 2rem;
`;

const Logo = styled.img`
  height: 50px;
`;

const Menu = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
`;

const MenuItem = styled.li`
  cursor: pointer;
  font-weight: bold;
`;

function Header() {
  return (
    <Nav>
      <Logo src="/assets/Letras_logo2.jpg" alt="BASCZAGUI Logo" />
      <Menu>
        <MenuItem>Inicio</MenuItem>
        <MenuItem>Sobre Nosotros</MenuItem>
        <MenuItem>Servicios</MenuItem>
        <MenuItem>Contacto</MenuItem>
      </Menu>
    </Nav>
  );
}

export default Header;
