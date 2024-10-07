import React from "react";
import ReactDOM from "react-dom/client";
import { getCurrentWebviewWindow } from "@tauri-apps/api/webviewWindow";
import App from "./App";
import "./style.css";
import { hasCustomDecorations } from "./rustUtils";
const appWindow = getCurrentWebviewWindow()

(async () => {
  const customDecorations = await hasCustomDecorations();

  if (customDecorations) {
    document
      ?.getElementById("titlebar-minimize")
      ?.addEventListener("click", () => appWindow.minimize());
    document
      ?.getElementById("titlebar-maximize")
      ?.addEventListener("click", () => appWindow.toggleMaximize());
    document
      ?.getElementById("titlebar-close")
      ?.addEventListener("click", () => appWindow.close());
  } else {
    // if window doesn't have custom decorations, remove the titlebar altogether
    document?.querySelector(".titlebar")?.remove();
  }
})();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
