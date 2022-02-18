import hero from '../../public/assets/service-heros/services-page-hero.png';
import ServicesSquareCards from '../../components/ServicesSquareCards';
import ServicesHero from '../../components/ServicesHero';
import {
  ServicesPage,
  ServicesHeader,
  ServicesSummary,
} from '../../styles/ServicesStyles.js';
import ServiceBackgroundImage from '../../components/ServiceBackgroundImage';
export default function Services() {
  return (
    <ServicesPage>
      <ServicesHero size={22}>
        <ServiceBackgroundImage img={hero} position="center" brightness="0.3" />
        <h2>What we can do for you</h2>
        <p className="small">
          Our service offering reflects the talent within Above and Beyond
          Solutions, which is a collective of live event professionals, tech
          specialists and social advocates. <br /> We connect the brand, the
          artist and the audience through multi channel marketing and
          activations. With our commercially astute team Above and Beyond
          Solutions will maximise the return on engagement.
        </p>
        <button>
          <i className="icon-mobile" />
          BOOK A CALL
        </button>
      </ServicesHero>
      <main>
        <ServicesHeader>
          <h4>Our Services</h4>
          <h5>Big impact, creative campaigns with small agency care. </h5>
        </ServicesHeader>
        <ServicesSummary
          style={{
            color: 'black',
            background: 'var(--white)',
            minHeight: '5rem',
          }}
        >
          <p class="service-home-p">
            Our digital marketing prowess tied to exhibition stand planning and
            delivery through to artist liaison, logistics and event promotion.
            Highlights our diverse yet in sync offering that not many other
            agencies can boast. We have the competencies, contacts and drive to
            provide organisers and venues a unique selection of revenue streams.
            We create Feel good moments going Above and Beyond to ensure long
            lasting happy memories and human impressions.
            <br />
            <br />
            We compliment all the live work with web site builds, ensuring your
            best sales tool feels, acts and works as well as any live
            engagement. With our social media marketing, we use each channel to
            maximise your investment.
          </p>
        </ServicesSummary>
        <ServicesSquareCards />
      </main>
    </ServicesPage>
  );
}
