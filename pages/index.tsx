import Head from "next/head";
import { TitleUI } from "../components/TitleUI";
import { ChromeLogo } from "../components/icons";
import { formStyles } from "../styles/defaultStyles";

export default function Home() {
  return (
    <>
      <Head>
        <title>ChatGPT Writer - Free Email writer for Gmail</title>
        <meta
          name="description"
          content="ChatGPT Writer - Email writer for Gmail (LinkedIn and Outlook coming soon)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className="prose mx-auto flex h-full">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32">
          <div></div>
          <TitleUI />
          <h5 className="text-xl mt-10 leading-relaxed">
            Free Chrome extension that crafts the personalized email reply in no
            time using AI (ChatGPT). Currently supported for Gmail. LinkedIn and
            Outlook coming soon.
          </h5>

          <div className="mt-10">
            <a
              href=""
              className={`${formStyles.buttonPrimary} gap-4 text-lg py-3 px-6`}
            >
              <ChromeLogo size="34" />
              Download Free Extension
            </a>
          </div>

          <section>
            <h2 id="how-it-works">How it works</h2>
            <div></div>
          </section>
          <section>
            <h2 id="privacy">Privacy</h2>
            <div>
              The ChatGPT Writer Extension has no ads, analytics, trackers, or
              cookies. It does not collect any user data. The only information
              shared with the AI model (chat.openai.com) is the prompt and
              context you provide in order to generate a response.
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
