/* eslint-disable react/no-unescaped-entities */

import { Header } from "../components/header";

import { Footer } from "../components/footer";
import { CTAs } from "../components/contact";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="prose prose-slate lg:w-[900px] lg:max-w-[900px] mx-auto flex h-full">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32">
          <div></div>
          {/* <TitleUI /> */}

          <h1 className="">
            <Link className="font-extrabold" href={"/"}>
              ChatGPT Writer extension
            </Link>{" "}
            just got updated 🍾{" "}
          </h1>

          <section>
            <h2>What's new in v2.1.0 🎁</h2>

            <ul>
              <li>
                It works on all sites now.{" "}
                <Link href={"/#how-to-use"}>See how to use it</Link>
              </li>
              <li>
                Fixed the bug that sometimes caused it to get stuck in the
                middle of generating a response.
              </li>
              <li>
                <i>Insert generated response</i> action is fixed for LTR
                languages in Gmail.
              </li>
              <li>More cool features coming soon 🕺</li>
            </ul>

            <CTAs />
            <hr />
            <h2>Previous versions</h2>
            <h3>v1.0</h3>
            <ul>
              <li>Generate new emails and replies on Gmail.</li>
            </ul>
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
}
