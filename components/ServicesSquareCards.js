import styled from 'styled-components';
import marketing from '../public/assets/servicesCardImgs/marketing.jpg';
import exhibition from '../public/assets/servicesCardImgs/event.jpg';
import event from '../public/assets/servicesCardImgs/event.jpg';
import activation from '../public/assets/servicesCardImgs/social.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesSquareCards() {
  return (
    <CardContainer>
      <Card>
        <Link href="/services/marketing">
          <>
            <h3>Marketing</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              quo nesciunt enim ut expedita, perferendis provident quas placeat
              deleniti eius? enim ut expedita, perferendis provident quas
              placeat deleniti eius?
            </p>
            <button>Start</button>
            <div className="img-container">
              <Image layout="fill" src={marketing} alt="" />
            </div>
          </>
        </Link>
      </Card>
      <Card>
        <Link href="/services/exhibitions">
          <>
            <h3>Exhibitions</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              quo nesciunt enim ut expedita, perferendis provident quas placeat
              deleniti eius? enim ut expedita, perferendis provident quas
              placeat deleniti eius?
            </p>
            <button>Start</button>
            <div className="img-container">
              <Image layout="fill" src={exhibition} alt="" />
            </div>
          </>
        </Link>
      </Card>
      <Card>
        <Link href="/services/live-events">
          <>
            <h3>Live Events</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              quo nesciunt enim ut expedita, perferendis provident quas placeat
              deleniti eius? enim ut expedita, perferendis provident quas
              placeat deleniti eius?
            </p>
            <button>Start</button>
            <div className="img-container">
              <Image layout="fill" src={event} alt="" />
            </div>
          </>
        </Link>
      </Card>
      <Card>
        <Link href="/services/activation">
          <>
            <h3>Activation</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              quo nesciunt enim ut expedita, perferendis provident quas placeat
              deleniti eius? enim ut expedita, perferendis provident quas
              placeat deleniti eius?
            </p>
            <button>Start</button>
            <div className="img-container">
              <Image layout="fill" src={activation} alt="" />
            </div>
          </>
        </Link>
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
  justify-content: center;
  text-align: center;
  a {
    color: var(--white);
  }

  h3 {
    font-weight: 400;
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
    font-weight: 200;
  }
  button {
    width: 30%;
    margin: 1rem auto;
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
      filter: brightness(0.3);
    }
  }
`;
