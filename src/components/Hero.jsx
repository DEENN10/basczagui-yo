import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  background-color: #e5e7eb;
  padding: 4rem 2rem;
  text-align: center;
`;

const ProfecoImage = styled.img`
  height: 80px;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

function Hero() {
  return (
    <HeroSection>
      <ProfecoImage src="/assets/profeco_logo.jpg" alt="Profeco Logo" />
      <Title>Certificación profesional y ética</Title>
      <Subtitle>
        En BASCZAGUI nos especializamos en la inspección, verificación y mantenimiento de instrumentos de medición bajo la NOM-005-SCFI-2011, brindando confianza y transparencia.
      </Subtitle>
    </HeroSection>
  );
}

export default Hero;
