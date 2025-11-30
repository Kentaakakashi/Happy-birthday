import {Progress} from "./progress.js";
import {Engine} from "./engine.js";

Engine.qsa(".map button").forEach(btn => {
  const key = btn.dataset.key;

  if (!Progress.allowed(key)) {
    btn.classList.add("locked");
    btn.disabled = true;
  }

  btn.onclick = async () => {
    await Engine.fadeOut();
    location.href = `pages/${key}.html`;
  };
});
