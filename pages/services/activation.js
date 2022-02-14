import { useContext, useEffect, useRef } from 'react';
import { Ctx } from '../../lib/ctxProvider';
import {
  IconCard,
  IconCards,
  ServicesHeader,
  ServicesHero,
  ServicesPage,
  ServicesSummary,
} from '../../styles/ServicesStyles';
import Hero from '../../public/assets/service-heros/activation-hero.jpg';
import SummaryImg from '../../public/assets/service-summary-imgs/activation-summary.jpg';
import ServiceBackgroundImage from '../../components/ServiceBackgroundImage';
export default function Activation() {
  const heroRef = useRef();
  const { setStickyNavCoords } = useContext(Ctx);
  useEffect(() => {
    const rectHeight = heroRef.current.getBoundingClientRect().height;
    setStickyNavCoords(rectHeight);
  }, []);
  return (
    <ServicesPage>
      <ServicesHero ref={heroRef}>
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
          <h4>Capture Attention at an Exhibition</h4>
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
          <ServiceBackgroundImage
            img={SummaryImg}
            position="bottom"
            brightness="0.4"
          />
          <h4>Activation</h4>
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
              <i className="icon-ok" />
            </span>{' '}
            Enhance user experience with a flawless interface and guarantee
            customer satisfaction
            <br />
            <span>
              <i className="icon-ok" />
            </span>{' '}
            Improve organic ranking potential with site speed optimisation and
            mobile first design
            <br />
            <span>
              <i className="icon-ok" />
            </span>
            Choose project-based or ongoing optimisation for flexible small
            business website development
          </p>
        </ServicesSummary>
      </main>
    </ServicesPage>
  );
}
