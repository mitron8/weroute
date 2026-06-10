export default function Logo({ h=38, onDark=true }) {
  const tc = onDark ? "#fff" : "#050d1f";

  return (
    <div style={{ display:"flex", alignItems:"center", gap:10 }}>
      <svg width={h} height={h} viewBox="0 0 44 44" fill="none">
        ...
      </svg>

      <div>
        <div
          style={{
            fontWeight:800,
            fontSize:h*0.54,
            color:tc,
          }}
        >
          WeRoute
        </div>

        <div>
          Beyond Boundaries, Bridging Connectivity
        </div>
      </div>
    </div>
  );
}