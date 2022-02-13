import Image from 'next/image';
import styled from 'styled-components';
import WhiteTextLogo from '../public/assets/logos/white-text-logo.svg';

export default function HomepageHero() {
  return (
    <StyledHero>
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
            <Image layout="responsive" src={WhiteTextLogo} priority />
          </ImageContainer>
          <p>
            We’re a <span>Digital Marketing Agency in Coventry</span>, made up
            of a group of passionate individuals who get excited about helping
            small to medium sized businesses create impact with their customers.
          </p>
        </div>
      </div>
    </StyledHero>
  );
}

const StyledHero = styled.div`
  height: 100vh;
  position: relative;
  /* margin-top: 10rem; */
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
  margin-bottom: 2rem;
  img {
    object-fit: cover;
    margin: 0;
  }
`;
