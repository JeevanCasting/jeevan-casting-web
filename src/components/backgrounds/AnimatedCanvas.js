import React, { useEffect, useRef } from "react";

function AnimatedCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w, h;
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // 🎨 Yellow theme colors
    const brandColors = [
      "#fbbf24", // yellow-400
      "#f59e0b", // yellow-500
      "#d97706", // yellow-600
      "#92400e", // yellow-700
      "#fde047", // yellow-300
    ];

    // 🔧 helper: apply opacity (alpha)
    function withAlpha(color, alpha = 0.2) {
      // trim spaces
      color = color.trim();

      // If it's already rgba(...) → replace last number with new alpha
      if (color.startsWith("rgba")) {
        return color.replace(/rgba?\(([^)]+)\)/, (match, contents) => {
          const parts = contents.split(",").map((c) => c.trim());
          return `rgba(${parts[0]}, ${parts[1]}, ${parts[2]}, ${alpha})`;
        });
      }

      // If it's rgb(...) → convert to rgba(...)
      if (color.startsWith("rgb")) {
        return color.replace(/rgb\(([^)]+)\)/, (match, contents) => {
          return `rgba(${contents}, ${alpha})`;
        });
      }

      // If it's hex (#rrggbb)
      if (color.startsWith("#")) {
        const bigint = parseInt(color.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      }

      // If nothing matches, return as-is
      return color;
    }

    // 🌌 Blob settings
    const blobs = Array.from({ length: 6 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 80 + Math.random() * 125, // 👈 radius range (size of blobs)
      dx: (Math.random() - 0.5) * 0.6, // 👈 horizontal speed
      dy: (Math.random() - 0.5) * 0.6, // 👈 vertical speed
      color: withAlpha(
        brandColors[Math.floor(Math.random() * brandColors.length)],
        0.15 // 👈 slightly reduced opacity for yellow theme
      ),
    }));

    function animate() {
      ctx.clearRect(0, 0, w, h);

      blobs.forEach((b) => {
        // movement
        b.x += b.dx;
        b.y += b.dy;

        // wrap-around screen edges
        if (b.x < -b.r) b.x = w + b.r;
        if (b.x > w + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = h + b.r;
        if (b.y > h + b.r) b.y = -b.r;

        // gradient fill
        const gradient = ctx.createRadialGradient(
          b.x,
          b.y,
          b.r * 0.3,
          b.x,
          b.y,
          b.r
        );
        gradient.addColorStop(0, b.color); // 👈 core color
        gradient.addColorStop(1, "transparent"); // 👈 fade out

        ctx.fillStyle = gradient;

        // draw blob
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }
    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
    ></canvas>
  );
}


export default AnimatedCanvas;