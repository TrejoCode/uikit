/**
 * @description Static page using Vite
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Icon } from "./atoms/Icons";
import "../src/styles/tailwind.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-white h-screen flex flex-col items-center justify-center gap-4">
      <figure>
        <img className="w-32" src="./brackets.svg" alt="Trejocode logo" />
      </figure>
      <h1 className="text-display-4 text-center">Trejocode UIKit</h1>
      <div className="flex gap-2 items-center bg-neutral-100 rounded-sm px-4 py-2">
        <code>
          <span>npm run storybook</span>
        </code>
        <Icon
          className="cursor-pointer"
          icon="Copy"
          color="#000000"
          size={16}
        />
      </div>
    </div>
  </StrictMode>,
);
