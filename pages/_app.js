import '../styles/globals.css';
import '../styles/fontello/css/fontello.css';
import Page from '../components/Page';
import { CtxProvider } from '../lib/ctxProvider';
import Head from 'next/head';

function MyApp({ Component, pageProps, logo }) {
  return (
    <CtxProvider>
      <Head>
        <title>Above & Beyond Solutions</title>
        <meta
          name="description"
          content="Small agency care, with big agency capabilities"
        />
        <meta property="og:image" content={logo} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </CtxProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  const logo = fetch('../public/assets/logos/thumbnail-white-logo.svg');
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps, logo };
};

export default MyApp;
