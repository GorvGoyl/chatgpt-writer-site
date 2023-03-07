/* eslint-disable react/no-unescaped-entities */

import { Header } from "../components/header";

import { Footer } from "../components/footer";

import Link from "next/link";
import { TitleUI } from "../components/TitleUI";

export default function Custom404() {
  return (
    <>
      <Header />
      <main className="prose prose-slate lg:w-[900px] lg:max-w-[900px] mx-auto flex h-full">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32">
          <TitleUI />
          <div></div>

          <h2 className="text-slate-600">
            Promote your product to 200k+ users on ChatGPT Writer Chrome
            Extension
          </h2>

          <div>
            <h4 className="text-slate-600 bg-slate-100 px-4 py-2 inline-block rounded">
              Only 1 slot left!
            </h4>
            <div className="mt-[18px]">
              <div className="px-6 pb-4 border-slate-300 border rounded-lg  inline-block">
                <h4 className="text-slate-600 block">Pricing: $100 / day </h4>
                <h4 className="text-slate-600 block">Contact: hey@gourav.io</h4>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
