import styled from 'styled-components';
import HomepageHero from '../components/HomepageHero';
import Partners from '../components/Partners';
import ServicesSquareCards from '../components/ServicesSquareCards';
import { SectionBlurb, SectionHeading } from '../styles/GlobalStyles';

export default function Home() {
  return (
    <StyledHome>
      <HomepageHero />
      <SectionHeading>Our partners</SectionHeading>
      <SectionBlurb>
        Brands who have experienced the creative impact of working with Above
        and Beyond:
      </SectionBlurb>
      <Partners />
      <SectionHeading>What we offer</SectionHeading>
      <ServicesSquareCards />
    </StyledHome>
  );
}
const StyledHome = styled.div`
  background: var(--white);
`;
