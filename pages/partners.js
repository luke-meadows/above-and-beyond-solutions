import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Ctx } from '../lib/ctxProvider';
import Partners from '../components/Partners';

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
      <h2>Our Partners</h2>
      <AboutPartners>
        <p>
          Brands who have experienced the creative impact of working with Above
          and Beyond:
        </p>
      </AboutPartners>
      <Partners noTitle={true} />
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  padding: 6rem 0 3rem 0;
  background: white;
  h2 {
    line-height: 1;
    font-weight: 500;
    padding: 4rem var(--padding);
    text-align: center;
    font-size: var(--section-heading-text);
    color: var(--pink);
    @media only screen and (max-width: 415px) {
      padding: 1rem var(--padding);
    }
  }
`;

const AboutPartners = styled.div`
  p {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 400;
    padding: 0 var(--padding);
    @media only screen and (max-width: 415px) {
      font-size: 1.2rem;
    }
  }
  margin-bottom: 2rem;
`;
