import hero from '../../public/assets/service-heros/services-page-hero.png';
import ServicesSquareCards from '../../components/ServicesSquareCards';
import ServicesHero from '../../components/ServicesHero';
import {
  ServicesPage,
  ServicesHeader,
  ServicesHomeSummary,
} from '../../styles/ServicesStyles.js';
import ServiceBackgroundImage from '../../components/ServiceBackgroundImage';
import Link from 'next/link';
import { SectionBlurb, SectionHeading } from '../../styles/GlobalStyles';

export default function Services() {
  return (
    <ServicesPage>
      <ServicesHero>
        <ServiceBackgroundImage img={hero} position="center" brightness="0.3" />
        <h2>What we can do for you</h2>
        <p>
          Our service offering reflects the talent within Above and Beyond
          Solutions, which is a collective of live event professionals, tech
          specialists and social advocates. <br /> We connect the brand, the
          artist and the audience through multi channel marketing and
          activations. With our commercially astute team Above and Beyond
          Solutions will maximise the return on engagement.
        </p>
        <Link href="/contact-us">
          <button>BOOK A CALL</button>
        </Link>
      </ServicesHero>
      <main>
        <ServicesHeader>
          <SectionHeading>Our Services</SectionHeading>
          <SectionBlurb>
            Big impact, creative campaigns with small agency care.{' '}
          </SectionBlurb>
        </ServicesHeader>
        <ServicesHomeSummary>
          <p>
            Our digital marketing prowess tied to exhibition stand planning and
            delivery through to artist liaison, logistics and event promotion.
            Highlights our diverse yet in sync offering that not many other
            agencies can boast.
            <br />
            <br />
            We have the competencies, contacts and drive to provide organisers
            and venues a unique selection of revenue streams. We create Feel
            good moments going Above and Beyond to ensure long lasting happy
            memories and human impressions.
            <br />
            <br />
            We compliment all the live work with web site builds, ensuring your
            best sales tool feels, acts and works as well as any live
            engagement. With our social media marketing, we use each channel to
            maximise your investment.
          </p>
        </ServicesHomeSummary>
        <ServicesSquareCards />
      </main>
    </ServicesPage>
  );
}
