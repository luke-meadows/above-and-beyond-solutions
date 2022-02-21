import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Ctx } from '../lib/ctxProvider';
import Partners from '../components/Partners';
import { SectionBlurb, SectionHeading } from '../styles/GlobalStyles';

export default function PartnersPage() {
  const { setShouldStick, setStickyNavCoords } = useContext(Ctx);
  useEffect(() => {
    setShouldStick(true);
    setStickyNavCoords(0);

    return () => {
      setShouldStick(false);
    };
  });
  return (
    <StyledAbout>
      <SectionHeading>Our Partners</SectionHeading>
      <AboutPartners>
        <SectionBlurb>
          Brands who have experienced the creative impact of working with Above
          and Beyond:
        </SectionBlurb>
      </AboutPartners>
      <Partners noTitle={true} />
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  padding: 5rem 0 3rem 0;
  background: white;
  @media only screen and (max-width: 415px) {
    padding: 4rem 0 1rem 0;
  }
`;

const AboutPartners = styled.div`
  p {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 400;
    padding: 0 var(--padding);
    @media only screen and (max-width: 415px) {
      font-size: 1rem;
    }
  }
  margin-bottom: 1rem;
`;
