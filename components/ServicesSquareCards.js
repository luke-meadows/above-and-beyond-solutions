import styled from 'styled-components';
import marketing from '../public/assets/servicesCardImgs/marketing.png';
import exhibition from '../public/assets/servicesCardImgs/exhibition.png';
import event from '../public/assets/servicesCardImgs/live-events.png';
import activation from '../public/assets/servicesCardImgs/activation.png';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesSquareCards({ margin }) {
  return (
    <CardContainer style={{ marginBottom: `${margin}rem` }}>
      <Card>
        <h3>Marketing</h3>
        <p>
          Stop wasting your time and money on marketing that doesn’t work. Let
          us know your business goals and we’ll create you a free personalised
          marketing plan.
        </p>
        <Link href="/services/marketing">
          <button>Learn More</button>
        </Link>
        <div className="img-container">
          <Image layout="fill" src={marketing} alt="" />
        </div>
      </Card>
      <Card>
        <h3>Exhibitions</h3>
        <p>
          Delivering high quality, immersive exhibition solutions that
          successfully deliver your brand messaging, create engagment and
          increase footfall. Our innovative and unique stand designs bring your
          brand to life and help you to engage with your customers.
        </p>
        <Link href="/services/exhibitions">
          <button>Learn More</button>
        </Link>
        <div className="img-container">
          <Image layout="fill" src={exhibition} alt="" />
        </div>
      </Card>
      <Card>
        <h3>Live Events</h3>
        <p>
          Our 15 years live event experience means we’re proficient in not only
          building and delivering the event but also organising everything from
          logistics to technical delivery, promotions to talent booking,
          licensing to ticket sales.
        </p>
        <Link href="/services/live-events">
          <button>Learn More</button>
        </Link>
        <div className="img-container">
          <Image layout="fill" objectPosition="bottom" src={event} alt="" />
        </div>
      </Card>
      <Card>
        <h3>Brand Activations</h3>
        <p>
          From huge PR stunts to UK wide sampling campaigns. Brand activations
          are a series of WOW moments that you deliver throughout the year. We
          are well versed in producing eye catching, high impact campaigns.
          Bringing your brand to the consumers eye.
        </p>
        <Link href="/services/brand-activations">
          <button>Learn More</button>
        </Link>
        <div className="img-container">
          <Image
            layout="fill"
            objectPosition="bottom"
            src={activation}
            alt=""
          />
        </div>
      </Card>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  background: white;
  display: grid;
  grid-template-columns: var(--service-card-grid-cols);
  padding: 1rem;
  grid-auto-rows: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  @media only screen and (max-width: 715px) {
    grid-row-gap: 1.5rem;
    padding: 1.5rem;
  }
`;
const Card = styled.div`
  z-index: 2;
  min-height: 20rem;
  min-width: 10rem;
  padding: 1rem;
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  @media only screen and (min-width: 1600px) {
    min-height: 25rem;
  }
  &:hover {
    .img-container {
      img {
        filter: brightness(0.8);
      }
    }
  }
  @media only screen and (max-width: 715px) {
    &:hover {
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
