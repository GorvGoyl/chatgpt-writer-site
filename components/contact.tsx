import { extLink } from "../utils/constants";
import { PatreonLogo } from "./logo";

export function Contact() {
  return (
    <section>
      <h2 id="support">Contact</h2>
      <p>
        👋 Provide feedback, ask questions, and report bugs on{" "}
        <a
          target={"_blank"}
          className="text-slate-600"
          rel="noreferrer"
          href="https://github.com/GorvGoyl/ChatGPT-Writer/discussions"
        >
          Github
        </a>
        .
      </p>
    </section>
  );
}

export function CTAs() {
  return (
    <section className="bg-slate-200 rounded-lg px-5 py-2 mt-10">
      <p className="flex items-center gap-1">
        <span>
          ❤️ Support my work,{" "}
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://www.patreon.com/user?u=86740203"
          >
            Become my patron
          </a>
        </span>
        <PatreonLogo />
      </p>
      <p>
        👋 Please provide feedback, suggest features, ask questions, and report
        bugs on{" "}
        <a
          target={"_blank"}
          className="text-slate-600"
          rel="noreferrer"
          href="https://github.com/GorvGoyl/ChatGPT-Writer/discussions"
        >
          Github
        </a>
        .
      </p>

      <p>
        🤗 Support <b>ChatGPT Writer</b> by rating ★★★★★ on{" "}
        <a
          target={"_blank"}
          className="text-slate-600"
          rel="noreferrer"
          href={extLink}
        >
          Chrome Web Store
        </a>
        .
      </p>
      <p>🤗 Help others by sharing this extension</p>
    </section>
  );
}
