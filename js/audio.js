export class AudioLayer {
  constructor(src, loop=true) {
    this.audio = new Audio(src);
    this.audio.loop = loop;
  }
  play() { this.audio.volume = 0; this.audio.play(); this.fadeIn(); }
  fadeIn() {
    let v = 0;
    const i = setInterval(() => {
      v += 0.02; this.audio.volume = v;
      if (v >= 1) clearInterval(i);
    }, 80);
  }
  stop() {
    const i = setInterval(() => {
      this.audio.volume -= 0.03;
      if (this.audio.volume <= 0) {
        this.audio.pause();
        clearInterval(i);
      }
    }, 60);
  }
}
