import React from "react";
import { Logo } from "./icons";

export function TitleUI() {
  return (
    <div className="flex items-center gap-3">
      <Logo size="24" />
      <h3 className="text-xl font-medium text-slate-900">
        ChatGPT Email Writer
      </h3>
    </div>
  );
}
