"use client";

import React, { type ReactNode, type CSSProperties } from "react";

interface StarButtonProps {
  children: ReactNode;
  href?: string;
  height?: number | string;
  paddingX?: number | string;
  fontSize?: number | string;
}

export function StarButton({
  children,
  href,
  height = 46,
  paddingX = 26,
  fontSize = 14,
}: StarButtonProps) {
  {/* Outer Capsule Frame */}
  const outerStyle: CSSProperties = {
    position: "relative",
    zIndex: 3,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: typeof height === "number" ? `${height}px` : height,
    padding: "3px",
    borderRadius: "9999px",
    cursor: "pointer",
    textDecoration: "none",
    whiteSpace: "nowrap",
  };

  {/* Inner Capsule Frame — Solid Transparent Blue Tinted Glassmorphism */}
  const innerStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: typeof paddingX === "number" ? `${paddingX}px` : paddingX,
    paddingRight: typeof paddingX === "number" ? `${paddingX}px` : paddingX,
    borderRadius: "9999px",
    overflow: "hidden",
  };

  const content = (
    <div style={innerStyle}>
      {/* Button Text */}
      <span
        style={{
          position: "relative",
          zIndex: 10,
          fontSize: typeof fontSize === "number" ? `${fontSize}px` : fontSize,
          fontWeight: 600,
          color: "#FFFFFF",
          textShadow: "0 1px 4px rgba(0, 0, 0, 0.4)",
          lineHeight: 1,
          letterSpacing: "-0.01em",
        }}
      >
        {children}
      </span>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={outerStyle} className="blue-glass-cta navbar-glass-hover">
        {content}
      </a>
    );
  }

  return (
    <button style={outerStyle} className="blue-glass-cta navbar-glass-hover">
      {content}
    </button>
  );
}
