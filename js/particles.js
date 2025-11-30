export function hearts() {
  const c = document.createElement("canvas");
  document.body.appendChild(c);
  const ctx = c.getContext("2d");
  c.width = innerWidth; c.height = innerHeight;

  const p = Array.from({length:60}, () => ({
    x: Math.random()*c.width,
    y: Math.random()*c.height,
    s: Math.random()*6+2,
    v: Math.random()*1+0.5
  }));

  function draw() {
    ctx.clearRect(0,0,c.width,c.height);
    p.forEach(o => {
      ctx.fillStyle = "pink";
      ctx.fillRect(o.x,o.y,o.s,o.s);
      o.y -= o.v;
      if (o.y<0) o.y = c.height;
    });
    requestAnimationFrame(draw);
  }
  draw();
}
