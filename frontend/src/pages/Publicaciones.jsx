import { useEffect, useState } from "react";
import apiFetch from "../services/api";


function Publicaciones() {
  const [publicaciones, setPublicaciones] = useState([]);
  const [error, setError] = useState("");

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

  return (
    <div>
      <h1>Publicaciones</h1>
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