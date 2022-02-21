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
import Link from 'next/link';
import { SectionBlurb, SectionHeading } from '../../styles/GlobalStyles';
export default function Activation() {
  return (
    <ServicesPage>
      <ServicesHero size={25}>
        <ServiceBackgroundImage img={Hero} position="center" brightness="0.3" />
        <h2>Brand Activations</h2>
        <p>
          From huge PR stunts to UK wide sampling campaigns. Brand activations
          are a series of WOW moments that you deliver throughout the year. We
          are well versed in producing eye catching, high impact campaigns.
          Bringing your brand to the consumer&apos;s eye.
        </p>
        <Link href="/contact-us">
          <button>BOOK A CALL</button>
        </Link>
      </ServicesHero>
      <main>
        <ServicesHeader>
          <SectionHeading align="center">Brand activations</SectionHeading>
          <SectionBlurb align="center">What we can help with:</SectionBlurb>
        </ServicesHeader>
        <IconCards>
          <IconCard>
            <i className="icon-network card-icon" />
            <h5>Sponsorship and Partnership</h5>
            <p>
              Help enhance your brand&apos;s impact by partnering &#47;
              collaborating with brands and people who share the same vision and
              can help boost impact across campaigns.
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
          <SectionHeading>Why choose us?</SectionHeading>

          <p>
            We are well versed in producing eye catching, high impact, creative
            campaigns which bring your brand to the the consumer&apos;s eye.
            <br />
            <br />
            From rolling a bright orange tank through central London and parking
            it outside the houses of Parliament, to protesting the closure of
            gyms during lockdown. From flying a 100ft tall hot air balloon
            across Liverpool to celebrating the semi final Euros win, to
            delivering a 100 store Tesco sampling campaign. From producing and
            creating a short feature length film - Above and Beyond&apos;s
            creativity and can do attitude can enable your brand to bring even
            the craziest of ideas to life.
          </p>
        </ServicesSummary>
      </main>
    </ServicesPage>
  );
}
