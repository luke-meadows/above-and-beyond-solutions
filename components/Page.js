import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import MobileNav from './MobileNav';
import { Ctx } from '../lib/ctxProvider';
import { useContext } from 'react';

export default function Page({ children }) {
  const { mobileNavActive } = useContext(Ctx);

  return (
    <StyledPage>
      {mobileNavActive && <OverLay />}
      <Head>
        <title>Above & Beyond Solutions</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MobileNav />
      <>
        <GlobalStyle />
        <Header />
        {children}
      </>
      <Footer withNav={true} />
    </StyledPage>
  );
}

const StyledPage = styled.div`
  min-height: 70vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Nimbus Sans';
  src: url('/static/Nimbus-Sans-D-OT-Light-Extended_32750.ttf') format('woff2');
  font-weight: 100;

} 
 
@font-face {
  font-family: 'Nimbus Sans';
  src: url('/static/Nimbus-Sans-D-OT-Regular-Extended_32755.ttf') format('woff2');
  font-weight: 300;
}

@font-face {
  font-family: 'Nimbus Sans';
  src: url('/static/Nimbus-Sans-D-OT-Bold-Extended_32745.ttf') format('woff2');
  font-weight: 500;
} 


html {
  box-sizing: border-box;
  background: black;
  min-width: 100vw;
  min-height: 100vh;
  overscroll-behavior: none;
  --padding: 5rem;

  // --- COLORS ---
  --white: white;
  --pink: #e4526f;
  --black: #040404;
  --gray: #505050;
  --red: rgb(255, 81, 81);

  // --- FONTSIZES --
  --hero-header-text: 3rem;
  --hero-text: 1.6rem;
  --service-hero-header: 3rem;
  --service-hero-text: 1.4rem;
  --section-heading-text: 2.2rem;
  --header-height: 6rem;
  --header-nav-display: block;
  --header-contact-display: flex;
  --mobile-menu-icon-display: none;
  --section-heading-padding: 2rem 5rem;
  --service-section-tagline: 1.5rem;
  --partners-grid-gap: 6rem;
  --partners-grid-template-cols: repeat(6, 1fr);
  --service-card-grid-cols: repeat(4, 1fr);
  --service-card-header: 1.5rem;
  --footer-nav-width: 60rem;
  --microservice-grid-cols: repeat(3, 1fr);

  
  @media only screen and (max-width: 415px) {
    --hero-header-text: 2rem;
    --hero-text: 1.3rem;
    --service-hero-header: 2rem;
    --service-hero-text: 1rem;
    --section-heading-text: 1.5rem;
    --padding: 1rem;
    --header-height: 4rem;
    --header-nav-display: none;
    --header-contact-display: none;
    --mobile-menu-icon-display: initial;
    --service-section-tagline: 1rem;
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
  font-family: 'Nimbus Sans';
  margin: 0;
  padding: 0;
  overscroll-behavior: none;
  box-sizing: inherit;
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
  font-family: 'Nimbus Sans';
  background: var(--pink);
  padding: 0.5rem;
  color: black;
  display: block;
  outline: none;
  border: none;
  min-width: 6rem;
  cursor: pointer;
  font-weight: 300;

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

const OverLay = styled.div`
  background: black;
  height: 1000%;
  width: 100%;
  position: absolute;
  z-index: 4;
`;
