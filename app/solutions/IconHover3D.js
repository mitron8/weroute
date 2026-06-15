"use client";

import React, { useState, useRef, useId, useMemo, useContext } from "react";
import { motion, MotionConfigContext, LayoutGroup } from "framer-motion";

// Transitions
const transition1 = {
  bounce: 0,
  delay: 0,
  duration: 0.4,
  type: "spring",
};

const transition2 = {
  delay: 0,
  duration: 0.4,
  ease: [0.44, 0, 0.56, 1],
  type: "tween",
};

const transformTemplate1 = (_, t) => `translate(-50%, -50%) ${t}`;

// Transition wrapper component
const Transition = ({ value, children }) => {
  const config = useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = useMemo(
    () => ({ ...config, transition }),
    [JSON.stringify(transition)]
  );

  return (
    <MotionConfigContext.Provider value={contextValue}>
      {children}
    </MotionConfigContext.Provider>
  );
};

const Variants = motion.create(React.Fragment);

export function IconHover3D({
  heading = "Architecture",
  text = "Enterprise technology consulting and implementation partner built for scale.",
  variant = "Default",
  className = "",
  style = {},
  width = "100%",
  height = "auto",
  ...restProps
}) {
  const [currentVariant, setCurrentVariant] = useState(variant);
  const refBinding = useRef(null);
  const defaultLayoutId = useId();

  const isHoverVariant = currentVariant === "Hover";
  const variants = [currentVariant === "Default" ? "default" : "hovered"];

  const handleMouseEnter = () => setCurrentVariant("Hover");
  const handleMouseLeave = () => setCurrentVariant("Default");

  // WEROUTE THEME VARIABLES
  const brandNavy = "#052440";
  const brandBlue = "#0d5ea8";
  const bgWhite = "#A7BF73";

  const cubeSliceVariants = {
    hovered: {
      borderColor: brandBlue,
      boxShadow: "0 10px 30px rgba(13, 94, 168, 0.2)",
    },
    default: {
      borderColor: brandNavy,
      boxShadow: "none",
    },
  };

  const titleTransition = {
    duration: 0.4,
    ease: [0.25, 0.46, 0.45, 0.94],
    type: "tween",
  };

  const sliceCubeVariants = {
    hovered: {
      rotateX: -28,
      rotateY: -43,
      scale: 1.1,
    },
    default: {
      rotateX: 23,
      rotateY: 33,
      scale: 0.7,
    },
  };

  const cornerScaleVariants = {
    hovered: { scale: 2.2, borderColor: brandBlue },
    default: { scale: 1, borderColor: brandNavy },
  };

  return (
    <div style={{ width, height }} className="w-full">
      <LayoutGroup id={defaultLayoutId}>
        <Variants animate={variants} initial={false}>
          <Transition value={transition1}>
            <motion.div
              {...restProps}
              className={`group relative overflow-hidden rounded-[32px] border border-[#052440]/10 bg-white/80 p-8 shadow-[0_10px_40px_rgba(5,36,64,0.03)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(5,36,64,0.08)] ${className}`}
              ref={refBinding}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={isHoverVariant ? handleMouseLeave : undefined}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "30px",
                ...style,
              }}
            >
              {/* Subtle hover gradient background */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#052440]/[0.02] via-transparent to-[#0d5ea8]/[0.05] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* --- ICON 3D CONTAINER --- */}
              <motion.div
                style={{
                  display: "flex",
                  flex: "none",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100px",
                  width: "100px",
                  position: "relative",
                  zIndex: 1,
                  borderRadius: "20px",
                  border: "1px solid rgba(5,36,64,0.1)",
                  backgroundColor: "rgba(247,249,252,0.5)",
                }}
              >
                <motion.div
                  style={{
                    height: "300px",
                    width: "300px",
                    position: "relative",
                    zIndex: 2,
                    scale: 0.25,
                  }}
                >
                  {/* Slice Cube */}
                  <motion.div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "28px",
                      left: "50%",
                      top: "50%",
                      position: "absolute",
                      transformStyle: "preserve-3d",
                      zIndex: 3,
                      transformPerspective: 1200,
                    }}
                    transformTemplate={transformTemplate1}
                    variants={sliceCubeVariants}
                    animate={isHoverVariant ? "hovered" : "default"}
                  >
                    <Transition value={transition2}>
                      <motion.div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "10px",
                          position: "relative",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        {/* Front */}
                        <motion.div
                          style={{
                            height: "34px",
                            width: "240px",
                            border: `4px solid ${brandNavy}`,
                            backgroundColor: bgWhite,
                            zIndex: 120,
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? "hovered" : "default"}
                        />
                        {/* Back */}
                        <motion.div
                          style={{
                            position: "absolute",
                            right: "0px",
                            top: "0px",
                            height: "34px",
                            width: "240px",
                            border: `4px solid ${brandNavy}`,
                            backgroundColor: bgWhite,
                            rotateY: 180,
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? "hovered" : "default"}
                        />
                        {/* Right */}
                        <motion.div
                          style={{
                            position: "absolute",
                            left: "120px",
                            top: "0px",
                            height: "34px",
                            width: "240px",
                            border: `4px solid ${brandNavy}`,
                            backgroundColor: bgWhite,
                            rotateY: 90,
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? "hovered" : "default"}
                        />
                        {/* Left */}
                        <motion.div
                          style={{
                            position: "absolute",
                            right: "120px",
                            top: "0px",
                            height: "34px",
                            width: "240px",
                            border: `4px solid ${brandNavy}`,
                            backgroundColor: bgWhite,
                            rotateY: -90,
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? "hovered" : "default"}
                        />
                        {/* Top */}
                        <motion.div
                          style={{
                            position: "absolute",
                            top: "-120px",
                            height: "240px",
                            width: "240px",
                            border: `4px solid ${brandNavy}`,
                            backgroundColor: bgWhite,
                            rotateX: 90,
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? "hovered" : "default"}
                        />
                        {/* Bottom */}
                        <motion.div
                          style={{
                            position: "absolute",
                            top: "-86px",
                            height: "240px",
                            width: "240px",
                            border: `4px solid ${brandNavy}`,
                            backgroundColor: bgWhite,
                            rotateX: 90,
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? "hovered" : "default"}
                        />
                      </motion.div>
                    </Transition>
                  </motion.div>

                  {/* Corner Elements */}
                  <motion.div
                    style={{
                      position: "absolute",
                      left: isHoverVariant ? "-6px" : "14px",
                      top: isHoverVariant ? "-6px" : "14px",
                      height: "24px",
                      width: "24px",
                      borderLeft: `4px solid ${brandNavy}`,
                      borderTop: `4px solid ${brandNavy}`,
                    }}
                    variants={cornerScaleVariants}
                    animate={isHoverVariant ? "hovered" : "default"}
                  />
                  <motion.div
                    style={{
                      position: "absolute",
                      left: isHoverVariant ? "-6px" : "14px",
                      top: isHoverVariant ? "280px" : "260px",
                      height: "24px",
                      width: "24px",
                      borderLeft: `4px solid ${brandNavy}`,
                      borderBottom: `4px solid ${brandNavy}`,
                    }}
                    variants={cornerScaleVariants}
                    animate={isHoverVariant ? "hovered" : "default"}
                  />
                  <motion.div
                    style={{
                      position: "absolute",
                      right: isHoverVariant ? "-6px" : "14px",
                      top: isHoverVariant ? "280px" : "260px",
                      height: "24px",
                      width: "24px",
                      borderRight: `4px solid ${brandNavy}`,
                      borderBottom: `4px solid ${brandNavy}`,
                    }}
                    variants={cornerScaleVariants}
                    animate={isHoverVariant ? "hovered" : "default"}
                  />
                  <motion.div
                    style={{
                      position: "absolute",
                      right: isHoverVariant ? "-6px" : "14px",
                      top: isHoverVariant ? "-6px" : "14px",
                      height: "24px",
                      width: "24px",
                      borderRight: `4px solid ${brandNavy}`,
                      borderTop: `4px solid ${brandNavy}`,
                    }}
                    variants={cornerScaleVariants}
                    animate={isHoverVariant ? "hovered" : "default"}
                  />
                </motion.div>
              </motion.div>

              {/* --- TEXT CONTENT CONTAINER --- */}
              <motion.div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {/* Heading with Hover Fill Effect */}
                <motion.div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                    height: "40px",
                    borderRadius: "8px",
                  }}
                >
                  {/* Background Text (Navy) */}
                  <span
                    className="px-3 text-2xl font-black tracking-tight"
                    style={{ color: brandNavy, position: "relative", zIndex: 1 }}
                  >
                    {heading}
                  </span>

                  {/* Animated Overlay Text (White) */}
                  <motion.span
                    className="px-3 text-2xl font-black tracking-tight"
                    style={{
                      position: "absolute",
                      left: 0,
                      color: bgWhite,
                      clipPath: `inset(0 ${isHoverVariant ? "0%" : "100%"} 0 0)`,
                      zIndex: 3,
                    }}
                    animate={{
                      clipPath: `inset(0 ${isHoverVariant ? "0%" : "100%"} 0 0)`,
                    }}
                    transition={titleTransition}
                  >
                    {heading}
                  </motion.span>

                  {/* Animated Background Fill (Navy) */}
                  <motion.div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: brandNavy,
                      transformOrigin: "left center",
                      zIndex: 2,
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHoverVariant ? 1 : 0 }}
                    transition={titleTransition}
                  />
                </motion.div>

                {/* Description Text */}
                <motion.div className="text-base leading-relaxed text-[#052440]/65">
                  {text}
                </motion.div>
              </motion.div>
            </motion.div>
          </Transition>
        </Variants>
      </LayoutGroup>
    </div>
  );
}