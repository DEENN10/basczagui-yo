import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #111827;
  color: #d1d5db;
  padding: 1rem 2rem;
  text-align: center;
  font-size: 0.9rem;
`;

function Footer() {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} BASCZAGUI. Todos los derechos reservados.
    </FooterContainer>
  );
}

export default Footer;
