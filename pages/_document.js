import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <meta
            name="google-site-verification"
            content="gQIh5NhrodmW9E8bJemSH2R1jB42DWs_0HM-WKzmIGI"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            src="/static/Nimbus-Sans-D-OT-Light-Extended_32750.ttf"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            src="/static/Nimbus-Sans-D-OT-Regular-Extended_32755.ttf"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            src="/static/Nimbus-Sans-D-OT-Bold-Extended_32745.ttf"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
