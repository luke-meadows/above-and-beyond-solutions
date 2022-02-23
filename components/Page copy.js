import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import styled from 'styled-components';
import MobileNav from './MobileNav';
import { Ctx } from '../lib/ctxProvider';
import { useContext } from 'react';
import { GlobalStyle } from '../styles/GlobalStyles';

export default function Page({ children }) {
  const { mobileNavActive } = useContext(Ctx);

  return (
    <StyledPage>
      {mobileNavActive && <OverLay />}
      <Head>
        <title>Above & Beyond Solutions</title>
        <meta
          name="description"
          content="Small agency care, with big agency capabilities"
        />
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

const OverLay = styled.div`
  background: black;
  height: 1000%;
  width: 100%;
  position: absolute;
  z-index: 4;
`;
