import Document, { Html, NextScript, Main, Head } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;600&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" type="image/svg+xml" href="/favicon.svg" />

          <meta name="description" content="Worldtrip" />

          <meta property="og:site_name" content="Worldtrip" />

          <meta property="og:title" content="Worldtrip" />
          <meta property="og:description" content="Worldtrip" />

          <meta property="og:image" content="/images/thumb.png" />
          <meta property="og:image:type" content="image/png" />

          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Worldtrip" />
          <meta name="twitter:description" content="Worldtrip" />
          <meta name="twitter:image" content="/images/thumb.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
