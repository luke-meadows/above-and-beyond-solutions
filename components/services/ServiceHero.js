import styled from 'styled-components';
import ServiceHeroImage from './ServiceHeroImage';
import Logo from '../../public/assets/logos/thumbnail-white-logo.svg';
import Image from 'next/image';

export default function ServiceHero({ img, title }) {
  return (
    <StyledServiceHero>
      <ServiceHeroImage img={img} position="top" brightness="0.3" />
      <LogoContainer>
        <Image src={Logo} layout="responsive" />
      </LogoContainer>
      <h1>{title}</h1>
    </StyledServiceHero>
  );
}

const StyledServiceHero = styled.div`
  height: 100vh;
  position: relative;
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: var(--service-hero-header);
    font-weight: 500;
    color: var(--pink);
    color: var(--white);
    line-height: initial;
    text-align: center;
    z-index: 1;
    font-size: 4rem;
    margin-top: 1rem;
    span {
      color: var(--pink);
    }
  }

  @media only screen and (max-width: 800px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

export const LogoContainer = styled.div`
  width: 8rem;
  position: relative;
  z-index: 2;
  margin: 0 auto;
  opacity: 0.8;
`;
