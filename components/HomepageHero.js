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
      <HeroVideo
        autoPlay
        muted
        loop
        webkit-playsinline="true"
        playsInline={true}
        src={require('../public/assets/HERO.mp4')}
        type="video/mp4"
      />
      <DottedOverlay>
        <MainHeroContent>
          <ImageContainer>
            <Image layout="responsive" src={WhiteTextLogo} priority />
          </ImageContainer>
          <p>
            Small agency care, with <span>big agency capabilities</span>.
            <br />
            Always delivering and going the <span>extra mile</span> to impress,
            impact and stand out.
          </p>
        </MainHeroContent>
      </DottedOverlay>
    </StyledHero>
  );
}

const StyledHero = styled.div`
  min-height: 100vh;
  height: 100vh;
  position: relative;
  background: black;
`;

const HeroVideo = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  pointer-events: none;
`;

const DottedOverlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  background-image: radial-gradient(black 33%, transparent 33%);
  background-size: 3px 3px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const MainHeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: var(--padding);
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
    font-weight: 300;
    font-size: var(--hero-text);
    max-width: 800px;
    line-height: 1.8;
  }
  span {
    color: var(--pink);
  }
`;

const ImageContainer = styled.div`
  display: block;
  width: calc(100vw - 2rem);
  margin-bottom: 2rem;
  max-width: 1000px;
  @media (max-width: 485px) {
    margin-bottom: 1rem;
  }
`;
