import styled from 'styled-components';

export const ServicesHeader = styled.div`
  background: var(--white);
  margin-bottom: 4rem;
  p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
`;

export const IconCards = styled.div`
  background: var(--white);
  margin-bottom: 4rem;
  border-radius: 10px;
`;

export const IconCard = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
  padding: 2rem 0;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  i {
    color: var(--pink);
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    margin-left: -6px;
    margin-right: 1.6rem;
  }
  h3 {
    font-size: 1.1rem;
    font-weight: 300;
    margin: 0;
  }
  p {
    font-size: 1rem;
    font-weight: 100;
    @media only screen and (max-width: 415px) {
      margin: 0;
    }
  }

  .icon-title {
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: 100%;

    p {
      margin-bottom: 1rem;
    }
    .icon-title {
      margin-bottom: 1.5rem;
    }
  }
`;

export const ServicesSummary = styled.div`
  position: relative;
  color: white;
  padding: 1rem 0;
  text-align: center;
  z-index: 4;
  h4 {
    color: var(--pink);
    font-weight: 300;
    font-size: 2.1rem;
    padding: 2rem var(--padding) 1rem var(--padding);
    @media only screen and (max-width: 415px) {
      padding: 0rem var(--padding) 1rem var(--padding);
      font-size: 1.5rem;
    }
  }
  h5 {
    font-weight: 400;
    font-size: 1.5rem;
  }
  p {
    max-width: 120ch;
    font-size: var(--section-main-font-size);
    font-weight: 100;
    padding: 0rem var(--padding) 1rem var(--padding);
    margin: 0 auto;
    line-height: 1.5;
    text-align: left;
  }
  @media only screen and (max-width: 415px) {
    p {
      font-size: 1rem;
    }
    h4 {
      margin-top: 1rem;
    }
    .service-home-p {
      margin-top: -1rem;
    }
  }
`;

export const ImageContainer = styled.div`
  background: black;
  display: absolute;
  left: 0;
  top: 0;
  height: fit-content;
  width: 100%;
  z-index: -1;

  img {
    filter: brightness(0.2);
    z-index: -1;
    @media only screen and (max-width: 415px) {
      filter: brightness(0.3);
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
