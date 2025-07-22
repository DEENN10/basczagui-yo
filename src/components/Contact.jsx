import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  background-color: #1f2937;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Info = styled.p`
  margin: 0.5rem 0;
`;

function Contact() {
  return (
    <ContactSection id="contact">
      <Title>Contacto</Title>
      <Info>📍 Dirección: Av. Ejemplo #123, Ciudad, Estado</Info>
      <Info>📞 Teléfono: (55) 1234 5678</Info>
      <Info>✉️ Correo: contacto@basczagui.com</Info>
    </ContactSection>
  );
}

export default Contact;
