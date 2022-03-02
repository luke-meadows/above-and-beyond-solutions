import Footer from './Footer';
import Header from './Header';
import styled from 'styled-components';
import MobileNav from './MobileNav';
import { Ctx } from '../lib/ctxProvider';
import { useContext } from 'react';
import { GlobalStyle } from '../styles/GlobalStyles';
import Head from 'next/head';
import logo from '../public/assets/logos/thumbnail-black-logo.svg';

export default function Page({ children }) {
  const { mobileNavActive } = useContext(Ctx);

  return (
    <StyledPage>
      <Head>
        <title>Above & Beyond Solutions</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Above && Beyond Solutions" />
        {/* <meta property="og:description" content={ogDescription} /> */}
        <meta
          property="og:url"
          content="https://www.imdb.com/title/tt0117500/"
        />
        <meta
          name="description"
          content="Small agency care, with big agency capabilities"
        />
      </Head>
      {mobileNavActive && <OverLay />}
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

const OverLay = styled.div`
  background: black;
  height: 1000%;
  width: 100%;
  position: absolute;
  z-index: 4;
`;
