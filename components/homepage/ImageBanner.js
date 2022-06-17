import styled from 'styled-components';
import Event from '../../public/assets/homepage-image-banner/events.jpg';
import Exhibitions from '../../public/assets/homepage-image-banner/exhibitions.jpg';
import Marketing from '../../public/assets/homepage-image-banner/marketing.jpg';
import Logo from '../../public/assets/logos/thumbnail-white-logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function ImageBanner() {
  return (
    <Grid>
      <Link href="/services/live-events">
        <div className="image-container">
          <Image src={Event} layout="responsive" objectFit="cover" />
          <div className="logo-outer">
            <div className="logo-inner">
              <Image src={Logo} layout="responsive" objectFit="cover" />
            </div>
            <h3>Live Events</h3>
          </div>
        </div>
      </Link>

      <Link href="/services/exhibitions">
        <div className="image-container">
          <Image src={Exhibitions} layout="responsive" objectFit="cover" />
          <div className="logo-outer">
            <div className="logo-inner">
              <Image src={Logo} layout="responsive" objectFit="cover" />
            </div>
            <h3>Exhibitions</h3>
          </div>
        </div>
      </Link>

      <Link href="/services/marketing">
        <div className="image-container">
          <Image src={Marketing} layout="responsive" objectFit="cover" />
          <div className="logo-outer">
            <div className="logo-inner">
              <Image src={Logo} layout="responsive" objectFit="cover" />
            </div>
            <h3>Brand Marketing</h3>
          </div>
        </div>
      </Link>
    </Grid>
  );
}

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .image-container {
    position: relative;
    aspect-ratio: 1;
    img {
      filter: brightness(0.3);
    }
    .logo-outer {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      height: 50%;
      width: 70%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      cursor: pointer;
      &:hover {
        h3 {
          color: var(--pink);
        }
      }
      h3 {
        margin: 0;
        margin-top: 0.75rem;
        color: var(--white);
        font-size: 2rem;
      }
      @media only screen and (max-width: 1250px) {
        h3 {
          font-size: 1.6rem;
        }
        &:hover {
          h3 {
            color: var(--white);
          }
        }
      }
    }
    .logo-inner {
      position: relative;
      height: 30%;
      aspect-ratio: 1;
      color: var(--white);
      img {
        filter: brightness(1);
        opacity: 0.7;
      }
    }
  }
`;
