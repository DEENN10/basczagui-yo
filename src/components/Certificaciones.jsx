import React from 'react';
import styled from 'styled-components';

const CertSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f3f4f6;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-left: 4px solid #2563eb;
  padding-left: 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Event = styled.div`
  position: relative;
`;

const Date = styled.div`
  font-weight: bold;
  color: #2563eb;
`;

const Description = styled.p`
  margin: 0.5rem 0;
`;

function Certificaciones() {
  return (
    <CertSection id="certificaciones">
      <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Certificaciones</h2>
      <Timeline>
        <Event>
          <Date>2020</Date>
          <Description>Obtuvimos nuestra licencia como unidad verificadora por PROFECO.</Description>
        </Event>
        <Event>
          <Date>2021</Date>
          <Description>Certificación NOM-005-SCFI para básculas comerciales.</Description>
        </Event>
        <Event>
          <Date>2023</Date>
          <Description>Ampliación de alcance para inspección y mantenimiento preventivo.</Description>
        </Event>
      </Timeline>
    </CertSection>
  );
}

export default Certificaciones;

