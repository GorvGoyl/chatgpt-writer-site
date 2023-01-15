import Head from "next/head";

const title = "ChatGPT Writer - Write emails and messages using AI";
export const description =
  "Free Chrome extension to generate entire emails and messages based on a few keywords using ChatGPT AI. All sites are supported.";

const liveDomain = "https://chatgptwriter.ai";
const pageURL = liveDomain;
const type = "website";
const twitterHandle = "@GorvGoyl";
const siteName = "ChatGPT Writer";
const ogImageURL = `${liveDomain}/og.jpg`;

export function Header() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="follow, index" />
        <meta name="title" content={title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={pageURL} />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" name="image" content={ogImageURL} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content={twitterHandle} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={ogImageURL} />
        <meta property="twitter:url" content={pageURL} />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>
    </>
  );
}
