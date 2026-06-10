import { useRef } from "react";

export const Tag = ({ children }) => (
  <span className="tag">
    {children}
  </span>
);

export const SH = ({
  eyebrow,
  title,
  sub,
}) => (
  <div className="section-header">
    <Tag>{eyebrow}</Tag>

    <h2>{title}</h2>

    <p>{sub}</p>
  </div>
);

export const Mag = ({
  href="#",
  cls,
  children,
}) => {
  const r = useRef(null);

  const mv = e => {
    const b = r.current.getBoundingClientRect();

    r.current.style.transform =
      `translate(
        ${(e.clientX-b.left-b.width/2)*.2}px,
        ${(e.clientY-b.top-b.height/2)*.2}px
      )`;
  };

  const ml = () => {
    r.current.style.transform="translate(0,0)";
  };

  return (
    <a
      ref={r}
      href={href}
      className={cls}
      onMouseMove={mv}
      onMouseLeave={ml}
    >
      {children}
    </a>
  );
};