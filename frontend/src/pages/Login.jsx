import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiFetch from "../services/api";
import { IconoLadrillo, IconoCeramico, IconoAbertura, IconoMadera } from "../components/Iconos";
import "./Login.css";

function Login() {
  const [correo, setCorreo] = useState("");
  const [passwordHash, setPasswordHash] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);
  const navigate = useNavigate();

  async function manejarSubmit(evento) {
    evento.preventDefault();
    setError("");
    setCargando(true);

    try {
      const datos = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({ correo, passwordHash }),
      });

      localStorage.setItem("token", datos.token);
      navigate("/publicaciones");
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  }

  return (
    <div className="login-split">
      <div className="login-hero">
        <div className="login-hero__grilla" />
        <div className="login-hero__franja" />
        <div className="login-hero__contenido">
          <span className="login-hero__sello">N.° 01 — ACCESO</span>
          <h1 className="login-hero__titulo">
            De Obra
            <br />
            en Obra
          </h1>
          <p className="login-hero__bajada">
            <strong>Lo que sobra en una obra, falta en otra.</strong> <br /> Publicá, buscá y
            encontrá materiales cerca tuyo.
          </p>
          <ul className="login-hero__materiales">
            <li>
              <IconoLadrillo /> Ladrillos
            </li>
            <li>
              <IconoCeramico /> Cerámicos
            </li>
            <li>
              <IconoAbertura /> Aberturas
            </li>
            <li>
              <IconoMadera /> Maderas
            </li>
            <li className="login-hero__mas">+ Más</li>

          </ul>
        </div>
      </div>

      <div className="login-panel">
        <div className="login-panel__cinta">
          <div className="login-panel__cinta-texto">
            <span>VENDÉ LO QUE TE SOBRÓ — ENCONTRÁ LO QUE TE FALTA — </span>
            <span>VENDÉ LO QUE TE SOBRÓ — ENCONTRÁ LO QUE TE FALTA — </span>
          </div>
        </div>
        <div className="orden-trabajo">
          <h2>Iniciar sesión</h2>
          <form onSubmit={manejarSubmit} autoComplete="off">
            <div className="campo">
              <label htmlFor="correo">Correo</label>
              <input
                id="correo"
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </div>
            <div className="campo">
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                type="password"
                value={passwordHash}
                onChange={(e) => setPasswordHash(e.target.value)}
                required
              />
            </div>
            {error && <p className="mensaje-error">{error}</p>}
            <button type="submit" disabled={cargando}>
              {cargando ? "Ingresando..." : "Ingresar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;