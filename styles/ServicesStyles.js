import styled from 'styled-components';

export const ServicesPage = styled.div`
  main {
    padding-top: 2rem;
  }
`;

export const ServicesHeader = styled.div`
  text-align: center;
  margin-top: 1rem;
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
    font-size: 1.2rem;
    font-weight: 500;
  }
  p {
    font-size: 1rem;
    text-align: center;
    font-weight: 300;
    margin: auto;
    /* border: 1px solid blue; */
  }
  a {
    margin-top: 0.5rem;
    color: var(--pink);
    font-size: 1rem;
  }
`;

export const ServicesSummary = styled.div`
  min-height: calc(100vh - 5rem);
  position: relative;
  padding: 2rem;
  color: black;
  background: var(--white);
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
    font-weight: 300;
    padding: 2rem 5rem;
  }
  strong {
    font-weight: 500;
  }
  i {
    color: var(--pink);
  }
`;
