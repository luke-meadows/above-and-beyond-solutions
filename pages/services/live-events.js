import {
  IconCard,
  IconCards,
  ImageContainer,
  ServicesHeader,
  ServicesPage,
  ServicesSummary,
} from '../../styles/ServicesStyles';
import Hero from '../../public/assets/service-heros/live-events-hero.png';
import SummaryImg from '../../public/assets/service-summary-imgs/events-summary-img.png';
import ServiceBackgroundImage from '../../components/ServiceBackgroundImage';
import ServicesHero from '../../components/ServicesHero';
import Image from 'next/image';
import Link from 'next/link';
import { SectionBlurb, SectionHeading } from '../../styles/GlobalStyles';

export default function LiveEvents() {
  return (
    <ServicesPage>
      <ServicesHero>
        <ServiceBackgroundImage img={Hero} position="center" brightness="0.3" />

        <h2>Live Events</h2>
        <p>
          Our 15 years of live event experience means we&apos;re proficient in
          not only building and delivering the event but also organising
          everything from logistics to technical delivery, promotions to talent
          booking, licensing to ticket sales.
        </p>
        <Link href="/contact-us">
          <button>BOOK A CALL</button>
        </Link>
      </ServicesHero>
      <main>
        <ServicesHeader>
          <SectionHeading>Host an amazing event</SectionHeading>
          <SectionBlurb>What we can help with:</SectionBlurb>
        </ServicesHeader>
        <IconCards>
          <IconCard>
            <i className="icon-tools card-icon" />
            <h5>Design and Build</h5>
            <p>
              Using an elite team of designers and event builders, no project is
              too big or small for us to deliver. From large scale festivals of
              up to 100k people to smaller scale events up to 1000 &#45; we can
              help with a solution.
            </p>
          </IconCard>
          <IconCard>
            <i className="icon-calendar card-icon" />
            <h5>Artist Booking</h5>
            <p>
              We can help secure you some of the biggest names in the industry
              to really add the wow factor to your line&#45;up of entertainment.
              Whether it&apos;s a guest speaker for an exhibition or an A list
              artist to headline a festival &#45; we can support.
            </p>
          </IconCard>
          <IconCard>
            <i className="icon-users card-icon" />
            <h5>Artist Liaison</h5>
            <p>
              Artist liaison is a key part in ensuring your event runs
              successfully. We can support with artist transportation, green
              rooms, purchasing riders, liaising with management and sending out
              advance packs with full event details.
            </p>
          </IconCard>
          <IconCard>
            <i className="icon-truck card-icon" />
            <h5>Transport and Logistics</h5>
            <p>
              Let us take the headache out of transport and logistics for your
              event. With approved suppliers we can support with the movement of
              your stock, goods, and staff across the UK and Europe.
            </p>
          </IconCard>
          <IconCard>
            <i className="icon-retweet card-icon" />
            <h5>Production and Back of House</h5>
            <p>
              Back of house&#47;festival management takes the &apos;on the
              day&apos; stress away from the organiser. We can manage everything
              back of house from crew catering, to artist riders, to stage
              managers and security.
            </p>
          </IconCard>
          <IconCard>
            <i className="icon-megaphone card-icon" />
            <h5>Marketing and Promotion</h5>
            <p>
              Creating high impact visual marketing campaigns that resonate with
              your customers to enhance and uplift ticket sales. We are experts
              in this field and would love to share some previous successes with
              you.
            </p>
          </IconCard>
        </IconCards>
        <ServicesSummary>
          <ImageContainer>
            <Image layout="fill" objectFit="cover" src={SummaryImg} />
          </ImageContainer>
          <h4>Why choose us?</h4>
          <p>
            Live brand experiences are more capable of engaging audiences
            effectively in a big world which is full of digital, sometimes
            impersonal marketing.
            <br />
            <br />
            Pulling off a music festival, concert tour, or small scale gig takes
            knowhow, expertise and the right industry contacts.
            <br />
            <br />
            Our 15 years live event experience means were proficient in not only
            building and delivering the event but also organising everything
            from logistics to technical delivery, promotions to talent booking,
            licensing to ticket sales. To put it simply; we&apos;ll take care of
            everything and put your music festival, concert or event on the map.
          </p>
        </ServicesSummary>
      </main>
    </ServicesPage>
  );
}
