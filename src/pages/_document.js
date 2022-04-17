import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { metadata } from '@config';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang={metadata.lang}>
        <meta content={metadata.description} name="description"  ></meta>
        <meta content={metadata.description} property="og.description" ></meta>
        <meta content={metadata.locale} property="og:locale" ></meta>
        <meta content={metadata.url} property="og:site_name" ></meta>
        <meta content={metadata.title} property="og:title" ></meta>
        <link rel="shortcut icon" href="/favicon.ico" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    )
  }
}

export default MyDocument
