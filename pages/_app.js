import '../styles/globals.css';
import '../styles/fontello/css/fontello.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import 'swiper/css/grid';
import Page from '../components/Page';
import { CtxProvider } from '../lib/ctxProvider';
import { Provider, createClient } from 'urql';

const client = createClient({
  url: 'https://glacial-forest-62872.herokuapp.com/graphql',
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
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
