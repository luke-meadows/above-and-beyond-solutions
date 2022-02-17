import styled from 'styled-components';
import ServicesSquareCards from './ServicesSquareCards';
export default function HomeServicesSection() {
  return (
    <StyledServicesSection>
      <h2>What We Offer</h2>
      <ServicesSquareCards />
    </StyledServicesSection>
  );
}

const StyledServicesSection = styled.div`
  margin-top: -2rem;
  @media only screen and (max-width: 415px) {
    margin-top: -1rem;
    margin-bottom: -4rem;
  }
  h2 {
    line-height: 1;
    font-weight: 500;
    padding: 2rem var(--padding) 4rem var(--padding);
    text-align: center;
    font-size: var(--section-heading-text);
    color: var(--pink);
    @media only screen and (max-width: 415px) {
      padding: var(--section-heading-padding);
    }
  }
`;
