import Link from "next/link";
import React from "react";
import { Logo } from "./icons";

export function TitleUI() {
  return (
    <Link className="no-underline" href={"/"}>
      <div className="flex items-center gap-5 ">
        <Logo size="50" />
        <h1 className=" m-0 font-semibold text-4xl lg:text-5xl text-[#4F5D73]">
          ChatGPT Writer
        </h1>
      </div>
    </Link>
  );
}
