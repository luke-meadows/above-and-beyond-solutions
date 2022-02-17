import {
  IconCard,
  IconCards,
  ImageContainer,
  ServicesHeader,
  ServicesPage,
  ServicesSummary,
} from '../../styles/ServicesStyles';
import Hero from '../../public/assets/service-heros/activations-hero.png';
import SummaryImg from '../../public/assets/service-summary-imgs/activations-summary-img.png';
import ServiceBackgroundImage from '../../components/ServiceBackgroundImage';
import ServicesHero from '../../components/ServicesHero';
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
          <h4>Brand Activations</h4>
          <h5>What We Can Help With:</h5>
        </ServicesHeader>
        <IconCards>
          <IconCard>
            <i className="icon-network card-icon" />
            <h5>Sponsorship & Partnership</h5>
            <p>
              Help enhance your brands impact by partnering / collaborating with
              Brands and People who share the same vision and can help boost
              impact across campaigns
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
            <h5>Brand Activation and WOW moments</h5>
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
            <Image
              layout="fill"
              objectPosition="bottom"
              objectFit="cover"
              src={SummaryImg}
            />
          </ImageContainer>
          <h4>Why Choose Us?</h4>
          <p>
            We are well versed in producing and creating eye catching, high
            impact, creative campaigns bringing your brand to the forefront of
            the consumers eye.
            <br />
            <br />
            From rolling a bright orange tank through central London and parking
            it outside of the houses of Parliament to protest the closure of
            gyms during lock down, to flying a 100ft tall hot air balloon across
            Liverpool to celebrate the Semi Final EURO&apos;s win, to delivering
            a 100 store tesco sampling campaign, to producing and creating a
            short feature length film - Above and Beyond&apos;s creativity and
            can do attitude can enable your brand to bring even the craziest of
            ideas to life
          </p>
        </ServicesSummary>
      </main>
    </ServicesPage>
  );
}
