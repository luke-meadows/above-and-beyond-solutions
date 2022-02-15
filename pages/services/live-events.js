import {
  IconCard,
  IconCards,
  ServicesHeader,
  ServicesPage,
  ServicesSummary,
} from '../../styles/ServicesStyles';
import Hero from '../../public/assets/service-heros/live-events-hero.jpg';
import SummaryImg from '../../public/assets/service-summary-imgs/events-summary.jpg';
import ServiceBackgroundImage from '../../components/ServiceBackgroundImage';
import ServicesHero from '../../components/ServicesHero';
export default function LiveEvents() {
  return (
    <ServicesPage>
      <ServicesHero>
        <ServiceBackgroundImage img={Hero} position="center" brightness="0.3" />

        <h2>
          Live Events <br />
        </h2>
        <p>
          An effective digital strategy is the blueprint for your business’
          success.
        </p>
        <button>
          <i className="icon-mobile" />
          BOOK A CALL
        </button>
      </ServicesHero>
      <main>
        <ServicesHeader>
          <h4>Host an Amazing Event</h4>
          <h5>What We Can Help With:</h5>
        </ServicesHeader>
        <IconCards>
          <IconCard>
            <i className="icon-tools card-icon" />
            <h5>Design Build</h5>
            <p>
              Websites that do not work, do not convert. We’ll audit and ensure
              your website is functioning flawlessly so that every click
              satisfies user expectations. <br />
            </p>
          </IconCard>
          <IconCard>
            <i className="icon-calendar card-icon" />
            <h5>Artist Booking</h5>
            <p>
              Unlike other web development agencies, we’re able to provide
              ongoing optimisations and development as best practices evolve to
              suit your marketing and sales goals.
            </p>
          </IconCard>
          <IconCard>
            <i className="icon-users card-icon" />
            <h5>Artist Liaison</h5>
            <p>
              Unlike other web development agencies, we’re able to provide
              ongoing optimisations and development as best practices evolve to
              suit your marketing and sales goals.
            </p>
          </IconCard>
          <IconCard>
            <i className="icon-truck card-icon" />
            <h5>Transport and Logistics</h5>
            <p>
              Unlike other web development agencies, we’re able to provide
              ongoing optimisations and development as best practices evolve to
              suit your marketing and sales goals.
            </p>
          </IconCard>
          <IconCard>
            <i className="icon-retweet card-icon" />
            <h5>Production</h5>
            <p>
              Unlike other web development agencies, we’re able to provide
              ongoing optimisations and development as best practices evolve to
              suit your marketing and sales goals.
            </p>
          </IconCard>
          <IconCard>
            <i className="icon-megaphone card-icon" />
            <h5>Marketing and Promotion</h5>
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
