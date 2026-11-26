import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import './ScrollBackground.css';

// Precompute regular 3D Icosahedron vertices & edges (normalized)
const PHI = (1 + Math.sqrt(5)) / 2;
const RAW_ICO_VERTS = [
  [-1, PHI, 0], [1, PHI, 0], [-1, -PHI, 0], [1, -PHI, 0],
  [0, -1, PHI], [0, 1, PHI], [0, -1, -PHI], [0, 1, -PHI],
  [PHI, 0, -1], [PHI, 0, 1], [-PHI, 0, -1], [-PHI, 0, 1]
].map(([x, y, z]) => {
  const len = Math.hypot(x, y, z);
  return [x / len, y / len, z / len];
});

const ICO_EDGES = [];
for (let i = 0; i < RAW_ICO_VERTS.length; i++) {
  for (let j = i + 1; j < RAW_ICO_VERTS.length; j++) {
    const d = Math.hypot(
      RAW_ICO_VERTS[i][0] - RAW_ICO_VERTS[j][0],
      RAW_ICO_VERTS[i][1] - RAW_ICO_VERTS[j][1],
      RAW_ICO_VERTS[i][2] - RAW_ICO_VERTS[j][2]
    );
    if (d < 1.15) {
      ICO_EDGES.push([i, j]);
    }
  }
}

// Precompute inner 3D Octahedron vertices & edges
const OCT_VERTS = [
  [1, 0, 0], [-1, 0, 0],
  [0, 1, 0], [0, -1, 0],
  [0, 0, 1], [0, 0, -1]
];
const OCT_EDGES = [
  [0, 2], [0, 3], [0, 4], [0, 5],
  [1, 2], [1, 3], [1, 4], [1, 5],
  [2, 4], [4, 3], [3, 5], [5, 2]
];

function rotate3D(x, y, z, rx, ry, rz) {
  // Rotate around X
  const cosX = Math.cos(rx);
  const sinX = Math.sin(rx);
  const y1 = y * cosX - z * sinX;
  const z1 = y * sinX + z * cosX;

  // Rotate around Y
  const cosY = Math.cos(ry);
  const sinY = Math.sin(ry);
  const x2 = x * cosY + z1 * sinY;
  const z2 = -x * sinY + z1 * cosY;

  // Rotate around Z
  const cosZ = Math.cos(rz);
  const sinZ = Math.sin(rz);
  const x3 = x2 * cosZ - y1 * sinZ;
  const y3 = x2 * sinZ + y1 * cosZ;

  return [x3, y3, z2];
}

