import React from "react";

export const Content = () => {
  const productos = [
    { id: 1, nombre: "Lamborghini", precio: 500599, img: "/img/carro1.jpg" },
    { id: 2, nombre: "Mercedes-Benz", precio: 450999, img: "/img/carro2.jpg" },
    { id: 3, nombre: "Audi", precio: 323342, img: "/img/carro3.jpg" },
    { id: 4, nombre: "Lamborghini SVJ", precio: 900999, img: "/img/carro4.jpg" },
    { id: 5, nombre: "Ford Mustang", precio: 299355, img: "/img/carro5.jpg" },
    { id: 6, nombre: "Toyota Land Cruiser", precio: 456552, img: "/img/carro6.jpg" },
  ];

  const formatoPrecio = (precio) => {
    return precio.toLocaleString("en-US");
  };

  return (
    <main
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(to right, #0f0f0f, #1a1a1a)",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className="row g-5">

          {/* PRODUCTOS */}
          <div className="col-lg-8">
            <h3
              className="mb-4 fw-bold"
              style={{ color: "#d4af37", letterSpacing: "1px" }}
            >
              🔥 Vehículos Exclusivos
            </h3>

            <div className="row">
              {productos.map((p) => (
                <div className="col-sm-6 col-md-4 mb-4" key={p.id}>
                  <div
                    className="card h-100 border-0 text-light"
                    style={{
                      background: "#1c1c1c",
                      borderRadius: "18px",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={p.img}
                      alt={p.nombre}
                      style={{
                        height: "210px",
                        objectFit: "cover",
                      }}
                    />

                    <div className="card-body d-flex flex-column">
                      <h6
                        className="fw-semibold"
                        style={{ color: "#ffffff" }}
                      >
                        {p.nombre}
                      </h6>

                      <p
                        className="fw-bold fs-5"
                        style={{ color: "#d4af37" }}
                      >
                        ${formatoPrecio(p.precio)} USD
                      </p>

                      <div className="d-flex gap-2 mt-auto">
                        <button
                          className="btn btn-sm flex-fill"
                          style={{
                            background: "transparent",
                            border: "1px solid #d4af37",
                            color: "#d4af37",
                            borderRadius: "12px",
                          }}
                        >
                          Editar
                        </button>

                        <button
                          className="btn btn-sm flex-fill"
                          style={{
                            background: "#8b0000",
                            border: "none",
                            color: "white",
                            borderRadius: "12px",
                          }}
                        >
                          Eliminar
                        </button>
                      </div>

                      <button
                        className="btn mt-3 fw-semibold"
                        style={{
                          background: "linear-gradient(45deg, #d4af37, #f1c40f)",
                          border: "none",
                          color: "#000",
                          borderRadius: "14px",
                        }}
                      >
                        <i className="bi bi-cart-plus"></i> Agregar al carrito
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>{/* FORMULARIO PREMIUM VISIBLE */}
<div className="col-lg-4">
  <div
    className="p-4 shadow-lg"
    style={{
      background: "linear-gradient(145deg, #1a1a1a, #2a2a2a)",
      borderRadius: "25px",
      border: "1px solid rgba(255,255,255,0.1)"
    }}
  >
    <h4 className="mb-4 text-center fw-bold text-warning">
      🏁 Finalizar Compra
    </h4>

    {/* NOMBRE */}
    <div className="mb-3">
      <label className="form-label text-white">
        Nombre completo
      </label>
      <input
        type="text"
        className="form-control bg-light text-dark border-0"
        placeholder="Escribe tu nombre"
        style={{ borderRadius: "12px" }}
      />
    </div>

    {/* CORREO */}
    <div className="mb-3">
      <label className="form-label text-white">
        Correo electrónico
      </label>
      <input
        type="email"
        className="form-control bg-light text-dark border-0"
        placeholder="correo@email.com"
        style={{ borderRadius: "12px" }}
      />
    </div>

    {/* DIRECCIÓN */}
    <div className="mb-4">
      <label className="form-label text-white">
        Dirección
      </label>
      <input
        type="text"
        className="form-control bg-light text-dark border-0"
        placeholder="Dirección completa"
        style={{ borderRadius: "12px" }}
      />
    </div>

    <hr style={{ borderColor: "#444" }} />

    <h6 className="text-warning fw-semibold mb-3">
      💳 Información de Pago
    </h6>

    {/* TARJETA */}
    <div className="mb-3">
      <input
        type="text"
        className="form-control bg-light text-dark border-0"
        placeholder="0000 0000 0000 0000"
        style={{ borderRadius: "12px" }}
      />
    </div>

    <div className="row">
      <div className="col-6 mb-3">
        <input
          type="text"
          className="form-control bg-light text-dark border-0"
          placeholder="MM/AA"
          style={{ borderRadius: "12px" }}
        />
      </div>
      <div className="col-6 mb-3">
        <input
          type="text"
          className="form-control bg-light text-dark border-0"
          placeholder="CVV"
          style={{ borderRadius: "12px" }}
        />
      </div>
    </div>

    {/* BOTÓN */}
    <button
      className="btn w-100 fw-bold mt-3"
      style={{
        background: "linear-gradient(45deg, #f5c518, #ffdd44)",
        border: "none",
        color: "#000",
        borderRadius: "15px",
        padding: "10px"
      }}
    >
      Confirmar compra 🚗
    </button>
  </div>
</div>
        </div>
      </div>
    </main>
  );
};