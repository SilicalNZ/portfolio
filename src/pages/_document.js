import Document, { Html, Head, Main, NextScript } from 'next/document';
import { personalInfo } from "@config";
import { ServerStyleSheet } from 'styled-components';

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
      <Html lang="en">
        <title>{personalInfo.name}</title>
        <meta name="description" content="Akira Chow is a software engineer specializing in building and maintaining beautiful and responsive mobile apps." ></meta>
        <meta content="Akira Chow is a software engineer specializing in building and maintaining beautiful and responsive mobile apps." property="og.description" ></meta>
        <meta content="en_US" property="og:locale" ></meta>
        <meta content="akirachow.dev" property="og:site_name" ></meta>
        <meta content="Akira Chow's Portfolio" property="og:title" ></meta>
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
