import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <script defer data-domain="prathna.heycoach.me" src="https://plausible.io/js/script.js"></script>
      </Head>
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
      <link rel="shortcut icon" href="/_Logo.png" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}