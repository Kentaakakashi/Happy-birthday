import {Engine} from "./engine.js";
import {hearts} from "./particles.js";

const text = "Happy Birthday Kavimitha 🎀";
let i = 0;

(function type() {
  if (i < text.length) {
    Engine.qs("#typed").innerHTML += text[i++];
    setTimeout(type, 65);
  }
})();

hearts();

Engine.qs("#enter").onclick = async () => {
  await Engine.fadeOut();
  location.href = "hub.html";
};
