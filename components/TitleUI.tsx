import React from "react";
import { Logo } from "./icons";

export function TitleUI() {
  return (
    <div className="flex items-center gap-5">
      <Logo size="50" />
      <h1 className=" m-0   font-semibold text-5xl text-slate-900">
        ChatGPT Writer
      </h1>
    </div>
  );
}
