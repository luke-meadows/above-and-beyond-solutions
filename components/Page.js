import Footer from './Footer';
import Header from './Header';
import styled from 'styled-components';
import MobileNav from './MobileNav';
import { Ctx } from '../lib/ctxProvider';
import { useContext } from 'react';
import { GlobalStyle } from '../styles/GlobalStyles';
import { NextSeo } from 'next-seo';

export default function Page({ children }) {
  const { mobileNavActive } = useContext(Ctx);

  return (
    <StyledPage>
      <NextSeo
        openGraph={{
          url: 'https://www.aboveandbeyondsolutions.co.uk/',
          title: 'Above And BEYOND',
          description: 'AA',
          images: [
            {
              url: 'https://www.aboveandbeyondsolutions.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthumbnail-white-logo.e8da362a.svg&w=1920&q=75',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
          site_name: 'SiteName',
        }}
      />
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
