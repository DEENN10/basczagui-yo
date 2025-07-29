import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animación: movimiento horizontal lento del fondo degradado
const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

const AboutSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(90deg, #0f172a, #1e293b, #475569, #94a3b8);
  background-size: 150% 150%;
  animation: ${gradientShift} 20s ease-in-out infinite;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #f8fafc;
`;

const Text = styled.p`
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.1rem;
  color: #e2e8f0;
`;

function About() {
  return (
    <AboutSection id="about">
      <Title>¿Quiénes somos?</Title>
      <Text>
        En BASCZAGUI somos una empresa dedicada a la inspección y verificación de instrumentos de medición conforme a la norma NOM-005-SCFI-2011 y con número de acreditación correspondiente, ofreciendo profesionalismo y transparencia para cada uno de nuestros clientes.
      </Text>
    </AboutSection>
  );
}

export default About;
