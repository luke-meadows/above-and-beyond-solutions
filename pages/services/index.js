import ServicesGraphic from '../../public/assets/service-heros/services-graphic.png';
import styled from 'styled-components';
import { Container } from '../../styles/GlobalStyles';
import Image from 'next/image';
import { useEffect, useContext } from 'react';
import { Ctx } from '../../lib/ctxProvider';
import ServiceLink from '../../components/services/ServiceLink';

export default function Services() {
  const { setShouldStick, setStickyNavCoords } = useContext(Ctx);

  useEffect(() => {
    setShouldStick(true);
    setStickyNavCoords(0);
    return () => {
      setShouldStick(false);
    };
  });

  return (
    <Container>
      <ServicesPage>
        <div className="inner">
          <Left>
            <Text>
              <h1>
                What <span>we</span> can do <span>for you</span>
              </h1>
              <p>
                We will always go Above Beyond to deliver and take the stress
                out of your event planning process.
              </p>
            </Text>
            <div>
              <ServiceLink link="/services/live-events" title="Live Events" />
              <ServiceLink link="/services/exhibitions" title="Exhibitions" />
              <ServiceLink link="/services/marketing" title="Brand Marketing" />
            </div>
          </Left>
          <div className="graphic-container">
            <Image src={ServicesGraphic} layout="responsive" alt="" />
          </div>
        </div>
      </ServicesPage>
    </Container>
  );
}

const ServicesPage = styled.section`
  /* padding: 6rem 0 2rem 0; */
  .inner {
    display: flex;
    justify-content: space-between;
    h1 {
      max-width: 12ch;
      margin-bottom: 0.5rem;
      span {
        color: var(--pink);
      }
    }
    p {
      max-width: 40ch;
      margin-bottom: 0.5rem;
    }
    @media only screen and (max-width: 1300px) {
      flex-direction: column;
    }
    @media only screen and (max-width: 800px) {
      h1 {
        max-width: 12ch;
      }
    }
  }
  .graphic-container {
    width: 70%;
    @media only screen and (max-width: 1300px) {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-right: 2rem;
  @media only screen and (max-width: 1300px) {
    margin-right: 0rem;
  }
`;

const Text = styled.div`
  margin-bottom: 2rem;
  @media only screen and (max-width: 800px) {
    margin-bottom: 0.5rem;
  }
`;
