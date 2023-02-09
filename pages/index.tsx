/* eslint-disable react/no-unescaped-entities */
import { TitleUI } from "../components/TitleUI";
import { ChromeLogo, Star } from "../components/icons";
import { formStyles } from "../styles/defaultStyles";
import { description, Header } from "../components/header";
import Image from "next/image";
import gmail_button from "../public/images/gmail_button.jpg";
import email_composer from "../public/images/email_composer.jpg";
import reply_generated_insert_reply from "../public/images/reply_generated_insert_reply.jpg";
import inserted_generated_reply from "../public/images/inserted_generated_reply.jpg";
// import launch_ext from "../public/images/launch_ext.jpg";
// import popup_window from "../public/images/popup_window.jpg";
// import extension_from_gmail from "../public/images/extension_from_gmail.jpg";

import launch_from_gmail from "../public/images/launch_from_gmail.jpg";
// import gmail_response from "../public/images/gmail_response.jpg";
import generate_responses from "../public/images/generate_responses.jpg";
import launch_from_any_site from "../public/images/launch_from_any_site.jpg";

import set_shortcut from "../public/images/set-shortcut.jpg";
import shortcuts from "../public/images/shortcuts.jpg";

// import { ChromeStars, ChromeUsers } from "../components/badge";
import { Faq } from "../components/faq";
import { Privacy } from "../components/privacy";
import { Footer } from "../components/footer";
import { Troubleshoot } from "../components/troubleshoot";
import { Contact } from "../components/contact";
import { extLink } from "../utils/constants";

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
              className={`${formStyles.buttonPrimary} gap-4 text-lg py-3 px-6`}
            >
              <ChromeLogo size="34" />
              Download Free Extension
            </a>
            <span className="flex flex-col gap-2 mt-7 mb-8">
              <div className="flex">
                <Star size="22" />
                <Star size="22" /> <Star size="22" /> <Star size="22" />
                <Star size="22" />
              </div>
              <div>
                <b>80,000+</b> happy users who don't like writing emails
              </div>
              {/* <ChromeStars
                id="pdnenlnelpdomajfejgapbdpmjkfpjkp"
                link="https://chrome.google.com/webstore/detail/chatgpt-writer-email-writ/pdnenlnelpdomajfejgapbdpmjkfpjkp/"
              />
              <ChromeUsers
                id="pdnenlnelpdomajfejgapbdpmjkfpjkp"
                link="https://chrome.google.com/webstore/detail/chatgpt-writer-email-writ/pdnenlnelpdomajfejgapbdpmjkfpjkp/"
              /> */}
            </span>
            <h5 className="text-base mt-4 text-slate-500 flex gap-2">
              <div>
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
              </div>
              <div>
                Highest quality responses that outcompete all other tools in the
                market
              </div>
            </h5>
            <h5 className="text-base mt-2 text-slate-500 flex gap-2">
              <div>
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
              </div>
              <div>
                Works in all Chromium-based browsers, such as Chrome, Brave, and
                Edge
              </div>
            </h5>
            <h5 className="text-base mt-2 text-slate-500 flex gap-2">
              <div>
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
              </div>
              <div>Works on all sites. Works even better on Gmail</div>
            </h5>
            {/* <h5 className="text-base mt-2 text-slate-500 flex gap-2">
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
            </h5> */}
            <h5 className="text-base mt-2 text-slate-500 flex gap-2">
              <div>
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
              </div>
              <div>All languages are supported</div>
            </h5>

            <h5 className="text-base mt-2 text-slate-500 flex gap-2">
              <div>
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
              </div>
              <div>100% free and privacy friendly</div>
            </h5>
          </div>

          <section>
            <h2 id="demo">Product Demonstration</h2>
            <h5>
              In the below video, I generated an entire email using ChatGPT
              Writer to respond to a recruiter.
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

            <h2 id="how-to-use">How to use on all sites</h2>
            <ul className="list-decimal">
              <li>
                Install{" "}
                <a target={"_blank"} href={extLink}>
                  ChatGPT Writer
                </a>{" "}
                extension.
              </li>
              <li>
                Click on the extension icon.
                <Image
                  width={600}
                  src={launch_from_any_site}
                  alt="launch extension from any site"
                  placeholder="blur" // Optional blur-up while loading
                />
              </li>
              <li>
                A popup window will appear:
                <Image
                  width={600}
                  src={generate_responses}
                  alt="chatgpt writer generate responses"
                  placeholder="blur" // Optional blur-up while loading
                />
              </li>
              <li>
                Briefly enter what do you want to write about and hit{" "}
                <b>Generate Response</b> button. <br />
                <i>
                  (If this is your first time, you need to create a free account
                  on{" "}
                  <a target={"_blank"} href="https://chat.openai.com">
                    chat.openai.com
                  </a>
                  )
                </i>
              </li>
            </ul>

            <section>
              <details>
                <summary role="button ">
                  <h4 className=" cursor-pointer m-0 underline inline-block">
                    See how to set keyboard shortcut to launch extension
                  </h4>
                </summary>
                <ul className="list-decimal">
                  <li>
                    Go to extensions keyboard shortcuts page
                    <Image
                      src={shortcuts}
                      alt="go to extensions shortcuts"
                      placeholder="blur" // Optional blur-up while loading
                    />
                  </li>
                  <li>
                    Set keyboard shortcut for ChatGPT Writer
                    <Image
                      src={set_shortcut}
                      alt="Set keyboard shortcut for ChatGPT Writer"
                      placeholder="blur" // Optional blur-up while loading
                    />
                  </li>
                </ul>
              </details>
            </section>

            <h2 id="how-to-use-gmail">Enhanced support on Gmail</h2>
            <div>
              ChatGPT Writer extension is tightly integrated with Gmail for even
              better user experience.
              <h3>How to generate email reply on Gmail:</h3>
              <ul className="list-decimal">
                <li>Go to Gmail, open an email, and reply to it.</li>
                <li>
                  Click the <b>ChatGPT Writer extension</b> button in the Gmail
                  reply box.{" "}
                  <Image
                    src={launch_from_gmail}
                    alt="launch chatgpt writer button from gmail"
                    placeholder="blur" // Optional blur-up while loading
                  />
                </li>
                <li>
                  Briefly enter what you want to reply to and hit{" "}
                  <b>Generate reply </b>button. <br />{" "}
                  <i>
                    (If this is your first time, you need to create a free
                    account on{" "}
                    <a target={"_blank"} href="https://chat.openai.com">
                      chat.openai.com
                    </a>
                    )
                  </i>
                  <Image
                    src={email_composer}
                    alt="email composer"
                    placeholder="blur" // Optional blur-up while loading
                  />
                </li>

                <li>
                  Personalized email reply will be generated using AI. <br />{" "}
                  <Image
                    src={reply_generated_insert_reply}
                    alt="reply generated insert reply"
                    placeholder="blur" // Optional blur-up while loading
                  />
                </li>
                <li>
                  Hit the <b>Insert generated reply</b> button to insert it in
                  Gmail's text box.{" "}
                  <Image
                    src={inserted_generated_reply}
                    alt="Picture of the author"
                    placeholder="blur" // Optional blur-up while loading
                  />
                </li>
              </ul>
              {/* <h3>How to generate new email on Gmail:</h3>
              <ul className="list-decimal">
                <li>Go to Gmail and compose a new email.</li>
                <li>
                  Click the ChatGPT Writer extension button in the Gmail
                  textbox.{" "}
                  <Image
                    src={extension_from_gmail}
                    width={600}
                    alt="launch chatgpt writer from gmail"
                    placeholder="blur" // Optional blur-up while loading
                  />
                </li>
                <li>
                  Briefly enter what you want to write an email about and hit{" "}
                  <b>Generate Email</b> button.
                </li>
              </ul> */}
            </div>
          </section>

          <Contact />

          <Troubleshoot />

          <Faq />
          <Privacy />
          <Footer />
        </div>
      </main>
    </>
  );
}
