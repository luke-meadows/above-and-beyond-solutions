import styled from 'styled-components';
import Link from 'next/link';

export default function ServicesSquareCards() {
  return (
    <CardContainer>
      <Card>
        <Link href="/services/exhibitions">
          <h3>Exhibitions</h3>
        </Link>
      </Card>
      <Card>
        <Link href="/services/live-events">
          <h3>Live Events</h3>
        </Link>
      </Card>
      <Card>
        <Link href="/services/brand-activations">
          <h3>Brand Activations</h3>
        </Link>
      </Card>
      <Card>
        <Link href="/services/marketing">
          <h3>Marketing</h3>
        </Link>
      </Card>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: grid;
  padding: 2rem 1rem;
  grid-template-columns: var(--service-card-grid-cols);
  grid-auto-rows: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  @media only screen and (max-width: 1440px) {
    padding: 1rem 1rem 0 1rem;
  }
`;
const Card = styled.div`
  border: 2px solid black;
  aspect-ratio: 1;
  z-index: 2;
  padding: 1rem;
  position: relative;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    border: 2px solid var(--pink);

    h3 {
      color: var(--pink);
    }
    p {
      display: none;
    }
    .img-container {
      img {
        filter: brightness(0.8);
      }
    }
  }
  @media only screen and (max-width: 715px) {
    &:hover {
      h3 {
        color: black;
      }
      p {
        display: initial;
      }
      .img-container {
        img {
          filter: brightness(0.2);
        }
      }
    }
  }

  a {
    color: var(--white);
  }

  h3 {
    font-weight: 300;
    width: fit-content;
    padding: 0 1.5rem;

    font-size: var(--service-card-header);
    @media only screen and (min-width: 1600px) {
      font-size: 2rem;
    }
  }
  p {
    font-size: 1rem;
    font-weight: 100;
    line-height: 1.2;
    @media only screen and (min-width: 1600px) {
      font-size: 1.1rem;
    }
  }
  button {
    margin: 1rem auto;
    width: 10rem;
    @media only screen and (min-width: 1600px) {
      font-size: 0.9rem;
    }
  }
  .img-container {
    z-index: -1;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      filter: brightness(0.2);
    }
  }
`;
