import Image from 'next/image';
import styled from 'styled-components';
import WhiteTextLogo from '../public/assets/logos/white-text-logo.svg';
import WhiteThumbnail from '../public/assets/logos/thumbnail-white-logo.svg';
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
          <ThumbnailContainer>
            <Image
              layout="responsive"
              src={WhiteThumbnail}
              priority
              alt="hero"
            />
          </ThumbnailContainer>
          <LogoContainer>
            <Image
              layout="responsive"
              src={WhiteTextLogo}
              priority
              alt="hero"
            />
          </LogoContainer>
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
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
`;

const ThumbnailContainer = styled.div`
  position: relative;
  width: 20rem;
  opacity: 0.8;
  @media only screen and (max-width: 700px) {
    width: 10rem;
  }
`;
const LogoContainer = styled.div`
  position: relative;
  width: 40rem;
  @media only screen and (max-width: 700px) {
    width: 20rem;
  }
`;
