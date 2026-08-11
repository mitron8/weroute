"use client";
import { useEffect, useRef } from 'react';

export default function WaterRippleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let ripples = [];
    let animationFrameId;
    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;
    
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    const render = () => {
      // Clear the canvas to be completely transparent so the CSS background shows through
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Smoothly interpolate current spotlight position towards target position
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

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
        ctx.strokeStyle = `rgba(183, 243, 107, ${r.alpha})`; // Accent green ripple
        ctx.lineWidth = 1 + (r.radius * 0.02);
        ctx.stroke();
        
        // Secondary inner refraction wave
        if (r.radius > 20) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius - 15, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 191, 255, ${r.alpha * 0.4})`; // Cyan inner ripple
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      
      // Only spawn ripples if the mouse is actually hovering over the footer area
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
      
      // Throttle drops so it looks like fluid wakes rather than a solid line
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
    };
    
    // Also add a ripple on click for a "stone dropped in pond" effect
    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      
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
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
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
