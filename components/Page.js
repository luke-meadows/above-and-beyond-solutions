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
        title="Above & Beyond Solutions"
        description="Small agency care, with big agency capabilities."
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://scontent-lhr8-2.xx.fbcdn.net/v/t1.6435-9/144375383_10159109711442148_8884310596273802723_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHXbBoknZxF3LPAe06GIAyZjS-FR8Dfn0WNL4VHwN-fRR2o6CrDU2JH57-11EgkVw8&_nc_ohc=2JTK0WIWo6MAX8RlbUt&_nc_ht=scontent-lhr8-2.xx&oh=00_AT-Lzm-db4iEtkwjWviXrSAOjz7utm1TwhUcG9GoId63Gw&oe=62437B05',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: 'https://scontent-lhr8-2.xx.fbcdn.net/v/t1.6435-9/144375383_10159109711442148_8884310596273802723_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHXbBoknZxF3LPAe06GIAyZjS-FR8Dfn0WNL4VHwN-fRR2o6CrDU2JH57-11EgkVw8&_nc_ohc=2JTK0WIWo6MAX8RlbUt&_nc_ht=scontent-lhr8-2.xx&oh=00_AT-Lzm-db4iEtkwjWviXrSAOjz7utm1TwhUcG9GoId63Gw&oe=62437B05',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
          site_name: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
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
