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

const Menu = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
`;

const MenuItem = styled.li`
  cursor: pointer;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Nav>
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '1px' }}>
        BASCZAGUI, S.A de C.V.
      </p>

      <Menu>
        <MenuItem onClick={() => scrollToSection('inicio')}>Inicio</MenuItem>
        <MenuItem onClick={() => scrollToSection('servicios')}>Servicio</MenuItem>
        <MenuItem onClick={() => scrollToSection('certificaciones')}>Certificaciones</MenuItem>
        <MenuItem onClick={() => scrollToSection('contact')}>Contacto</MenuItem>
      </Menu>
    </Nav>
  );
}

export default Header;
