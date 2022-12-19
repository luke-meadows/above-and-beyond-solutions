import '../styles/globals.css';
import '../styles/fontello/css/fontello.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import 'swiper/css/grid';
import Page from '../components/Page';
import { CtxProvider } from '../lib/ctxProvider';
import { Provider, createClient } from 'urql';
import Script from 'next/script';

// const client = createClient({
//   url: 'https://glacial-forest-62872.herokuapp.com/graphql',
// });

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Provider value={client}> */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','G-0XQDQYLL2Z');
      `}
      </Script>
      <CtxProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </CtxProvider>
      {/* </Provider> */}
    </>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default MyApp;
