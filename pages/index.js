import styled from 'styled-components';
import ImageBanner from '../components/homepage/ImageBanner';
import PartnersCarousel from '../components/homepage/PartnersCarousel';
import HomepageHero from '../components/HomepageHero';

export default function Home() {
  return (
    <StyledHome>
      <h1>Above and Beyond Solutions</h1>
      <HomepageHero />
      <ImageBanner />
      <PartnersCarousel />
    </StyledHome>
  );
}
const StyledHome = styled.div`
  background: var(--white);
  h1 {
    position: absolute;
    opacity: 0;
  }
`;
