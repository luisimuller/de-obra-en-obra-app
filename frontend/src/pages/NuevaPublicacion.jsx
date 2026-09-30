import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiFetch from "../services/api";
import "./NuevaPublicacion.css";

function NuevaPublicacion() {
    const [categorias, setCategorias] = useState([]);
    const [categoriaId, setCategoriaId] = useState("");
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [unidad, setUnidad] = useState("");
    const [precio, setPrecio] = useState("");
    const [direccion, setDireccion] = useState("");
    const [error, setError] = useState("");
    const [cargando, setCargando] = useState(false);
    const navigate = useNavigate();
    const [categoriaNueva, setCategoriaNueva] = useState("");

    useEffect(() => {
        async function cargarCategorias() {
            try {
                const datos = await apiFetch("/categorias");
                setCategorias(datos);
            } catch (err) {
                setError("No se pudieron cargar las categorías");
            }
        }

        cargarCategorias();
    }, []);

    async function geocodificarDireccion(direccionTexto) {
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(direccionTexto)}`;
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        if (datos.length === 0) {
            throw new Error("No pudimos encontrar esa dirección. Probá escribirla distinto (con localidad y provincia).");
        }

        return { latitud: datos[0].lat, longitud: datos[0].lon };
    }

    async function manejarSubmit(evento) {
        evento.preventDefault();
        setError("");
        setCargando(true);

        try {
            let categoriaIdFinal = categoriaId;

            if (categoriaId === "otra") {
                if (!categoriaNueva.trim()) {
                    throw new Error("Escribí el nombre de la categoría nueva");
                }

                const categoriaCreada = await apiFetch("/categorias", {
                    method: "POST",
                    body: JSON.stringify({ nombre: categoriaNueva }),
                });

                categoriaIdFinal = categoriaCreada.id;
            }

            const { latitud, longitud } = await geocodificarDireccion(direccion);

            await apiFetch("/publicaciones", {
                method: "POST",
                body: JSON.stringify({
                    categoriaId: categoriaIdFinal,
                    titulo,
                    descripcion,
                    cantidad,
                    unidad,
                    precio,
                    latitud,
                    longitud,
                }),
            });

            navigate("/publicaciones");
        } catch (err) {
            setError(err.message);
        } finally {
            setCargando(false);
        }
    }

    return (
        <div className="nueva-publicacion">
            <div className="nueva-publicacion__tarjeta">
                <span className="nueva-publicacion__eyebrow">N.° 03 — Alta de material</span>
                <h1>Publicar un material</h1>

                <form onSubmit={manejarSubmit}>
                    <div className="campo">
                        <label htmlFor="categoria">Categoría</label>
                        <select
                            id="categoria"
                            value={categoriaId}
                            onChange={(e) => setCategoriaId(e.target.value)}
                            required
                        >
                            <option value="">Elegí una categoría</option>
                            {categorias.map((categoria) => (
                                <option key={categoria.id} value={categoria.id}>
                                    {categoria.nombre}
                                </option>
                            ))}
                            <option value="otra">Otra (crear nueva)</option>
                        </select>
                    </div>

                    {categoriaId === "otra" && (
                        <div className="campo">
                            <label htmlFor="categoriaNueva">Nombre de la categoría nueva</label>
                            <input
                                id="categoriaNueva"
                                type="text"
                                value={categoriaNueva}
                                onChange={(e) => setCategoriaNueva(e.target.value)}
                                placeholder="Ej: Herramientas eléctricas"
                                required
                            />
                        </div>
                    )}

                    <div className="campo">
                        <label htmlFor="titulo">Título</label>
                        <input
                            id="titulo"
                            type="text"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            placeholder="Ej: Ladrillos huecos sobrantes"
                            required
                        />
                    </div>

                    <div className="campo">
                        <label htmlFor="descripcion">Descripción</label>
                        <textarea
                            id="descripcion"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            rows={3}
                            placeholder="Contá el estado, de dónde sobró, etc."
                        />
                    </div>

                    <div className="campo">
                        <label htmlFor="direccion">Dirección</label>
                        <input
                            id="direccion"
                            type="text"
                            value={direccion}
                            onChange={(e) => setDireccion(e.target.value)}
                            placeholder="Ej: Av. San Martín 1234, Santo Tomé, Santa Fe"
                            required
                        />
                    </div>

                    <div className="campo-fila">
                        <div className="campo">
                            <label htmlFor="cantidad">Cantidad</label>
                            <input
                                id="cantidad"
                                type="number"
                                value={cantidad}
                                onChange={(e) => setCantidad(e.target.value)}
                            />
                        </div>
                        <div className="campo">
                            <label htmlFor="unidad">Unidad (opcional)</label>
                            <input
                                id="unidad"
                                type="text"
                                value={unidad}
                                onChange={(e) => setUnidad(e.target.value)}
                                placeholder="Ej: bolsas, m2 — dejalo vacío si no aplica"
                            />
                        </div>
                    </div>

                    <div className="campo">
                        <label htmlFor="precio">Precio</label>
                        <input
                            id="precio"
                            type="number"
                            value={precio}
                            onChange={(e) => setPrecio(e.target.value)}
                            required
                        />
                    </div>

                    {error && <p className="mensaje-error">{error}</p>}

                    <div className="nueva-publicacion__acciones">
                        <button type="button" className="boton-secundario" onClick={() => navigate("/publicaciones")}>
                            Cancelar
                        </button>
                        <button type="submit" disabled={cargando}>
                            {cargando ? "Publicando..." : "Publicar"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default NuevaPublicacion;