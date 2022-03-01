import '../styles/globals.css';
import '../styles/fontello/css/fontello.css';
import Page from '../components/Page';
import { CtxProvider } from '../lib/ctxProvider';
import Head from 'next/head';
import logo from '/assets/logos/thumbnail-white-logo.svg';

function MyApp({ Component, pageProps }) {
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
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default MyApp;
