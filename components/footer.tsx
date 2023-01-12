import { TwitterBtn } from "./twitter";

export function Footer() {
  return (
    <>
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
        <br />
        <TwitterBtn />
      </section>
    </>
  );
}
