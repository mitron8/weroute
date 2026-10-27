"use client";
import { useEffect, useRef } from 'react';

export default function WaterRippleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let ripples = [];
    let animationFrameId = null;
    let isVisible = false;
    let isRunning = false;
    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;
    let cachedRect = null;

    const updateRect = () => {
      if (canvas) {
        cachedRect = canvas.getBoundingClientRect();
      }
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      updateRect();
    };

    const startAnimation = () => {
      if (!isRunning && isVisible) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const render = () => {
      if (!isVisible) {
        isRunning = false;
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smoothly interpolate current spotlight position towards target position
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      currentX += dx * 0.08;
      currentY += dy * 0.08;

      // Draw the revealing spotlight glow
      if (currentX > -500) {
        const gradient = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, 600);
        gradient.addColorStop(0, "rgba(183, 243, 107, 0.08)");
        gradient.addColorStop(0.5, "rgba(0, 191, 255, 0.03)");
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Draw ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.speed;
        r.alpha -= r.decay;

        if (r.alpha <= 0) {
          ripples.splice(i, 1);
          continue;
        }

        // Primary water wave
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(183, 243, 107, ${r.alpha})`;
        ctx.lineWidth = 1 + (r.radius * 0.02);
        ctx.stroke();

        // Secondary inner refraction wave
        if (r.radius > 20) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius - 15, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 191, 255, ${r.alpha * 0.4})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // If there are ripples or spotlight is still moving, continue RAF
      const isSpotlightMoving = Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5;
      if (ripples.length > 0 || isSpotlightMoving) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        isRunning = false;
      }
    };

    // Use IntersectionObserver so offscreen footer consumes zero CPU/GPU
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          updateRect();
          startAnimation();
        } else {
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
          }
          isRunning = false;
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    resize();
    window.addEventListener('resize', resize, { passive: true });
    
    // Invalidate cached rect on scroll without calling getBoundingClientRect synchronously
    const handleScroll = () => {
      if (isVisible) {
        cachedRect = null;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle mouse events only when visible
    const handleMouseMove = (e) => {
      if (!isVisible) return;
      if (!cachedRect) updateRect();

      const rect = cachedRect;
      if (!rect) return;
      if (
        e.clientY < rect.top ||
        e.clientY > rect.bottom ||
        e.clientX < rect.left ||
        e.clientX > rect.right
      ) {
        return;
      }

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      targetX = x;
      targetY = y;

      if (ripples.length === 0 || Math.hypot(ripples[ripples.length - 1].x - x, ripples[ripples.length - 1].y - y) > 40) {
        ripples.push({
          x,
          y,
          radius: 0,
          speed: 1.2 + Math.random() * 0.8,
          alpha: 0.15 + Math.random() * 0.1,
          decay: 0.002 + Math.random() * 0.002
        });
      }

      startAnimation();
    };

    const handleClick = (e) => {
      if (!isVisible) return;
      if (!cachedRect) updateRect();

      const rect = cachedRect;
      if (!rect) return;
      if (
        e.clientY < rect.top ||
        e.clientY > rect.bottom ||
        e.clientX < rect.left ||
        e.clientX > rect.right
      ) {
        return;
      }

      ripples.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        radius: 0,
        speed: 2,
        alpha: 0.4,
        decay: 0.003
      });

      startAnimation();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
