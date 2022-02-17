import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import MobileNav from './MobileNav';
import { useContext } from 'react';
import { Ctx } from '../lib/ctxProvider';
export default function Page({ children }) {
  return (
    <StyledPage>
      <Head>
        <title>Above & Beyond Solutions</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <MobileNav />
      <>
        <Header />
        {children}
      </>
      <Footer />
    </StyledPage>
  );
}

const StyledPage = styled.div`
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  background: white;
  min-width: 100vw;
  min-height: 100vh;
  --pink: #e4526f;
  --white: white;
  --black: #040404;
  --gray: #505050;
  --padding: 5rem;
  --header-height: 6rem;
  --header-nav-display: block;
  --header-contact-display: flex;
  --mobile-menu-icon-display: none;

  --hero-header-text: 3.5rem;
  --hero-text: 1.4rem;

  --service-hero-header: 3.5rem;
  --service-hero-text: 1.5rem;

  --section-heading-text: 2.1rem;
  --section-heading-padding: 2rem 5rem;
  --service-section-tagline: 1.5rem;

  --partners-grid-gap: 6rem;
  --partners-grid-template-cols: repeat(6, 1fr);

  --service-card-grid-cols: repeat(4, 1fr);
  --service-card-header: 1.5rem;

  --footer-nav-width: 60rem;

  --microservice-grid-cols: repeat(3, 1fr);

  
  @media only screen and (max-width: 415px) {
    --padding: 1rem;
    --header-height: 4rem;
    --header-nav-display: none;
    --header-contact-display: none;
    --mobile-menu-icon-display: initial;

    --hero-header-text: 2rem;
    --hero-text: 1.3rem;

    --service-hero-header: 2rem;
    --service-hero-text: 1rem;
    --service-section-tagline: 1rem;

    --section-heading-text: 1.5rem;
    --section-heading-padding: 2rem 1rem;

    --partners-grid-gap: 1rem;
  --partners-grid-template-cols: repeat(4, 1fr);


    --service-card-grid-cols: repeat(1, 1fr);
    --service-card-header: 1.2rem;

    --footer-nav-width: 100%;

    --microservice-grid-cols: repeat(1, 1fr);

    }
    @media(max-width: 375px) and (max-height: 667px) {
      --service-hero-header: 1.8rem;
      --service-hero-text: 0.8rem;
    }
    @media(max-width: 375px) and (max-height: 568px) {
      --service-hero-header: 1.5rem;
    }
}
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  overscroll-behavior: none;
}
*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3 {
  line-height: 2;
}

li {
  list-style: none;
}
button {
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  background: var(--pink);
  padding: 0.5rem;
  color: black;
  display: block;
  outline: none;
  border: none;
  min-width: 6rem;
  cursor: pointer;
  font-weight: 400;
}

a {
  text-decoration: none;
  margin: 0;
  padding: 0;
  color: black;
}

`;

const InnerScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;
