import {
  IconCard,
  IconCards,
  ImageContainer,
  ServicesHeader,
  ServicesPage,
  ServicesSummary,
} from '../../styles/ServicesStyles';
import Hero from '../../public/assets/service-heros/marketing-hero.png';
import SummaryImg from '../../public/assets/service-summary-imgs/marketing-summary-img.png';

import ServiceBackgroundImage from '../../components/ServiceBackgroundImage';
import ServicesHero from '../../components/ServicesHero';
import Image from 'next/image';
export default function MarketingPage() {
  return (
    <ServicesPage>
      <ServicesHero size={22}>
        <ServiceBackgroundImage img={Hero} position="top" brightness="0.3" />
        <h2>Marketing</h2>
        <p>
          Stop wasting your time and money on marketing that doesn&apos;t work.
          Let us know your business goals and we&apos;ll create you a free
          personalised marketing plan.
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
              Servicing over 50 clients across the UK and growing we boast an in
              house UK based team, available 24 hours a day. We take care of the
              design, hosting and maintenance of your business&apos; website. We
              provide a clean, impactful and professional digital shopfront for
              you and your audience.
              <br />
            </p>
            {/* <a href="/services/marketing/web-development">Learn More</a> */}
          </IconCard>
          <IconCard>
            <i className="icon-video card-icon" />
            <h5>Videography</h5>
            <p>
              Producing fresh ideas, impactful content and imaginative show
              reels, we can support with any element of videography for your
              business needs. Not only will video grab and capture attention of
              your customers but also is used as a tool to help influence
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
              Our in-house photographer Rich, is a master of his field. With his
              years of experience photographing a variety of artistic genres, we
              can offer a complete photography package that will capture the
              very best of your events. From crowd engagement down to brand
              placement, nothing is missed.
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
        <ServicesSummary>
          <ImageContainer>
            <Image layout="fill" objectFit="cover" src={SummaryImg} />
          </ImageContainer>
          <h4>Why Choose Us?</h4>
          <p>
            So you&apos;re looking for a full 360 marketing agency that you can
            actually trust without having to sift through countless websites
            you&apos;ve found from Google? We know the pain.
            <br />
            <br />
            It&apos;s exactly why we&apos;ve created a one stop shop to support
            you with all of your marketing requirements. We pride ourselves in
            working with individuals who have had a plethora of experience in
            supporting all types of business.
          </p>
        </ServicesSummary>
      </main>
    </ServicesPage>
  );
}
