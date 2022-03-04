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
import Link from 'next/link';

import ServiceBackgroundImage from '../../components/ServiceBackgroundImage';
import ServicesHero from '../../components/ServicesHero';
import Image from 'next/image';
import {
  SectionBlurb,
  SectionContainer,
  SectionHeading,
  SectionHeading2,
} from '../../styles/GlobalStyles';
export default function MarketingPage() {
  return (
    <ServicesPage>
      <ServicesHero>
        <ServiceBackgroundImage
          alt="marketing"
          title="marketing"
          img={Hero}
          position="top"
          brightness="0.3"
        />
        <h2>Marketing</h2>
        <p>
          Stop wasting your time and money on marketing that doesn&apos;t work.
          Let us know your business goals and we&apos;ll create you a free
          personalised marketing plan.
        </p>
        <Link href="/contact-us">
          <button>BOOK A CALL</button>
        </Link>
      </ServicesHero>
      <main>
        <SectionContainer>
          <ServicesHeader>
            <SectionHeading align="center">
              Marketing for your business
            </SectionHeading>
            <SectionBlurb align="center">What we can help with:</SectionBlurb>
          </ServicesHeader>
          <IconCards>
            <IconCard>
              <i className="icon-window card-icon" />
              <h3>Web Development</h3>
              <p>
                Servicing 50&#43; clients across the UK, we boast an
                in&#45;house UK based team, available 24 hours a day. We take
                care of the design, hosting and maintenance of your
                business&apos;s website. We provide a clean, impactful and
                professional digital shopfront for you and your audience.
                <br />
              </p>
            </IconCard>
            <IconCard>
              <i className="icon-video card-icon" />
              <h3>Videography</h3>
              <p>
                Producing fresh ideas, impactful content and imaginative show
                reels, we can support with any element of videography for your
                business needs. Not only will video grab and capture the
                attention of your customers but it can also be used as a tool to
                help influence decision making and boost your
                sales&#47;conversions.
              </p>
            </IconCard>
            <IconCard>
              <i className="icon-megaphone card-icon" />
              <h3>Branding</h3>
              <p>
                Ensuring that your business has a detailed and bespoke branding
                strategy to guarantee growth and longevity for your brand,
                supported by short term and long term goals which are focussed
                on curating your brand image in the best way possible.
              </p>
              {/* <a href="/services/marketing/branding">Learn More</a> */}
            </IconCard>
            <IconCard>
              <i className="icon-edit card-icon" />
              <h3>Graphics</h3>
              <p>
                Our in&#45;house team can provide you with digital art and
                graphic design services to guarantee your business has the most
                aesthetically beneficial graphic elements such as logos, colour
                schemes and everything you need to impress your customers.
              </p>
            </IconCard>
            <IconCard>
              <i className="icon-camera card-icon" />
              <h3>Photography</h3>
              <p>
                Our in-house photographer Rich, is a master of his field. With
                his years of experience photographing a variety of artistic
                genres, we can offer a complete photography package that will
                capture the very best of your events. From crowd engagement down
                to brand placement, nothing is missed.
              </p>
            </IconCard>
            <IconCard>
              <i className="icon-money card-icon" />
              <h3>Influencer Marketing</h3>
              <p>
                Connecting you with social media influencers to boost awareness
                of your brand to entice potential customers and better engage
                with your current customers.
              </p>
            </IconCard>
          </IconCards>
        </SectionContainer>
        <ServicesSummary>
          <ImageContainer>
            <Image
              alt="marketing footer"
              title="marketing footer"
              layout="fill"
              objectFit="cover"
              src={SummaryImg}
            />
          </ImageContainer>
          <SectionHeading2>Why choose us?</SectionHeading2>
          <p>
            So you&apos;re looking for a full 360 &#176; marketing agency that
            you can actually trust without having to sift through countless
            websites you&apos;ve found from Google? We know the pain.
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
