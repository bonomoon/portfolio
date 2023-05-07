import { Html, Head, Main, NextScript } from "next/document";

/**
 * Custom Document component in Next.js.
 * Use this component to modify the application's <html> and <body> tags,
 * add global styles or scripts, and configure other document-level settings.
 *
 * Note: This component is only rendered on the server side.
 * Do not include any application logic here.
 */
export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
