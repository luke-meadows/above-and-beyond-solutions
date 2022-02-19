import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import { Ctx } from '../lib/ctxProvider';
import ContactForm from '../components/ContactForm';
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
      <h2>Contact Us</h2>
      <ContactContainer>
        <ContactInfoContainer>
          <div className="contact-row">
            <i className="icon-mobile" />
            <p className="contact-info">+447 949 442844</p>
          </div>
          <div className="contact-row">
            <i className="icon-mail" />
            <p className="contact-info">hello@aboveandbeyondsolutions.co.uk</p>
          </div>
        </ContactInfoContainer>
        <ContactForm />
      </ContactContainer>
    </StyledContact>
  );
}

const StyledContact = styled.div`
  background: white;
  padding: 6rem 0 4rem 0;
  color: black;
  max-width: 100vw;
  overflow: hidden;
  h2 {
    line-height: 1;
    font-weight: 500;
    padding: 4rem 5rem;
    text-align: center;
    font-size: var(--section-heading-text);
    color: var(--pink);
    @media only screen and (max-width: 415px) {
      padding: 0;
      margin-bottom: 2rem;
    }
  }
`;

const ContactContainer = styled.div`
  margin: auto 0;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 var(--padding);
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 3rem;
  .contact-row {
    display: flex;
    margin-bottom: 1rem;
    margin-right: 2rem;
    font-size: 1rem;
    align-items: center;
  }
  i {
    color: var(--pink);
    font-size: 4rem;
    text-align: center;
  }
  .icon-mobile {
    font-size: 6rem;
    margin: 0 -1.4rem;
  }
  .contact-info {
    margin-left: 1rem;
    font-weight: 300;
  }
  @media only screen and (max-width: 900px) {
    margin: 0 0 2rem 0;
    i {
      color: var(--pink);
      font-size: 2rem;
    }
    .icon-mobile {
      font-size: 3rem;
      margin: 0;
    }
    .contact-row {
      font-size: 1rem;
      flex-direction: column;
      margin-right: 0rem;
    }
    .contact-info {
      margin-left: 0rem;
    }
  }
`;
