import {
  IconCard,
  IconCards,
  ServicesHeader,
  ServicesPage,
} from '../../styles/ServicesStyles';
import Hero from '../../public/assets/service-heros/marketing-hero.png';
import ServiceBackgroundImage from '../../components/ServiceBackgroundImage';
import ServicesHero from '../../components/ServicesHero';
export default function MarketingPage() {
  return (
    <ServicesPage>
      <ServicesHero>
        <ServiceBackgroundImage img={Hero} position="top" brightness="0.35" />
        <h2>Marketing</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          quam nesciunt eveniet ex eum voluptatibus, aliquid dolore autem
          debitis numquam.
        </p>
        <button>
          <i className="icon-mobile" />
          BOOK A CALL
        </button>
      </ServicesHero>
      <main>
        <ServicesHeader>
          <h4>Marketing for Your Business</h4>
          <h5>What We Can Help With:</h5>
        </ServicesHeader>
        <IconCards>
          <IconCard>
            <i className="icon-window card-icon" />
            <h5>Web Development</h5>
            <p>
              Websites that do not work, do not convert. We’ll audit and ensure
              your website is functioning flawlessly so that every click
              satisfies user expectations. <br />
            </p>
            <a href="/services/marketing/web-development">Learn More</a>
          </IconCard>
          <IconCard>
            <i className="icon-video card-icon" />
            <h5>Videography</h5>
            <p>
              Unlike other web development agencies, we’re able to provide
              ongoing optimisations and development as best practices evolve to
              suit your marketing and sales goals.
            </p>
            <a href="/services/marketing/videography">Learn More</a>
          </IconCard>
          <IconCard>
            <i className="icon-megaphone card-icon" />
            <h5>Branding</h5>
            <p>
              Unlike other web development agencies, we’re able to provide
              ongoing optimisations and development as best practices evolve to
              suit your marketing and sales goals.
            </p>
            <a href="/services/marketing/branding">Learn More</a>
          </IconCard>
          <IconCard>
            <i className="icon-edit card-icon" />
            <h5>Graphics</h5>
            <p>
              Unlike other web development agencies, we’re able to provide
              ongoing optimisations and development as best practices evolve to
              suit your marketing and sales goals.
            </p>
          </IconCard>
          <IconCard>
            <i className="icon-camera card-icon" />
            <h5>Photography</h5>
            <p>
              Unlike other web development agencies, we’re able to provide
              ongoing optimisations and development as best practices evolve to
              suit your marketing and sales goals.
            </p>
          </IconCard>
          <IconCard>
            <i className="icon-money card-icon" />
            <h5>Influencer Marketing</h5>
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
