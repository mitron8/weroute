
"use client";

export const I = ({
  d,
  s = 22,
  w = 1.6,
}) => (
  <svg
    width={s}
    height={s}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={w}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={d} />
  </svg>
);

/* NETWORK */
export const IcoNet = () => (
  <I d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
);

/* SHIELD */
export const IcoShield = () => (
  <I d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
);

/* CLOUD */
export const IcoCloud = () => (
  <I d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
);

/* TARGET */
export const IcoTgt = () => (
  <I d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm0-6a4 4 0 100-8 4 4 0 000 8z" />
);

/* SERVER */
export const IcoSrv = () => (
  <I d="M5 2h14a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1zm0 12h14a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6a1 1 0 011-1zM8 6h.01M8 18h.01" />
);

/* WIFI */
export const IcoWifi = () => (
  <I d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
);

/* AI / ZAP */
export const IcoZap = () => (
  <I d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
);

/* LAYER */
export const IcoLayer = () => (
  <I d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
);

/* LINK */
export const IcoLink = () => (
  <I d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
);

/* ACTIVITY */
export const IcoAct = () => (
  <I d="M22 12h-4l-3 9L9 3l-3 9H2" />
);

/* USER */
export const IcoUsr = () => (
  <I d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
);

/* CODE */
export const IcoCode = () => (
  <I d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
);

/* EYE */
export const IcoEye = () => (
  <I d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 100 6 3 3 0 000-6z" />
);

/* COG */
export const IcoCog = () => (
  <I d="M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.65 1.65 0 00.33 1.82" />
);

/* GLOBE */
export const IcoGlobe = () => (
  <I d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 0a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10zm-10 10h20" />
);

/* ARROW */
export const IcoArr = () => (
  <I d="M5 12h14M12 5l7 7-7 7" />
);
