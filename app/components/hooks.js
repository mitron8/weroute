import { useEffect, useState } from "react";

export const useReveal = () => {
  useEffect(() => {
    const io = new IntersectionObserver(
      es => {
        es.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
          }
        });
      },
      {
        threshold: 0.08,
      }
    );

    document
      .querySelectorAll("[data-reveal],[data-stagger]")
      .forEach(el => io.observe(el));

    return () => io.disconnect();
  }, []);
};

export const useCounter = (end, active) => {
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!active) return;

    let cur = 0;
    const step = end / (2000 / 16);

    const t = setInterval(() => {
      cur = Math.min(cur + step, end);

      setV(Math.floor(cur));

      if (cur >= end) clearInterval(t);
    }, 16);

    return () => clearInterval(t);
  }, [active, end]);

  return v;
};