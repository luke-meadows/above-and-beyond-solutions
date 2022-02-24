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
      <SectionHeading align="center">Our partners</SectionHeading>
      <AboutPartners>
        <SectionBlurb align="center">
          Brands we&apos;ve gone Above and Beyond for:
        </SectionBlurb>
      </AboutPartners>
      <Partners />
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  padding: 7rem var(--padding) 4rem var(--padding);
  background: white;
  @media only screen and (max-width: 1100px) {
    padding: 6rem var(--padding) 2rem var(--padding);
  }
`;

const AboutPartners = styled.div`
  margin-bottom: 1rem;
  p {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 400;
    padding: 0 var(--padding);
    @media only screen and (max-width: 415px) {
      font-size: 1rem;
    }
  }
`;
