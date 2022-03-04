import styled from 'styled-components';

export const ServicesPage = styled.div`
  main {
    @media only screen and (max-width: 415px) {
      padding-top: 0;
    }
  }
`;

export const ServicesHeader = styled.div`
  background: white;
`;

export const IconCards = styled.div`
  background: white;
  display: grid;
  grid-template-columns: var(--microservice-grid-cols);
  grid-column-gap: var(--microservice-card-col-gap);
  grid-row-gap: var(--microservice-card-row-gap);
  padding: var(--microservice-card-padding);
`;

export const IconCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  i {
    color: var(--pink);
    font-size: 6rem;
  }
  h3 {
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: 300;
    /* text-align: center; */
    @media only screen and (max-width: 415px) {
      margin: -1rem 0 0rem 0;
    }
  }
  p {
    font-size: 1rem;
    text-align: center;
    font-weight: 100;
    margin: auto;
    @media only screen and (max-width: 415px) {
      margin: 0;
    }
  }
  a {
    margin-top: 0.5rem;
    color: var(--pink);
    font-size: 1rem;
    @media only screen and (max-width: 415px) {
      margin-top: 0rem;
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
