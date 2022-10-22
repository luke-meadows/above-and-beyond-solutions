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

const client = createClient({
  url: 'https://glacial-forest-62872.herokuapp.com/graphql',
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Script
        id="googletagmanager"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-0XQDQYLL2Z`}
      />
      <Script strategy="lazyOnload" id="dataLayer">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-0XQDQYLL2Z', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <CtxProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </CtxProvider>
    </Provider>
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
