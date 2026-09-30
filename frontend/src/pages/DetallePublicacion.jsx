import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import apiFetch, { API_URL } from "../services/api";
import { iconoPorCategoria } from "../components/Iconos";
import "./DetallePublicacion.css";

function DetallePublicacion() {
  const { id } = useParams();
  const [publicacion, setPublicacion] = useState(null);
  const [fotoActiva, setFotoActiva] = useState(0);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function cargarPublicacion() {
      try {
        const datos = await apiFetch(`/publicaciones/${id}`);
        setPublicacion(datos);
      } catch (err) {
        setError(err.message);
      }
    }

    cargarPublicacion();
  }, [id]);

  if (error) {
    return (
      <div className="detalle">
        <p className="mensaje-error">{error}</p>
        <Link to="/publicaciones">Volver al tablón</Link>
      </div>
    );
  }

  if (!publicacion) {
    return <div className="detalle">Cargando...</div>;
  }

  const mensajeWhatsapp = encodeURIComponent(
    `Hola! Te escribo por "${publicacion.titulo}" que publicaste en De Obra en Obra.`
  );
  const telefonoVendedor = publicacion.vendedor.telefono
    ? publicacion.vendedor.telefono.replace(/\D/g, "")
    : null;

  return (
    <div className="detalle">
      <Link to="/publicaciones" className="detalle__volver">
        ← Volver al tablón
      </Link>

      <div className="detalle__tarjeta">
        <div className="detalle__galeria">
          {publicacion.fotos.length > 0 ? (
            <>
              <img
                className="detalle__foto-principal"
                src={`${API_URL}${publicacion.fotos[fotoActiva].url}`}
                alt={publicacion.titulo}
              />
              {publicacion.fotos.length > 1 && (
                <div className="detalle__miniaturas">
                  {publicacion.fotos.map((foto, indice) => (
                    <img
                      key={foto.id}
                      src={`${API_URL}${foto.url}`}
                      alt=""
                      className={indice === fotoActiva ? "activa" : ""}
                      onClick={() => setFotoActiva(indice)}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="detalle__sin-foto">
              {iconoPorCategoria(publicacion.categoria.nombre)}
              <p>Sin fotos</p>
            </div>
          )}
        </div>

        <div className="detalle__info">
          <span className="detalle__categoria">[ {publicacion.categoria.nombre} ]</span>
          <h1>{publicacion.titulo}</h1>
          <p className="detalle__precio">${publicacion.precio.toLocaleString("es-AR")}</p>
          <p className="detalle__descripcion">{publicacion.descripcion}</p>

          <div className="detalle__meta">
            <span>
              Cantidad: {publicacion.cantidad}
              {publicacion.unidad ? ` ${publicacion.unidad}` : ""}
            </span>
            <span>Publica: {publicacion.vendedor.nombre}</span>
          </div>

          {telefonoVendedor ? (
            <a
              className="detalle__contactar"
              href={`https://wa.me/${telefonoVendedor}?text=${mensajeWhatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              Contactar por WhatsApp
            </a>
          ) : (
            <p className="detalle__sin-telefono">
              Este vendedor no cargó un teléfono de contacto.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetallePublicacion;