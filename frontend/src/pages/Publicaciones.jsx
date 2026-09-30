import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiFetch from "../services/api";

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
    <div>
      <h1>Publicaciones</h1>
      <button onClick={cerrarSesion}>Cerrar sesión</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {publicaciones.map((publicacion) => (
          <li key={publicacion.id}>
            {publicacion.titulo} — ${publicacion.precio} — vendedor:{" "}
            {publicacion.vendedor.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Publicaciones;