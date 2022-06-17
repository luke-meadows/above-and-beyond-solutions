import {
  IconCard,
  IconCards,
  ServicesHeader,
} from '../../styles/ServicesStyles';
import Hero from '../../public/assets/service-heros/marketing-hero.jpg';
import { SectionContainer, SectionHeading } from '../../styles/GlobalStyles';
import { servicesContent } from '../../lib/servicesContent';
import ServiceHero from '../../components/services/ServiceHero';
import CallToAction from '../../components/services/CallToAction';
import { v4 as uuidv4 } from 'uuid';

export default function MarketingPage() {
  const data = servicesContent.brandMarketing;
  return (
    <div>
      <ServiceHero title="Brand Marketing" img={Hero} />
      <main>
        <SectionContainer>
          <ServicesHeader>
            <SectionHeading align="left">
              Marketing for your business
            </SectionHeading>
            {data.blurb.map((blurb) => {
              const rando = uuidv4();
              return <p key={rando}>{blurb}</p>;
            })}
          </ServicesHeader>
          <h4>What we offer:</h4>
          <IconCards>
            {data.microServices.map((microService, i) => {
              const rando = uuidv4();
              return (
                <IconCard key={rando}>
                  <div className="icon-title">
                    <i className={`${microService.icon} card-icon`} />
                    <h3>{microService.title}</h3>
                  </div>
                  <p>{microService.description}</p>
                </IconCard>
              );
            })}
          </IconCards>
          <CallToAction />
        </SectionContainer>
      </main>
    </div>
  );
}
