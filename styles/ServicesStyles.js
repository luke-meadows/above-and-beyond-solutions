import styled from 'styled-components';

export const ServicesPage = styled.div`
  main {
    padding-top: 2rem;
    @media only screen and (max-width: 415px) {
      padding-top: 0;
      /* margin-bottom: -4rem; */
    }
  }
`;

export const ServicesHeader = styled.div`
  text-align: center;
  margin-top: 1rem;
  padding: 0 var(--padding);
  h4 {
    color: var(--pink);
    font-weight: 500;
    font-size: var(--section-heading-text);
    margin-bottom: 1rem;
    padding: 0 var(--padding);
  }
  h5 {
    font-weight: 400;
    font-size: var(--service-section-tagline);
  }
`;

export const IconCards = styled.div`
  display: grid;
  grid-template-columns: var(--microservice-grid-cols);
  grid-column-gap: 4rem;
  grid-row-gap: 4rem;
  padding: 0 4rem 3rem 4rem;
  margin-top: 2rem;
  @media only screen and (max-width: 415px) {
    margin-top: 1rem;
    padding: 0 1rem 3rem 1rem;
    grid-row-gap: 2rem;
    margin-bottom: -1rem;
  }
`;

export const IconCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  i {
    color: var(--pink);
    font-size: 6rem;
  }
  h5 {
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    @media only screen and (max-width: 415px) {
      margin: -1rem 0 0rem 0;
    }
  }
  p {
    font-size: 1rem;
    text-align: center;
    font-weight: 300;
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
  padding: 2rem;
  color: white;
  text-align: center;
  min-height: 45vh;
  h4 {
    color: var(--pink);
    font-weight: 500;
    font-size: 2.1rem;
  }
  h5 {
    font-weight: 400;
    font-size: 1.5rem;
  }
  p {
    max-width: 120ch;
    margin: 0 auto;
    font-size: 1.2rem;
    text-align: center;
    font-weight: 300;
    padding: 2rem var(--padding);
  }
  @media only screen and (max-width: 415px) {
    padding: 1rem 0;
    p {
      font-size: 1rem;
    }
  }
`;

export const ImageContainer = styled.div`
  display: absolute;
  left: 0;
  top: 0;
  height: fit-content;
  width: 100%;
  z-index: -1;
  img {
    filter: brightness(0.3);
    z-index: -1;
  }
`;
