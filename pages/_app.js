import '../styles/globals.css';
import '../styles/fontello/css/fontello.css';
import Page from '../components/Page';
import { CtxProvider } from '../lib/ctxProvider';

function MyApp({ Component, pageProps }) {
  return (
    <CtxProvider>
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
