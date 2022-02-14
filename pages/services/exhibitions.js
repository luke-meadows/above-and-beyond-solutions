import {
  IconCard,
  IconCards,
  ServicesHeader,
  ServicesPage,
  ServicesSummary,
} from '../../styles/ServicesStyles';
import Hero from '../../public/assets/service-heros/exhibitions-hero.jpg';
import SummaryImg from '../../public/assets/service-summary-imgs/exhibitions-summary.jpg';
import ServiceBackgroundImage from '../../components/ServiceBackgroundImage';
import ServicesHero from '../../components/ServicesHero';
export default function Exhibitions() {
  return (
    <ServicesPage>
      <ServicesHero>
        <ServiceBackgroundImage img={Hero} position="center" brightness="0.2" />
        <h2>
          Exhibitions <br />
        </h2>
        <p>
          Above and Beyond Solutions will be a sounding board for your marketing
          team to get the most out of your Exhibition budget.
          <br />
          Exhibiting is still the best face to face marketing available. Your
          Brand, your product, your passionate staff representing the company at
          the industry event.
        </p>
        <button>
          <i class="icon-mobile" />
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
            <i class="icon-edit card-icon" />
            <h5>Design</h5>
            <p>
              We listen to what you wish to achieve. If it is general Brand
              activation you require, we excel working with a blank page as we
              will know more about your brand and target market from our unique
              experiences and reach capabilities.
            </p>
          </IconCard>
          <IconCard>
            <i class="icon-tools card-icon" />
            <h5>Build</h5>
            <p>
              We know how the stands exhibit should be constructed. We have
              modular systems to ensure green credentials. We also have the
              capability to use other materials so that the stand is tactile,
              welcoming and representative.
            </p>
          </IconCard>
          <IconCard>
            <i class="icon-brush card-icon" />
            <h5>Graphics</h5>
            <p>
              An important element to any stand - your graphics backdrop is your
              infographic, the photo backdrop, the intrigue. We will take YOUR
              important elements for that particular event and showcase them in
              an eye-catching way to ensure you have a populated stand and the
              visitors have memorable experiences.
            </p>
          </IconCard>
          <IconCard>
            <i class="icon-opentable card-icon" />
            <h5>Floor Plan</h5>
            <p>
              Most think the floorplan is the organisers duty, but for those
              with a larger stand space it is imperative to recognise the flow
              of the attendees through your stand, you are there to tell a
              story, we can bring your story to life through careful planning
              and strategic placement of your exhibits.
            </p>
          </IconCard>
          <IconCard>
            <i class="icon-users card-icon" />
            <h5>Staffing</h5>
            <p>
              Your staff should be maximised to promote the brand and the
              exhibit, but you may want a DJ, a hostess, a barista, an
              entertainer. We can arrange these for you, it is not your usual
              forte, let us handle the logistics, training and be the knowledge
              giver so they compliment your brand.
            </p>
          </IconCard>
          <IconCard>
            <i class="icon-ticket card-icon" />
            <h5>Ticketing</h5>
            <p>
              We have the first NFT ticketing platform as a principle partner,
              this is new tech, we have embraced it and it will be the future of
              ticket sales putting the promoter and event organiser back in
              control of who has tickets to your event, the resale value and
              preventing fraud.
            </p>
          </IconCard>
        </IconCards>
        <ServicesSummary>
          <ServiceBackgroundImage
            img={SummaryImg}
            position="bottom"
            brightness="0.3"
          />

          <h4>Industry Leading Exhibitions</h4>
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
