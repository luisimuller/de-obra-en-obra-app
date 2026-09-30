import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import apiFetch from "../services/api";
import "./Login.css";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [passwordHash, setPasswordHash] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);
  const navigate = useNavigate();

  async function manejarSubmit(evento) {
    evento.preventDefault();
    setError("");

    if (passwordHash !== confirmarPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setCargando(true);

    try {
      await apiFetch("/usuarios", {
        method: "POST",
        body: JSON.stringify({ nombre, correo, passwordHash, telefono }),
      });

      navigate("/login");
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
          <span className="login-hero__sello">N.° 00 — Registro</span>
          <h1 className="login-hero__titulo">
            De Obra
            <br />
            en Obra
          </h1>
          <p className="login-hero__bajada">
            <strong>Lo que sobra en una obra, falta en otra.</strong>
            <br />
            Creá tu cuenta para publicar y contactar vendedores.
          </p>
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
          <h2>Crear cuenta</h2>
          <form onSubmit={manejarSubmit} autoComplete="off">
            <div className="campo">
              <label htmlFor="nombre">Nombre</label>
              <input
                id="nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
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
              <label htmlFor="telefono">Teléfono (para que te contacten por WhatsApp)</label>
              <input
                id="telefono"
                type="tel"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                placeholder="Ej: 3425123456"
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
            <div className="campo">
              <label htmlFor="confirmar">Confirmar contraseña</label>
              <input
                id="confirmar"
                type="password"
                value={confirmarPassword}
                onChange={(e) => setConfirmarPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="mensaje-error">{error}</p>}
            <button type="submit" disabled={cargando}>
              {cargando ? "Creando cuenta..." : "Crear cuenta"}
            </button>
          </form>
          <p className="login-panel__link">
            ¿Ya tenés cuenta? <Link to="/login">Iniciar sesión</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registro;