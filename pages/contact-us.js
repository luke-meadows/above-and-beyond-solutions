import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import { Ctx } from '../lib/ctxProvider';
import ContactForm from '../components/contact/ContactForm';

import { Container } from '../styles/GlobalStyles';
import ContactHeader from '../components/contact/ContactHeader';
import ContactInfo from '../components/contact/ContactInfo';

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
    <Container>
      <StyledContact>
        <ContactHeader />
        <Main>
          <ContactForm />
          <ContactInfo />
        </Main>
      </StyledContact>
    </Container>
  );
}

const StyledContact = styled.div`
  background: var(--black);
  color: var(--black);
  overflow: hidden;
  /* aspect-ratio: 1; */
  padding: 4rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 2rem;
  border-bottom-left-radius: 0.5rem;
  @media only screen and (max-width: 800px) {
    padding: 1.6rem;
  }
`;

const Main = styled.div`
  display: flex;
  @media only screen and (max-width: 800px) {
    background: var(--black);
    flex-direction: column;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 3px;
    border-bottom-left-radius: 3px;
    overflow: hidden;
  }
`;
