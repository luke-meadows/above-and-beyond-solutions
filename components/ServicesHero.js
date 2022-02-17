import styled from 'styled-components';
import { useContext, useEffect, useRef } from 'react';
import { Ctx } from '../lib/ctxProvider';
export default function ServicesHero({ children, size }) {
  const heroRef = useRef();
  const { setStickyNavCoords } = useContext(Ctx);
  useEffect(() => {
    const rectHeight = heroRef.current.getBoundingClientRect().height;
    setStickyNavCoords(rectHeight);
  });
  return <Styles ref={heroRef}>{children}</Styles>;
}

export const Styles = styled.div`
  height: 80vh;
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 var(--padding);

  h2 {
    font-size: var(--service-hero-header);
    font-weight: 500;
    color: white;
    line-height: initial;
    span {
      color: var(--pink);
    }
  }
  p {
    color: white;
    margin: 1rem 0;
    font-weight: 300;
    font-size: var(--service-hero-text);
    max-width: 1300px;
    line-height: 2;
    @media only screen and (max-width: 415px) {
      max-width: 100%;
    }
  }
  button {
    margin-top: 1rem;
    width: 10rem;
    border: none;
    i {
      margin-right: 0.2rem;
    }
  }
`;
