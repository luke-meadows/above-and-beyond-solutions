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
  color: black;
  /* background: var(--white); */
  h2 {
    line-height: 1;
    font-weight: 500;
    padding: 2rem 5rem 3rem 5rem;
    text-align: center;
    font-size: 2.1rem;
    color: var(--pink);
  }
`;
