import Image from 'next/image';
import styled from 'styled-components';
import WhiteTextLogo from '../public/assets/logos/white-text-logo.svg';
import { useContext, useEffect, useRef } from 'react';
import { Ctx } from '../lib/ctxProvider';
export default function HomepageHero() {
  const heroRef = useRef();
  const { setStickyNavCoords } = useContext(Ctx);
  useEffect(() => {
    const rectHeight = heroRef.current.getBoundingClientRect().height;
    setStickyNavCoords(rectHeight);
  }, []);
  return (
    <StyledHero ref={heroRef}>
      <video
        autoPlay
        muted
        loop
        src={require('../public/assets/HERO-NO-SWEARING.mp4')}
        type="video/mp4"
      />
      <div className="overlay">
        <div className="overlay-container">
          <ImageContainer>
            <Image width="1000" height="150" src={WhiteTextLogo} priority />
          </ImageContainer>
          <p>
            Small agency care, with <span>big agency capabilities</span>. Always
            delivering and going the <span>extra mile</span> to impress, impact
            and stand out.
          </p>
        </div>
      </div>
    </StyledHero>
  );
}

const StyledHero = styled.div`
  height: 100vh;
  position: relative;

  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .overlay {
    background: rgba(0, 0, 0, 0.5);
    background-image: radial-gradient(black 33%, transparent 33%);
    background-size: 3px 3px;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    .overlay-container {
      position: absolute;
      top: 50%;
      left: 5rem;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      color: white;
      h2 {
        font-size: 7rem;
        font-weight: 800;
        line-height: initial;
        padding: 0;
        margin-left: -0.8rem;
      }
      p {
        font-weight: 500;
        font-size: 1.5rem;
        max-width: 75%;
        line-height: 2;
      }
      span {
        color: var(--pink);
      }
      a {
        text-decoration: none;
      }
    }
  }
`;

const ImageContainer = styled.div`
  width: 60rem;
`;
