import { useEffect, useState } from "react";
import apiFetch from "../services/api";
import { iconoPorCategoria } from "../components/Iconos";
import "./Publicaciones.css";
import { useNavigate, Link } from "react-router-dom";


function Publicaciones() {
  const [publicaciones, setPublicaciones] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function cargarPublicaciones() {
      try {
        const datos = await apiFetch("/publicaciones");
        setPublicaciones(datos);
      } catch (err) {
        setError(err.message);
      }
    }

    cargarPublicaciones();
  }, []);

  function cerrarSesion() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="tablon">
      <header className="tablon__header">
        <div>
          <span className="tablon__eyebrow">N.° 02 — Tablón</span>
          <h1>Materiales disponibles</h1>
        </div>
        <Link to="/publicaciones/nueva" className="tablon__nuevo">+ Publicar material</Link>
        <button onClick={cerrarSesion}>Cerrar sesión</button>
      </header>

      {error && <p className="mensaje-error">{error}</p>}

      {!error && publicaciones.length === 0 && (
        <p className="tablon__vacio">Todavía no hay publicaciones cargadas.</p>
      )}

      <ul className="tablon__lista">
        {publicaciones.map((publicacion) => (
          <li key={publicacion.id} className="aviso">
            <div className="aviso__franja" />
            <div className="aviso__icono">
              {iconoPorCategoria(publicacion.categoria.nombre)}
            </div>
            <div className="aviso__contenido">
              <div className="aviso__linea-superior">
                <h2>{publicacion.titulo}</h2>
                <span className="aviso__precio">
                  ${publicacion.precio.toLocaleString("es-AR")}
                </span>
              </div>
              <p className="aviso__descripcion">{publicacion.descripcion}</p>
              <div className="aviso__meta">
                <span>[ {publicacion.categoria.nombre} ]</span>
                <span>
                  {publicacion.cantidad}
                  {publicacion.unidad ? ` ${publicacion.unidad}` : ""}
                </span>
                <span>Publica: {publicacion.vendedor.nombre}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Publicaciones;