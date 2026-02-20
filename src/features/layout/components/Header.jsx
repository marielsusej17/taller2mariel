import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header
      className="sticky-top shadow"
      style={{
        background: "linear-gradient(90deg, #0f0f0f, #1a1a1a)",
        padding: "15px 0",
      }}
    >
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">

          {/* LOGO + TITULO */}
          <div className="d-flex align-items-center gap-3">

            <img
              src="/img/logo.jpg"
              alt="Logo"
              width="65"
              height="65"
              className="rounded-circle shadow"
              style={{
                border: "2px solid #d4af37",
              }}
            />

            <div>
              <h1
                className="fw-bold mb-0"
                style={{
                  fontSize: "1.4rem",
                  color: "#d4af37",
                  letterSpacing: "2px",
                }}
              >
                LUXCARS
              </h1>

              <small style={{ color: "#aaaaaa" }}>
                Drive the power of luxury
              </small>
            </div>

            <NavLink
              to="/props"
              className="ms-3 text-decoration-none fw-semibold"
              style={{
                color: "#ffffff",
                transition: "0.3s",
              }}
            >
              Props
            </NavLink>
          </div>

          {/* BUSCADOR + CARRITO */}
          <form className="w-100 w-md-50">
            <div className="d-flex align-items-center gap-3">

              {/* BUSCADOR PREMIUM */}
              <div
                className="d-flex align-items-center px-3"
                style={{
                  background: "#222",
                  borderRadius: "30px",
                  flex: 1,
                  border: "1px solid #333",
                }}
              >
                <i className="bi bi-search text-warning me-2"></i>

                <input
                  type="search"
                  placeholder="Buscar autos de lujo..."
                  style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "white",
                    width: "100%",
                    padding: "8px 0",
                  }}
                />

                <button
                  type="submit"
                  className="btn btn-sm"
                  style={{
                    background: "#d4af37",
                    color: "#000",
                    borderRadius: "20px",
                    padding: "5px 15px",
                    fontWeight: "600",
                  }}
                >
                  Buscar
                </button>
              </div>

              {/* CARRITO PREMIUM */}
              <button
                type="button"
                className="position-relative d-flex align-items-center justify-content-center"
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "#1c1c1c",
                  border: "1px solid #d4af37",
                  transition: "0.3s",
                }}
              >
                <i className="bi bi-cart3 fs-4 text-warning"></i>

                <span
                  className="position-absolute badge rounded-pill bg-danger"
                  style={{
                    top: "4px",
                    right: "4px",
                    fontSize: "0.65rem",
                  }}
                >
                  0
                </span>
              </button>

            </div>
          </form>

        </div>
      </div>
    </header>
  );
};