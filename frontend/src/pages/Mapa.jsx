import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../components/mapaIconos";
import apiFetch from "../services/api";
import "./Mapa.css";

const CENTRO_SANTA_FE = [-31.6333, -60.7];

function Mapa() {
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
    <div className="mapa-pantalla">
      <header className="mapa-pantalla__header">
        <div>
          <span className="tablon__eyebrow">N.° 04 — Mapa</span>
          <h1>Materiales cerca tuyo</h1>
        </div>
        <Link to="/publicaciones" className="mapa-pantalla__volver">
          Ver como lista
        </Link>
      </header>

      {error && <p className="mensaje-error">{error}</p>}

      <MapContainer center={CENTRO_SANTA_FE} zoom={12} className="mapa-pantalla__mapa">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {publicaciones.map((publicacion) => (
          <Marker key={publicacion.id} position={[publicacion.latitud, publicacion.longitud]}>
            <Popup>
              <strong>{publicacion.titulo}</strong>
              <br />
              ${publicacion.precio.toLocaleString("es-AR")}
              <br />
              <Link to={`/publicaciones/${publicacion.id}`}>Ver publicación</Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Mapa;