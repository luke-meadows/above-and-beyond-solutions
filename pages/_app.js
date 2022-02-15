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

export default MyApp;
