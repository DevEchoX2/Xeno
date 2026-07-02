const splashes = [
  "wave mode online",
  "clean, calm, and fast",
  "polished for daily use",
  "fog, but make it modern",
  "built for smooth browsing",
  "Wave keeps things moving",
  "simple, sharp, reliable",
  "your workspace, refreshed",
  "search the web in style",
  "quietly professional",
  "soft fog, strong signal",
  "customizable by design",
];

const splashTextEl = document.getElementById("splash");
let splashIndex = Math.floor(Math.random() * splashes.length);

function renderSplash() {
  splashTextEl.textContent = splashes[splashIndex];
}

function applySplashFallbackColor() {
  const color = getComputedStyle(splashTextEl).color;
  const matches = color.match(/\d+(?:\.\d+)?/g);

  if (!matches || matches.length < 3) return;

  const [red, green, blue] = matches.slice(0, 3).map(Number);
  const luminance = (red * 299 + green * 587 + blue * 114) / 1000;

  splashTextEl.style.color = luminance > 210 ? "#111827" : "";
}

renderSplash();
applySplashFallbackColor();
setInterval(() => {
  splashIndex = (splashIndex + 1) % splashes.length;
  renderSplash();
  applySplashFallbackColor();
}, 2800);
