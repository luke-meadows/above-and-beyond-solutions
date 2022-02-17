import {
  IconCard,
  IconCards,
  ServicesHeader,
  ServicesPage,
  ServicesSummary,
} from '../../styles/ServicesStyles';
import Hero from '../../public/assets/service-heros/activation-hero.png';
import ServiceBackgroundImage from '../../components/ServiceBackgroundImage';
import ServicesHero from '../../components/ServicesHero';
import styled from 'styled-components';
import Image from 'next/image';
export default function Activation() {
  return (
    <ServicesPage>
      <ServicesHero size={25}>
        <ServiceBackgroundImage img={Hero} position="center" brightness="0.3" />
        <h2>
          Activation <br />
        </h2>
        <p>
          From huge PR stunts to UK wide sampling campaigns… Brand activations
          are a series of WOW moments that you deliver throughout the year.
        </p>
        <button>
          <i className="icon-mobile" />
          BOOK A CALL
        </button>
      </ServicesHero>
      <main>
        <ServicesHeader>
          <h4>Brand Activations and Big Events</h4>
          <h5>What We Can Help With:</h5>
        </ServicesHeader>
        <IconCards>
          <IconCard>
            <i className="icon-network card-icon" />
            <h5>Sponsorship and Partnership</h5>
            <p>
              Websites that do not work, do not convert. We’ll audit and ensure
              your website is functioning flawlessly so that every click
              satisfies user expectations. <br />
            </p>
          </IconCard>
          <IconCard>
            <i className="icon-gauge card-icon" />
            <h5>Sampling</h5>
            <p>
              Unlike other web development agencies, we’re able to provide
              ongoing optimisations and development as best practices evolve to
              suit your marketing and sales goals.
            </p>
          </IconCard>
          <IconCard>
            <i className="icon-ok card-icon" />
            <h5>Brand Activations and Big Events</h5>
            <p>
              Unlike other web development agencies, we’re able to provide
              ongoing optimisations and development as best practices evolve to
              suit your marketing and sales goals.
            </p>
          </IconCard>
        </IconCards>
        <ServicesSummary>
          <ImageContainer>
            <Image layout="fill" objectFit="cover" src={Hero} />
          </ImageContainer>
          <h4>Summary Heading</h4>
          <h5>Summary Subheading</h5>
          <p>
            We are well adverse to producing and creating eye catching, high
            impact, creative campaigns bringing your brand to the forefront of
            the consumers eye.
            <br />
            <br />
            From rolling a bright orange tank through central London and parking
            it outside of the houses of Parliament to protest the closure of
            gyms during lock down, to flying a 100ft tall hot air balloon across
            Liverpool to celebrate the Semi Final EURO’s win, to delivering a
            100 store tesco sampling campaign, to producing and creating a short
            feature length film - Above and Beyond’s creativity and can do
            attitude can enable your brand to bring even the craziest of ideas
            to life
          </p>
        </ServicesSummary>
      </main>
    </ServicesPage>
  );
}

const ImageContainer = styled.div`
  display: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  img {
    filter: brightness(0.3);
    z-index: -1;
  }
`;
