import Hero from '../../public/assets/service-heros/services-hero.jpeg';
import ServicesSquareCards from '../../components/ServicesSquareCards';
import {
  ServicesPage,
  ServicesHero,
  ServicesHeader,
  ServicesSummary,
} from '../../styles/ServicesStyles.js';
import Image from 'next/image';
export default function Services() {
  return (
    <ServicesPage>
      <ServicesHero>
        <div className="image-container">
          <Image
            layout="fill"
            src={Hero}
            alt=""
            style={{ filter: 'brightness(0.5)', objectPosition: 'center' }}
          />
        </div>
        <h2>What We Do</h2>
        <p className="small">
          Reach audiences on new, lucrative channels, strengthen your website or
          build your marketing from the ground up with Above and Beyond
          Solutions.
          <div style={{ marginBottom: '1rem' }} />
          All services are tailored to propel your business. We make the most of
          trends but believe in achieving fantastic results, whatever your goals
          and whatever channel we’re working on.
        </p>
        <button>
          <i class="icon-mobile" />
          BOOK A CALL
        </button>
      </ServicesHero>
      <main>
        <ServicesHeader>
          <h4>Our Services</h4>
          <h5>Designed to (.......)</h5>
        </ServicesHeader>
        <ServicesSummary
          style={{
            color: 'black',
            background: 'var(--white)',
            minHeight: '5rem',
          }}
        >
          <p>
            Although we’re an experienced team, we’re not stuck in our ways.
            We’ll always present new ideas to help you grow as we don’t believe
            in letting things plateau. We’re always thinking ‘what’s next’. We
            pride ourselves on being a team of experts, with in-house
            specialists in all areas of digital marketing. All our services will
            be communicated in a language you can understand and we’ll handle
            the tricky stuff so you can focus on running your business. So,
            whether you know where you need help or you’re not sure what you’re
            looking for, get in touch to speak to an expert.{' '}
          </p>
        </ServicesSummary>
        <ServicesSquareCards />
      </main>
    </ServicesPage>
  );
}
