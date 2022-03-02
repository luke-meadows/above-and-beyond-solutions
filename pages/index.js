import styled from 'styled-components';
import HomepageHero from '../components/HomepageHero';
import PartnersSectionHome from '../components/PartnersSectionHome';
import ServicesSectionHome from '../components/ServicesSectionHome';

export default function Home() {
  return (
    <StyledHome>
      <HomepageHero />
      <PartnersSectionHome />
      <ServicesSectionHome />
    </StyledHome>
  );
}
const StyledHome = styled.div`
  background: var(--white);
`;
