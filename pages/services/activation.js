import {
  IconCard,
  IconCards,
  ServicesHeader,
  // ServicesHero,
  ServicesPage,
  ServicesSummary,
} from '../../styles/ServicesStyles';
import Hero from '../../public/assets/service-heros/activation-hero.jpg';
import SummaryImg from '../../public/assets/service-summary-imgs/activation-summary.jpg';
import ServiceBackgroundImage from '../../components/ServiceBackgroundImage';
import ServicesHero from '../../components/ServicesHero';
export default function Activation() {
  return (
    <ServicesPage>
      <ServicesHero>
        <ServiceBackgroundImage img={Hero} position="center" brightness="0.3" />
        <h2>
          Activation <br />
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
          illum necessitatibus hic tempora aspernatur labore.
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
      </main>
    </ServicesPage>
  );
}
