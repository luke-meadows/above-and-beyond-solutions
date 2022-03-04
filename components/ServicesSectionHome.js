import styled from 'styled-components';
import { SectionContainer, SectionHeading2 } from '../styles/GlobalStyles';
import ServicesSquareCards from './ServicesSquareCards';
export default function ServicesSectionHome() {
  return (
    <ServicesHomeContainer>
      <SectionHeading2 align="center">What we offer</SectionHeading2>
      <ServicesSquareCards />
    </ServicesHomeContainer>
  );
}

const ServicesHomeContainer = styled(SectionContainer)`
  padding: var(--service-home-container-padding);
`;
