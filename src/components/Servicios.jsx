import React from 'react';
import styled from 'styled-components';

const ServiciosSection = styled.section`
  background-image: url('/assets/servicios_fondo.png');
  background-size: cover;
  background-position: center;
  padding: 4rem 2rem;
  color: white;
  position: relative;s
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.6);
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1.5rem;
  border-radius: 1rem;
  max-width: 300px;
  text-align: center;
  box-shadow: 0 0 10px #000;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.25rem;
`;

const Description = styled.p`
  font-size: 0.95rem;
`;

function Servicios() {
  return (
    <ServiciosSection id ="servicios">
      <Title>Servicios</Title>
      <CardsContainer>
        <Card>
          <ServiceTitle>Mantenimiento</ServiceTitle>
          <Description>Revisión, ajuste y calibración de básculas para asegurar precisión continua.</Description>
        </Card>
        <Card>
          <ServiceTitle>Verificación</ServiceTitle>
          <Description>Procedimiento oficial bajo la NOM-005-SCFI-2011 para validar el correcto funcionamiento.</Description>
        </Card>
        <Card>
          <ServiceTitle>Inspección</ServiceTitle>
          <Description>Evaluación visual y técnica de los instrumentos para asegurar cumplimiento normativo.</Description>
        </Card>
      </CardsContainer>
    </ServiciosSection>
  );
}

export default Servicios;
