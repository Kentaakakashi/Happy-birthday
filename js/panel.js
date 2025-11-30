let panel;

export function spawnPanel() {
  panel = document.createElement("div");
  panel.className = "panel";
  panel.innerHTML = `
    <button onclick="go('memory')">Memory</button>
    <button onclick="go('photos')">Photos</button>
    <button onclick="go('letters')">Letters</button>
    <button onclick="go('us')">Us</button>
  `;
  document.body.appendChild(panel);
}

window.go = p => location.href = `pages/${p}.html`;
