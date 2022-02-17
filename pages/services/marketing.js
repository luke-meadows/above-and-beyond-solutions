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
      <ServicesHero size={10}>
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
              Servicing over 50+ clients across the UK and growing we boast an
              in house UK based team available 24 hours a day. We can take care
              of the design, hosting and maintenance of your business’ website.
              Ensuring your audience sees a clean, impactful and professional
              digital shopfront.
              <br />
            </p>
            {/* <a href="/services/marketing/web-development">Learn More</a> */}
          </IconCard>
          <IconCard>
            <i className="icon-video card-icon" />
            <h5>Videography</h5>
            <p>
              Producing fresh ideas, impactful conent and imaginative show
              reels, we can support with any element of videographiy for your
              business needs. Not only will video grab and capture attention of
              your custiomers but also is used as a tool to help influence
              decision making and boost your sales / conversions.
            </p>
            {/* <a href="/services/marketing/videography">Learn More</a> */}
          </IconCard>
          <IconCard>
            <i className="icon-megaphone card-icon" />
            <h5>Branding</h5>
            <p>
              Ensuring that your business has a detailed and bespoke branding
              strategy to guarantee growth and longevity for your brand,
              supported by short term and long term goals which are focussed on
              curating your brand image in the best way possible.
            </p>
            {/* <a href="/services/marketing/branding">Learn More</a> */}
          </IconCard>
          <IconCard>
            <i className="icon-edit card-icon" />
            <h5>Graphics</h5>
            <p>
              Our in house team can provide you with digital art and graphic
              design services to guarantee your business has the most
              aesthetically beneficial graphic elements such as logos, colour
              schemes and everything you need to look the part for your
              customers.
            </p>
          </IconCard>
          <IconCard>
            <i className="icon-camera card-icon" />
            <h5>Photography</h5>
            <p>
              Teaming you up with our in house photography experts, making sure
              the visual aspect of your business is among many of the marketing
              services we can provide.
            </p>
          </IconCard>
          <IconCard>
            <i className="icon-money card-icon" />
            <h5>Influencer Marketing</h5>
            <p>
              Connecting you with social media influencers that can help boost
              the speed at which the word of your brand spreads and secures you
              more potential customers and better engagement with your current
              customers
            </p>
          </IconCard>
        </IconCards>
      </main>
    </ServicesPage>
  );
}
