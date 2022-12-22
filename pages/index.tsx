/* eslint-disable react/no-unescaped-entities */
import { TitleUI } from "../components/TitleUI";
import { ChromeLogo } from "../components/icons";
import { formStyles } from "../styles/defaultStyles";
import { Header } from "../components/header";
import Image from "next/image";
import gmail_button from "../public/images/gmail_button.jpg";
import email_composer from "../public/images/email_composer.jpg";
import reply_generated_insert_reply from "../public/images/reply_generated_insert_reply.jpg";
import inserted_generated_reply from "../public/images/inserted_generated_reply.jpg";
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
          <h5 className="text-xl mt-12 leading-relaxed">
            Free Chrome extension that crafts personalized email replies in no
            time using AI (ChatGPT). Currently supported for Gmail. LinkedIn and
            Outlook coming soon.
          </h5>

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
            <h5 className="text-base mt-4 text-slate-500">
              This extension works in all Chromium-based browsers, such as
              Chrome, Brave, and Edge.
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
                src={"./videos/chatgpt_writer_demo_1080.mp4"}
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
