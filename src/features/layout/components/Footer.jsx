import React from "react";

export const Footer = () => {
  return (
    <footer
      className="text-center py-4 mt-auto"
      style={{
        background: "linear-gradient(to right, #0f0f0f, #1a1a1a)",
        borderTop: "1px solid #2c2c2c",
        color: "#aaa",
      }}
    >
      <div className="container">
        <small style={{ letterSpacing: "1px" }}>
          © 2026 - <span style={{ color: "#d4af37", fontWeight: "600" }}>LUXCARS</span> | 
          <span style={{ color: "#ffffff" }}> Mariel Susej Hernández Mangarre</span>
        </small>
      </div>
    </footer>
  );
};