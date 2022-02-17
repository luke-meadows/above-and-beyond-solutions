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
        <h2>Brand Activations</h2>
        <p>
          From huge PR stunts to UK wide sampling campaigns. Brand activations
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
            <h5>Sponsorship & Partnership</h5>
            <p>
              Help ernhance your brands impage by partnering / collaborating
              with Brands and People who share the same vision and can help
              boost impact across campaigns
            </p>
          </IconCard>
          <IconCard>
            <i className="icon-gauge card-icon" />
            <h5>Sampling</h5>
            <p>
              Brand to hand sampling is one of the most traditional methods of
              marketing but still to this day is one of the most impactful ways
              to drive trial, which in turn will lead to repeat custom.
            </p>
          </IconCard>
          <IconCard>
            <i className="icon-ok card-icon" />
            <p>
              These are defining moments that create organic growth across
              social media campaigns. These are impactful moments or events.
              From driving tanks to flying hot air balloons across cities, no
              activation is too big or too crazy!
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
  height: fit-content;
  width: 100%;
  z-index: -1;
  img {
    filter: brightness(0.3);
    z-index: -1;
  }
`;
