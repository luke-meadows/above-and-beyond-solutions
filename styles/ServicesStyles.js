import styled from 'styled-components';

export const ServicesPage = styled.div`
  main {
    padding-top: 2rem;
  }
`;
export const ServicesHero = styled.div`
  height: 80vh;
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 5rem 0 5rem;
  .image-container {
    height: 100%;
    width: 100%;
    filter: brightness(0.6);
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0rem;
  }
  img {
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
  }
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
    max-width: 70%;
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

export const ServicesHeader = styled.div`
  text-align: center;
  margin-top: 1rem;
  h4 {
    color: var(--pink);
    /* color: white; */

    font-weight: 500;
    font-size: 2.1rem;
    margin-bottom: 1rem;
  }
  h5 {
    font-weight: 400;
    font-size: 1.5rem;
  }
`;

export const IconCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 4rem;
  grid-row-gap: 4rem;
  padding: 0 4rem 3rem 4rem;
  margin-top: 2rem;
`;

export const IconCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  i {
    color: var(--pink);
    /* color: white; */
    font-size: 6rem;
  }
  h5 {
    padding: 1rem;
    font-weight: 500;
  }
  p {
    font-size: 1rem;
    text-align: center;
    font-weight: 300;
  }
  a {
    margin-top: 0.5rem;
    color: var(--pink);
    font-size: 1rem;
  }
`;

export const ServicesSummary = styled.div`
  min-height: calc(100vh - 5rem);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.85);
  background-blend-mode: multiply;
  text-align: center;
  padding: 2rem;
  color: white;
  h4 {
    color: var(--pink);
    font-weight: 500;
    font-size: 2.1rem;
    margin-bottom: 1rem;
  }
  h5 {
    font-weight: 400;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.2rem;
    text-align: center;
    font-weight: 200;
    padding: 2rem 5rem;
  }
  strong {
    font-weight: 500;
  }
  i {
    color: var(--pink);
  }
`;
