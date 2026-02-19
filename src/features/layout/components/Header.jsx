import React from 'react'
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="py-4 bg-dark text-white mb-4 sticky-top">
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
          <div>
            <div className="d-flex align-items-center gap-2">
              <img
                src="/img/PolloAsado.jpg"
                alt="Logo"
                width="40"
                height="40"
                className="rounded-circle"
              />
              <h1 className="fw-bold fs-4">Pollo Asado</h1>
            </div>
          </div>

          <form className="w-50" role="search" id="searchForm">
            <div className="input-group">
              <span className="input-group-text bg-secondary text-white">
                <i className="bi bi-search"></i>
              </span>

              <input
                type="search"
                id="searchInput"
                className="form-control"
                placeholder="Buscar productos..."
                aria-label="Buscar productos"
              />

              <button type="submit" className="btn btn-primary">
                <i className="bi bi-filter"></i> Buscar
              </button>
              {/* Botón carrito */}
              <button className="btn btn-primary position-relative">
                <i className="bi bi-cart3 fs-4"></i>

                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  0
                </span>
              </button>

            </div>
          </form>
        </div>
      </div>
    </header>
  )
}
