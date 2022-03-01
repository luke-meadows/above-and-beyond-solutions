import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import { Ctx } from '../lib/ctxProvider';
import ContactForm from '../components/ContactForm';
import {
  SectionBlurb,
  SectionContainer,
  SectionHeading,
} from '../styles/GlobalStyles';

export default function ContactUs() {
  const { setShouldStick, setStickyNavCoords } = useContext(Ctx);
  useEffect(() => {
    setShouldStick(true);
    setStickyNavCoords(0);
    return () => {
      setShouldStick(false);
    };
  });

  return (
    <StyledContact>
      <SectionContainer>
        <SectionHeading align="center">Contact us</SectionHeading>
        <ContactContainer>
          <ContactInfoContainer>
            <p className="contact-text">
              If you&apos;d like to discuss an upcoming project or campaign you
              have in mind - send us a message, we&apos;d love to hear from you{' '}
            </p>
            <div className="contact-row">
              <i className="icon-mail" />
              <p className="contact-info">
                hello@aboveandbeyondsolutions.co.uk
              </p>
            </div>
          </ContactInfoContainer>
          <ContactForm />
        </ContactContainer>
      </SectionContainer>
    </StyledContact>
  );
}

const StyledContact = styled.div`
  background: white;
  padding: 5rem 0 4rem 0;
  color: black;
  max-width: 100vw;
  overflow: hidden;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    padding-top: 0rem;
  }
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
  width: 100%;
  .contact-row {
    display: flex;
    font-size: 1rem;
    align-items: center;
    margin-bottom: 1rem;
    width: fit-content;
    margin: 0 auto;
  }
  .contact-text {
    margin-bottom: 2rem;
    max-width: 100%;
  }
  i {
    color: var(--pink);
    font-size: 2rem;
    text-align: center;
  }
  .icon-mobile {
    font-size: 6rem;
    /* margin: 0 -1.4rem; */
  }
  .contact-info {
    /* margin-left: 1rem; */
    font-weight: 100;
  }
  @media only screen and (max-width: 900px) {
    margin: 0;
    margin-top: 1rem;
    .contact-text {
      width: 100%;
    }
    i {
      color: var(--pink);
      font-size: 1.5rem;
    }

    .icon-mobile {
      font-size: 3rem;
      margin: 0;
    }
    .contact-row {
      font-size: 1rem;
      margin-right: 0rem;

      width: 25rem;
    }
    .contact-info {
      margin-left: 0rem;
    }
  }
  @media only screen and (max-width: 320px) {
    .contact-row {
      font-size: 0.9rem;
    }
    i {
      font-size: 1.2rem;
    }
  }
`;
