import styled from 'styled-components';
import { useContext, useEffect, useRef } from 'react';
import { Ctx } from '../lib/ctxProvider';
export default function ServicesHero({ children }) {
  const heroRef = useRef();
  const { setStickyNavCoords } = useContext(Ctx);
  useEffect(() => {
    const rectHeight = heroRef.current.getBoundingClientRect().height;
    setStickyNavCoords(rectHeight);
  }, []);
  return <Styles ref={heroRef}>{children}</Styles>;
}

export const Styles = styled.div`
  height: 80vh;
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;

  h2 {
    font-size: 3.5rem;
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
    font-size: 1.5rem;
    max-width: 80%;
    line-height: 2;
  }
  .small {
    line-height: 1.8;
    font-size: 1.4rem;
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
