/* eslint-disable react/no-unescaped-entities */

import { Header } from "../components/header";

import { Footer } from "../components/footer";

import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Header />
      <main className="prose prose-slate lg:w-[900px] lg:max-w-[900px] mx-auto flex h-full">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32">
          <div></div>

          <h1 className="">Page not found 🫤</h1>

          <h3>Let me know so that I can fix it: hey@gourav.io</h3>
          <hr />
          <h2 className="my-16">
            Go to ChatGPT Writer extension Homepage <br />
            <Link className="font-extrabold" href={"/"}>
              https://chatgptwriter.ai
            </Link>
          </h2>

          <Footer />
        </div>
      </main>
    </>
  );
}
