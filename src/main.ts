import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

document.getElementsByTagName("header")[0].setAttribute("data-tauri-drag-region", '');

export default app;
