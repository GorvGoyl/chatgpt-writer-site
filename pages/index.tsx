/* eslint-disable react/no-unescaped-entities */
import { TitleUI } from "../components/TitleUI";
import { ChromeLogo } from "../components/icons";
import { formStyles } from "../styles/defaultStyles";
import { description, Header } from "../components/header";
import Image from "next/image";
import gmail_button from "../public/images/gmail_button.jpg";
import email_composer from "../public/images/email_composer.jpg";
import reply_generated_insert_reply from "../public/images/reply_generated_insert_reply.jpg";
import inserted_generated_reply from "../public/images/inserted_generated_reply.jpg";
import brave from "../public/images/brave.jpg";
const extLink =
  "https://chrome.google.com/webstore/detail/chatgpt-writer-email-writ/pdnenlnelpdomajfejgapbdpmjkfpjkp/";
export default function Home() {
  return (
    <>
      <Header />
      <main className="prose prose-slate lg:w-[900px] lg:max-w-[900px] mx-auto flex h-full">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32">
          <div></div>
          <TitleUI />
          <h5 className="text-xl mt-12 leading-relaxed">{description}</h5>

          <div className="mt-12">
            <a
              href={extLink}
              target="_blank"
              rel="noreferrer"
              className={`${formStyles.buttonPrimary} gap-4 text-lg py-3 px-6`}
            >
              <ChromeLogo size="34" />
              Download Free Extension
            </a>
            <h5 className="text-base mt-4 text-slate-500 flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              Works in all Chromium-based browsers, such as Chrome, Brave, and
              Edge.
            </h5>
            <h5 className="text-base mt-2 text-slate-500 flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              Tightly integrated with Gmail for best user experience
            </h5>
            <h5 className="text-base mt-2 text-slate-500 flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              Privacy friendly
            </h5>
            <h5 className="text-base mt-2 text-slate-500 flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              100% free
            </h5>
          </div>

          <section>
            <h2 id="demo">Demo</h2>
            <h5>
              In the below video, I generated an email to respond to a
              recruiter.
            </h5>
            <div>
              <video
                src={"./videos/chatgpt_writer_small_demo_compressed.mp4"}
                controls={true}
                autoPlay={false}
                muted={true}
                loop={true}
              />
            </div>

            <h2 id="how-to-use">How to use</h2>
            <div className="relative">
              <h5>
                Install the <a href={extLink}> ChatGPT Writer extension</a> from
                the Chrome Web Store. <br />
                Go to Gmail, open an email, and reply to it. <br />
                Click the <b>ChatGPT Writer extension</b> button in the Gmail
                reply box. <br />
                <i>
                  (reload the Gmail tab once if it was already opened before
                  installing the extension)
                </i>
              </h5>
              <Image
                src={gmail_button}
                alt="chatgpt writer button on gmail"
                placeholder="blur" // Optional blur-up while loading
              />
              <h5>
                Briefly enter what you want to reply to and hit{" "}
                <b>Generate reply </b>button. <br />
                <i>
                  (If this is your first time, you need to create a free account
                  on{" "}
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    href="https://chat.openai.com"
                  >
                    chat.openai.com
                  </a>
                  )
                </i>
              </h5>
              <Image
                src={email_composer}
                alt="email composer"
                placeholder="blur" // Optional blur-up while loading
              />
              <h5>
                Personalized email replies will be generated using AI. <br />{" "}
                Hit the <b>Insert generated reply</b> button to insert it in
                Gmail's text box.
              </h5>
              <Image
                src={reply_generated_insert_reply}
                alt="reply generated insert reply"
                placeholder="blur" // Optional blur-up while loading
              />
              <Image
                src={inserted_generated_reply}
                alt="Picture of the author"
                placeholder="blur" // Optional blur-up while loading
              />
            </div>
          </section>
          <section>
            <h2 id="support">Contact</h2>
            <div>
              Provide feedback, ask questions, and report bugs on{" "}
              <a
                target={"_blank"}
                className="text-slate-600"
                rel="noreferrer"
                href="https://github.com/GorvGoyl/ChatGPT-Writer/discussions"
              >
                Github
              </a>
              .
            </div>
          </section>

          <section>
            <h2 id="troubleshoot">Troubleshoot issues</h2>
            <h3>How to make it work on Brave browser</h3>
            If you are using Brave browser, follow these steps to make it work:
            <ul>
              <li>Go to brave://settings/shields</li>
              <li>
                Disable{" "}
                <span className="italic font-semibold">
                  Prevent sites from fingerprinting me based on my language
                  preferences
                </span>
                <Image
                  src={brave}
                  alt="Brave troubleshoot"
                  placeholder="blur"
                />
              </li>
            </ul>
          </section>
          <section>
            <h2 id="faq">Frequently asked questions</h2>
            <div className="space-y-3">
              <details className="">
                <summary
                  className="font-medium hover:text-slate-700"
                  role="button"
                >
                  Is it really 100% free?
                </summary>
                Yes
              </details>
              <details className="">
                <summary
                  className="font-medium hover:text-slate-700"
                  role="button"
                >
                  Does it access any sensitive email data?
                </summary>
                No. <br />
                Data sent to AI model when writing a new email: <br /> - The
                prompt you write in order to generate the email. <br /> <br />
                Data sent to AI model when replying to an email: <br /> 1.
                Previous email text content which you can edit and remove any
                sensitive information before generating the reply. <br /> 2. The
                prompt you write in order to generate the reply.
              </details>
              <details className="">
                <summary
                  className="font-medium hover:text-slate-700"
                  role="button"
                >
                  Which all languages does it support?
                </summary>
                All popular languages. Just mention the language in the text
                prompt. For example: "Write an email in German language about
                internship opportunity."
              </details>
            </div>
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

          <hr />
          <section className="mt-10 text-center  text-slate-600 text-sm">
            Made by Gourav (
            <a
              target={"_blank"}
              className="text-slate-600"
              rel="noreferrer"
              href="https://gourav.io"
            >
              Gourav.io
            </a>
            )
          </section>
        </div>
      </main>
    </>
  );
}
