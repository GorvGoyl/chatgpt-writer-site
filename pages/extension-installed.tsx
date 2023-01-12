/* eslint-disable react/no-unescaped-entities */

import { Header } from "../components/header";

import { Footer } from "../components/footer";
import { CTAs } from "../components/contact";
import { Faq } from "../components/faq";
import { Privacy } from "../components/privacy";
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
            has been installed ✅{" "}
          </h1>

          <Link href={"/#how-to-use"}>
            <h2>See how to use it</h2>
          </Link>
          {/* <h5 className="text-xl mt-12 leading-relaxed">{description}</h5> */}

          <CTAs />
          <Faq />
          <Privacy />
          <Footer />
        </div>
      </main>
    </>
  );
}
