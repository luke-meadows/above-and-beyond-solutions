import {
  IconCard,
  IconCards,
  ServicesHeader,
  ServicesPage,
} from '../../styles/ServicesStyles';
import Hero from '../../public/assets/service-heros/live-events-hero.png';
import ServiceBackgroundImage from '../../components/ServiceBackgroundImage';
import ServicesHero from '../../components/ServicesHero';
export default function LiveEvents() {
  return (
    <ServicesPage>
      <ServicesHero>
        <ServiceBackgroundImage img={Hero} position="center" brightness="0.3" />

        <h2>
          Live Events <br />
        </h2>
        <p>
          An effective digital strategy is the blueprint for your business’
          success.
        </p>
        <button>
          <i className="icon-mobile" />
          BOOK A CALL
        </button>
      </ServicesHero>
      <main>
        <ServicesHeader>
          <h4>Host an Amazing Event</h4>
          <h5>What We Can Help With:</h5>
        </ServicesHeader>
        <IconCards>
          <IconCard>
            <i className="icon-tools card-icon" />
            <h5>Design & Build</h5>
            <p>
              Using a elite team of designers and event builders, no project is
              too big or small for us to deliver. From large scale festivals of
              up to 100k people to smaller scale events up to 1000 - we can help
              with a solution.
            </p>
          </IconCard>
          <IconCard>
            <i className="icon-calendar card-icon" />
            <h5>Artist Booking</h5>
            <p>
              We can help secure you some of the biggest names in the industry
              to really add the wow factor to your line up of entertainment.
              Whether it’s a guest speaker for an exhibition or a headline A
              list artist to headline a festival - we can support.
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
            <h5>Transport & Logistics</h5>
            <p>
              Let us take the headache out of Transport and Logistics for your
              event. With approved suppliers we can support with the movement of
              your stock, goods, and staff across the UK and Europe.
            </p>
          </IconCard>
          <IconCard>
            <i className="icon-retweet card-icon" />
            <h5>Production & Back of House</h5>
            <p>
              Back of house / festival management takes the ‘on the day’ stress
              away from the organiser. We can manage everything back of house
              from crew catering, to artist riders, to stage managers and
              security.
            </p>
          </IconCard>
          <IconCard>
            <i className="icon-megaphone card-icon" />
            <h5>Marketing & Promotion</h5>
            <p>
              Creating high impact visual marketing campaigns that resonate with
              your customers to help enhance and uplift ticket sales. We are
              experts in this field and would love to share some previous
              sucesses with you.
            </p>
          </IconCard>
        </IconCards>
      </main>
    </ServicesPage>
  );
}
