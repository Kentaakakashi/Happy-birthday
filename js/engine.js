export const Engine = {
  qs: s => document.querySelector(s),
  qsa: s => [...document.querySelectorAll(s)],
  wait: ms => new Promise(r => setTimeout(r, ms)),
  fadeOut: async () => {
    document.body.classList.add("fade-out");
    await Engine.wait(700);
  },
  fadeIn: () => document.body.classList.add("fade-in")
};
