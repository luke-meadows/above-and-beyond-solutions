import styled from 'styled-components';
import marketing from '../public/assets/servicesCardImgs/marketing.png';
import exhibition from '../public/assets/servicesCardImgs/exhibition.png';
import event from '../public/assets/servicesCardImgs/live-events.png';
import activation from '../public/assets/servicesCardImgs/activation.png';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesSquareCards() {
  return (
    <CardContainer>
      <Card>
        <h3>Marketing</h3>
        <p>
          From building your brand to taking a stagnated entity back to the
          forefront of peoples imagination. We will achieve the success you want
          through activations and complimentary socials.
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
          The mainstay of face to face marketing, how to present your business,
          your team, what customers do you want, with planning and exquisite
          delivery we will deliver the results in a fuss free methodology.
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
          We work with promoters to deliver first class acts. We also have
          excellent people to manage and look after the artist and fantastic
          connections for the logistical side of the deal.
        </p>
        <Link href="/services/live-events">
          <button>Learn More</button>
        </Link>
        <div className="img-container">
          <Image layout="fill" objectPosition="bottom" src={event} alt="" />
        </div>
      </Card>
      <Card>
        <h3>Activation</h3>
        <p>
          These are the look at me moments that get you free national press. We
          specialise in different, we celebrate the different, partly through
          our neurodiverse culture and staff. Coming up with unique attention
          grabbing ideas that create talking points by those outside of your
          standard community.
        </p>
        <Link href="/services/activation">
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 1rem 5rem 1rem;
  grid-auto-rows: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;
const Card = styled.div`
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
  a {
    color: var(--white);
  }

  h3 {
    font-weight: 400;
    font-size: 1.5rem;
    @media only screen and (min-width: 1600px) {
      font-size: 2rem;
    }
  }
  p {
    font-size: 1rem;
    font-weight: 300;
    @media only screen and (min-width: 1600px) {
      font-size: 1.1rem;
    }
  }
  button {
    margin: 1rem auto;
    @media only screen and (min-width: 1600px) {
      font-size: 1rem;
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