const ScrollBackground = () => {
  const { theme } = useTheme();
  const canvasRef = useRef(null);
  const progressBarRef = useRef(null);
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    let targetScroll = window.scrollY || 0;
    let smoothScroll = targetScroll;
    let pointerX = width * 0.7;
    let pointerY = height * 0.35;
    let smoothPointerX = pointerX;
    let smoothPointerY = pointerY;
    let rafId = 0;
    let startTime = performance.now();

    const onScroll = () => {
      targetScroll = window.scrollY || 0;
    };

    const onPointerMove = (e) => {
      pointerX = e.clientX;
      pointerY = e.clientY;
    };

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    const render = (now) => {
      const reduced = reducedMotionQuery.matches;
      const elapsed = (now - startTime) * 0.001;

      // Smooth spring-like scroll interpolation
      if (reduced) {
        smoothScroll = targetScroll;
      } else {
        smoothScroll += (targetScroll - smoothScroll) * 0.1;
      }

      const velocity = reduced ? 0 : targetScroll - smoothScroll;
      smoothPointerX += (pointerX - smoothPointerX) * 0.06;
      smoothPointerY += (pointerY - smoothPointerY) * 0.06;

      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const progress = Math.min(1, Math.max(0, smoothScroll / maxScroll));

      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${progress})`;
      }

      ctx.clearRect(0, 0, width, height);

      const isDark = themeRef.current === 'dark';
      const ink = isDark ? '250, 250, 250' : '9, 9, 11';

      // 1. Scroll-Reactive Architectural Vector Dot Grid
      const spacing = width < 640 ? 52 : 46;
      const parallaxY = (smoothScroll * 0.22) % spacing;
      const absVel = Math.abs(velocity);
      const streak = Math.min(absVel * 0.24, 20) * Math.sign(velocity || 1);

      ctx.lineWidth = 1;
      for (let x = spacing * 0.5; x < width; x += spacing) {
        for (let y = spacing * 0.5 - parallaxY; y < height + spacing; y += spacing) {
          const worldY = y + smoothScroll * 0.22;
          const wave = Math.sin(x * 0.005 + worldY * 0.006 - smoothScroll * 0.0045);

          const dx = x - smoothPointerX;
          const dy = y - smoothPointerY;
          const distSq = dx * dx + dy * dy;
          const repel = distSq < 32400 && !reduced ? (1 - distSq / 32400) * 8 : 0;
          const angle = Math.atan2(dy, dx);

          const px = x + Math.cos(angle) * repel + wave * 3.2;
          const py = y + Math.sin(angle) * repel;

          const baseAlpha = isDark ? 0.12 : 0.11;
          const waveAlpha = baseAlpha + (wave + 1) * 0.035;

          ctx.strokeStyle = `rgba(${ink}, ${waveAlpha.toFixed(3)})`;
          ctx.beginPath();
          if (absVel > 0.6 && !reduced) {
            ctx.moveTo(px, py - streak * 0.5);
            ctx.lineTo(px, py + streak * 0.5);
          } else {
            ctx.moveTo(px - 1.2, py);
            ctx.lineTo(px + 1.2, py);
            ctx.moveTo(px, py - 1.2);
            ctx.lineTo(px, py + 1.2);
          }
          ctx.stroke();
        }
      }

      // 2. Scroll-Driven 3D Wireframe Geodesic Polyhedra
      const baseRadius = Math.min(width, height) * (width < 768 ? 0.28 : 0.26);
      const cx =
        width < 768
          ? width * 0.5
          : width * (0.76 - 0.52 * Math.sin(progress * Math.PI));
      const cy = height * 0.5 + Math.cos(progress * Math.PI * 2) * (height * 0.07);

      const idleSpin = reduced ? 0 : elapsed * 0.09;
      const rx = smoothScroll * 0.0024 + idleSpin;
      const ry = smoothScroll * 0.0034 + idleSpin * 1.3;
      const rz = smoothScroll * 0.0015;

      // Outer Orbital Architectural Ring (tilted & rotated by scroll)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(smoothScroll * 0.0009);
      ctx.strokeStyle = `rgba(${ink}, ${isDark ? 0.08 : 0.07})`;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 8]);
      ctx.beginPath();
      ctx.ellipse(0, 0, baseRadius * 1.34, baseRadius * 0.52, 0.35, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      const fov = 560;
      const projectedIco = RAW_ICO_VERTS.map(([vx, vy, vz]) => {
        const [rx1, ry1, rz1] = rotate3D(
          vx * baseRadius,
          vy * baseRadius,
          vz * baseRadius,
          rx,
          ry,
          rz
        );
        const scale = fov / (fov + rz1);
        return [cx + rx1 * scale, cy + ry1 * scale, rz1];
      });

      // Draw outer Icosahedron edges with depth-modulated opacity
      ctx.lineWidth = 1;
      for (let i = 0; i < ICO_EDGES.length; i++) {
        const [a, b] = ICO_EDGES[i];
        const p1 = projectedIco[a];
        const p2 = projectedIco[b];
        const avgZ = (p1[2] + p2[2]) * 0.5;
        const depthNorm = (avgZ / baseRadius + 1) * 0.5; // 0 (far) -> 1 (near)
        const alpha = (isDark ? 0.05 : 0.045) + depthNorm * (isDark ? 0.14 : 0.12);

        ctx.strokeStyle = `rgba(${ink}, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(p1[0], p1[1]);
        ctx.lineTo(p2[0], p2[1]);
        ctx.stroke();
      }

      // Draw vertex nodes
      ctx.fillStyle = `rgba(${ink}, ${isDark ? 0.26 : 0.22})`;
      for (let i = 0; i < projectedIco.length; i++) {
        const [px, py] = projectedIco[i];
        ctx.fillRect(px - 1.5, py - 1.5, 3, 3);
      }

      // Draw counter-rotating inner Octahedron
      const innerRadius = baseRadius * 0.52;
      const projectedOct = OCT_VERTS.map(([vx, vy, vz]) => {
        const [rx1, ry1, rz1] = rotate3D(
          vx * innerRadius,
          vy * innerRadius,
          vz * innerRadius,
          -rx * 1.35,
          -ry * 1.15,
          -rz
        );
        const scale = fov / (fov + rz1);
        return [cx + rx1 * scale, cy + ry1 * scale];
      });

      ctx.strokeStyle = `rgba(${ink}, ${isDark ? 0.11 : 0.09})`;
      ctx.beginPath();
      for (let i = 0; i < OCT_EDGES.length; i++) {
        const [a, b] = OCT_EDGES[i];
        ctx.moveTo(projectedOct[a][0], projectedOct[a][1]);
        ctx.lineTo(projectedOct[b][0], projectedOct[b][1]);
      }
      ctx.stroke();

      // 3. Right-Edge Architectural Scroll Ruler Ticks (desktop/tablet)
      if (width >= 768) {
        const tickGap = 24;
        const tickOffset = (smoothScroll * 0.45) % (tickGap * 5);
        ctx.strokeStyle = `rgba(${ink}, ${isDark ? 0.14 : 0.12})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let i = -5; i < Math.ceil(height / tickGap) + 5; i++) {
          const ty = i * tickGap - tickOffset;
          if (ty < 0 || ty > height) continue;
          const isMajor = i % 5 === 0;
          const len = isMajor ? 10 : 4;
          ctx.moveTo(width - len - 6, ty);
          ctx.lineTo(width - 6, ty);
        }
        ctx.stroke();
      }

      if (!reduced) {
        rafId = window.requestAnimationFrame(render);
      }
    };

    rafId = window.requestAnimationFrame(render);

    const onReducedChange = () => {
      window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(render);
    };
    reducedMotionQuery.addEventListener('change', onReducedChange);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointerMove);
      reducedMotionQuery.removeEventListener('change', onReducedChange);
    };
  }, [theme]);

  return (
    <div className="scroll-bg-root" aria-hidden="true">
      <div className="scroll-progress-track">
        <div ref={progressBarRef} className="scroll-progress-bar" />
      </div>
      <canvas ref={canvasRef} className="scroll-bg-canvas" />
    </div>
  );
};

export default ScrollBackground;
