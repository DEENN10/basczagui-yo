import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  background-color: #f9fafb;
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.1rem;
`;

function About() {
  return (
    <AboutSection id="about">
      <Title>¿Quiénes somos?</Title>
      <Text>
        En BASCZAGUI somos una empresa dedicada a la inspección, verificación y mantenimiento de instrumentos de medición conforme a la norma NOM-005-SCFI-2011, ofreciendo profesionalismo y transparencia.
      </Text>
    </AboutSection>
  );
}

export default About;
