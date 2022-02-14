import {
  IconCard,
  IconCards,
  ServicesHeader,
  ServicesPage,
  ServicesSummary,
} from '../styles/ServicesStyles';
import Hero from '../assets/service-heros/marketing.jpeg';
import SummaryImg from '../assets/webdev-summary-bg.jpg';
import ServiceBackgroundImage from '../../components/ServiceBackgroundImage';
import ServicesHero from '../../components/ServicesHero';
export default function MarketingPage() {
  return (
    <ServicesPage>
      <ServicesHero>
        <ServiceBackgroundImage img={Hero} position="top" brightness="0.2" />

        <h2>
          Marketing Agency <br /> <span>Coventry</span>
        </h2>
        <p>
          An effective digital strategy is the blueprint for your business’
          success.
        </p>
        <button>
          <i class="icon-mobile" />
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
            <i class="icon-window card-icon" />
            <h5>Web Development</h5>
            <p>
              Websites that do not work, do not convert. We’ll audit and ensure
              your website is functioning flawlessly so that every click
              satisfies user expectations. <br />
            </p>
            <a href="/services/marketing/web-development">Learn More</a>
          </IconCard>
          <IconCard>
            <i class="icon-video card-icon" />
            <h5>Videography</h5>
            <p>
              Unlike other web development agencies, we’re able to provide
              ongoing optimisations and development as best practices evolve to
              suit your marketing and sales goals.
            </p>
            <a href="/services/marketing/videography">Learn More</a>
          </IconCard>
          <IconCard>
            <i class="icon-megaphone card-icon" />
            <h5>Branding</h5>
            <p>
              Unlike other web development agencies, we’re able to provide
              ongoing optimisations and development as best practices evolve to
              suit your marketing and sales goals.
            </p>
            <a href="/services/marketing/branding">Learn More</a>
          </IconCard>
          <IconCard>
            <i class="icon-pencil card-icon" />
            <h5>Graphics</h5>
            <p>
              Unlike other web development agencies, we’re able to provide
              ongoing optimisations and development as best practices evolve to
              suit your marketing and sales goals.
            </p>
          </IconCard>
          <IconCard>
            <i class="icon-camera card-icon" />
            <h5>Photography</h5>
            <p>
              Unlike other web development agencies, we’re able to provide
              ongoing optimisations and development as best practices evolve to
              suit your marketing and sales goals.
            </p>
          </IconCard>
          <IconCard>
            <i class="icon-money card-icon" />
            <h5>Influencer Marketing</h5>
            <p>
              Unlike other web development agencies, we’re able to provide
              ongoing optimisations and development as best practices evolve to
              suit your marketing and sales goals.
            </p>
          </IconCard>
        </IconCards>
        <ServicesSummary>
          <ServiceBackgroundImage
            img={SummaryImg}
            position="bottom"
            brightness="0.3"
          />
          <h4>We're The Marketing Agency For You</h4>
          <h5>How Can We Help?</h5>
          <p>
            We're The Web Development Agency For You How Can We Help? Website
            development and design isn’t just about the way your page looks to a
            potential customer. It’s about building trust and encouraging
            conversions or goal completions, whatever they look like for your
            company.
            <br /> <br />
            <strong>
              We’re an end to end marketing and web development agency. We give
              your website direction, develop the platform and deliver results.
            </strong>
            <br /> <br />
            Most web development agencies will ask you to fill out a
            requirements document, quote you an over the top price and build a
            basic looking website. At The Above and Beyond, we do things a
            little differently. Our team of experts in all areas of digital are
            able to consult on everything from the design, conversion rate
            optimisation to the structure of the website. Our experience in all
            industries means that we can help you understand what your target
            audience needs in order to transform from traffic into transactions
            and then into loyal brand advocates.
            <br /> <br />
            Plus, we’re not just a web development agency, we have the skills
            for the whole marketing journey, working to get customers to your
            site and start generating revenue, whether through Facebook
            Advertising, Search Engine Optimisation or Pay Per Click Ads. <br />
            <br />
            <span>
              <i class="icon-ok" />
            </span>{' '}
            Enhance user experience with a flawless interface and guarantee
            customer satisfaction
            <br />
            <span>
              <i class="icon-ok" />
            </span>{' '}
            Improve organic ranking potential with site speed optimisation and
            mobile first design
            <br />
            <span>
              <i class="icon-ok" />
            </span>
            Choose project-based or ongoing optimisation for flexible small
            business website development
          </p>
        </ServicesSummary>
      </main>
    </ServicesPage>
  );
}
