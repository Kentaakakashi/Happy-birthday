const steps = ["memory","photos","letters","us","happy","another"];

export const Progress = {
  get() {
    return Number(sessionStorage.getItem("lv") || -1);
  },
  set(i) {
    sessionStorage.setItem("lv", i);
  },
  unlock(key) {
    const i = steps.indexOf(key);
    if (i > this.get()) this.set(i);
  },
  allowed(key) {
    return steps.indexOf(key) <= this.get() + 1;
  },
  reset() {
    sessionStorage.clear();
  }
};

window.onbeforeunload = () => Progress.reset();
