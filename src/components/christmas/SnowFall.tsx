 import { useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  r: number;
  d: number;
  isSparkle: boolean;
}

const SnowfallEffect = () => {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.id = "snowfall";
    document.body.appendChild(canvas);

    const context = canvas.getContext("2d");
    if (!(context instanceof CanvasRenderingContext2D)) return;
    const ctx = context;

    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "9999";
    canvas.style.pointerEvents = "none";

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];

    function createParticles() {
      for (let i = 0; i < 35; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 3 + 1,
          d: Math.random() * 1 + 0.5,
          isSparkle: Math.random() > 0.85,
        });
      }
    }

    let angle = 0;

    function updateParticles() {
      angle += 0.002;
      particles.forEach((p, index) => {
        p.y += Math.cos(angle + p.d) + p.d;
        p.x += Math.sin(angle) * 0.8;

        if (p.y > canvas.height) {
          particles[index] = {
            x: Math.random() * canvas.width,
            y: -5,
            r: p.r,
            d: p.d,
            isSparkle: Math.random() > 0.85,
          };
        }
      });
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.fillStyle = p.isSparkle
          ? "rgba(255, 215, 0, 0.7)"
          : "rgba(255, 255, 255, 0.9)";
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
        ctx.fill();
      });

      updateParticles();
    }

    let animationFrame: number;
    const animate = () => {
      drawParticles();
      animationFrame = requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      document.body.removeChild(canvas);
    };
  }, []);

  return null;
};

export default SnowfallEffect;
