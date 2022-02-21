import {
  IconCard,
  IconCards,
  ImageContainer,
  ServicesHeader,
  ServicesPage,
  ServicesSummary,
} from '../../styles/ServicesStyles';
import Hero from '../../public/assets/service-heros/exhibitions-hero.png';
import SummaryImg from '../../public/assets/service-summary-imgs/exhibitions-summary-img.png';

import ServiceBackgroundImage from '../../components/ServiceBackgroundImage';
import ServicesHero from '../../components/ServicesHero';
import Image from 'next/image';
import Link from 'next/link';
import { SectionBlurb, SectionHeading } from '../../styles/GlobalStyles';

export default function Exhibitions() {
  return (
    <ServicesPage>
      <ServicesHero>
        <ServiceBackgroundImage img={Hero} position="center" brightness="0.4" />
        <h2>Exhibitions</h2>
        <p>
          With over 20 years of experience in creating bespoke stands and a full
          knowledge of exhibitions, we&apos;re experts at creating a visionary
          space tailored to your needs.
        </p>
        <Link href="/contact-us">
          <button>BOOK A CALL</button>
        </Link>
      </ServicesHero>
      <main>
        <ServicesHeader>
          <SectionHeading>Capture attention at an exhibition</SectionHeading>
          <SectionBlurb>What we can help with:</SectionBlurb>
        </ServicesHeader>
        <IconCards>
          <IconCard>
            <i className="icon-edit card-icon" />
            <h5>Design</h5>
            <p>
              We listen to what you wish to achieve. If it is general brand
              activation you require, we excel at working with a blank page as
              we will know more about your brand and target market from our
              unique experiences and reach capabilities.
            </p>
          </IconCard>
          <IconCard>
            <i className="icon-tools card-icon" />
            <h5>Build</h5>
            <p>
              We know how the stand&apos;s exhibit should be constructed. We
              have modular systems to ensure green credentials. We also have the
              capability to use other materials so that the stand is tactile,
              welcoming and representative.
            </p>
          </IconCard>
          <IconCard>
            <i className="icon-brush card-icon" />
            <h5>Graphics</h5>
            <p>
              An important element to any stand. Your graphics backdrop is your
              infographic, the photo backdrop, the intrigue. We will take YOUR
              important elements for that particular event and showcase them in
              an eye-catching way to ensure you have a populated stand and the
              visitors have memorable experiences.
            </p>
          </IconCard>
          <IconCard>
            <i className="icon-opentable card-icon" />
            <h5>Floor Plan</h5>
            <p>
              Most think the floorplan is the organiser&apos;s duty, but for
              those with a larger stand space it is imperative to recognise the
              flow of the attendees through your stand. You are there to tell a
              story. We can bring that story to life through careful planning
              and strategic placement of your exhibits.
            </p>
          </IconCard>
          <IconCard>
            <i className="icon-users card-icon" />
            <h5>Staffing</h5>
            <p>
              Your staff should be maximised to promote the brand and the
              exhibit, but you may want a DJ, a hostess, a barista, an
              entertainer. We can arrange these for you if it is not your usual
              forte. Let us handle the logistics, training and be the knowledge
              giver so they complement your brand.
            </p>
          </IconCard>
          <IconCard>
            <i className="icon-ticket card-icon" />
            <h5>Ticketing</h5>
            <p>
              We have the first NFT ticketing platform as a principle partner.
              This is new technology which we have embraced and it will be the
              future of ticket sales putting the promoter and event organiser
              back in control of who has tickets to your event, the resale value
              and thus preventing fraud.
            </p>
          </IconCard>
        </IconCards>
        <ServicesSummary>
          <ImageContainer>
            <Image layout="fill" objectFit="cover" src={SummaryImg} />
          </ImageContainer>
          <h4>Why choose us?</h4>
          <p>
            Our innovative and unique stand designs bring your brand to life and
            help you to engage with your customers.
            <br /> <br />
            Our key focus is to deliver high quality, immersive exhibition
            solutions that successfully deliver your brand messaging, create
            engagment and increase footfall.
            <br /> <br />
            At Above and Beyond Solutions, we believe in forming a strong
            partnership. We advise you on the best solution for your project, be
            that a bespoke or modular solution. Then we will work with you all
            the way from concept to realisation of your exhibition stand.
          </p>
        </ServicesSummary>
      </main>
    </ServicesPage>
  );
}
