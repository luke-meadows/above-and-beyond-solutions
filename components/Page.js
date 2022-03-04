import Footer from './Footer';
import Header from './Header';
import styled from 'styled-components';
import MobileNav from './MobileNav';
import { Ctx } from '../lib/ctxProvider';
import { useContext } from 'react';
import { GlobalStyle } from '../styles/GlobalStyles';
import { NextSeo } from 'next-seo';
import Script from 'next/script';

export default function Page({ children }) {
  const { mobileNavActive } = useContext(Ctx);

  return (
    <StyledPage>
      <NextSeo
        title="Above and Beyond Solutions"
        description="Small agency care, with big agency capabilities."
        canonical="https://www.aboveandbeyondsolutions.co.uk"
        keywords="above and beyond solutions, above and beyond, marketing, live events, events, branding, brand activation, exhibitions, web development, photography, videography, sam stockmans"
        openGraph={{
          url: 'https://www.aboveandbeyondsolutions.co.uk',
          title: 'Above & Beyond Solutions',
          description: 'Small agency care, with big agency capabilities',
          type: 'website',
          images: [
            {
              url: 'https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/274350683_1927936664045430_534546427638794204_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGsVoDENZlT_2q41vjJzJ-it9KB2ar3lFS30oHZqveUVM1S1ZoPGOeEij_Lt_NOtNw&_nc_ohc=BTmBts3LQtEAX_N4q5j&_nc_ht=scontent-lhr8-1.xx&oh=00_AT-omvtYIBEy_afCwhTGjzeUyqQ-MoR7qsJbeWbuGqHGLg&oe=62258348',
              width: 800,
              height: 600,
              alt: 'Above & Beyond Solution',
              type: 'image/jpeg',
            },
            {
              url: 'https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/274350683_1927936664045430_534546427638794204_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGsVoDENZlT_2q41vjJzJ-it9KB2ar3lFS30oHZqveUVM1S1ZoPGOeEij_Lt_NOtNw&_nc_ohc=BTmBts3LQtEAX_N4q5j&_nc_ht=scontent-lhr8-1.xx&oh=00_AT-omvtYIBEy_afCwhTGjzeUyqQ-MoR7qsJbeWbuGqHGLg&oe=62258348',
              width: 900,
              height: 800,
              alt: 'Above & Beyond Solution',
              type: 'image/jpeg',
            },
          ],
          site_name: 'Above & Beyond Solutions',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      {mobileNavActive && <OverLay />}
      {mobileNavActive && <MobileNav />}

      <>
        <GlobalStyle />
        <Header />
        {children}
      </>
      <Footer withNav={true} />
      <Script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-eu1.hs-scripts.com/25614110.js"
      />
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
