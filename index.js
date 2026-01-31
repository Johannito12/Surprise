// pour les paillettes
const sparkleCount = 600;
const sparkles = [];

function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";

  sparkle.style.left = Math.random() * window.innerWidth + "px";
  sparkle.style.animationDuration = 2 + Math.random() * 3 + "s";

  document.body.appendChild(sparkle);

  sparkles.push({
    el: sparkle,
    x: Math.random() * window.innerWidth,
    y: -10,
    speed: 1 + Math.random() * 3,
    size: Math.random() * 4 + 2,
  });
}

for (let i = 0; i < sparkleCount; i++) {
  createSparkle();
}

function animateSparkles() {
  sparkles.forEach((s) => {
    s.y += s.speed;
    s.el.style.transform = `translate(${s.x}px, ${s.y}px) scale(${s.size / 6})`;

    if (s.y > window.innerHeight) {
      s.y = -10;
      s.x = Math.random() * window.innerWidth;
    }
  });

  requestAnimationFrame(animateSparkles);
}

animateSparkles();

