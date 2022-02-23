import styled from 'styled-components';
import { SectionContainer, SectionHeading } from '../styles/GlobalStyles';
import ServicesSquareCards from './ServicesSquareCards';
export default function ServicesSectionHome() {
  return (
    <ServicesHomeContainer>
      <SectionHeading align="center">What we offer</SectionHeading>
      <ServicesSquareCards />
    </ServicesHomeContainer>
  );
}

const ServicesHomeContainer = styled(SectionContainer)`
  padding: var(--service-home-container-padding);
`;
