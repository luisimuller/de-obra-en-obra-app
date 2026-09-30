export { API_URL };
const API_URL = "http://localhost:3000";

async function apiFetch(endpoint, opciones = {}) {
  const token = localStorage.getItem("token");

  const headers = {
    ...opciones.headers,
  };

  if (!(opciones.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const respuesta = await fetch(`${API_URL}${endpoint}`, {
    ...opciones,
    headers,
  });

  const datos = await respuesta.json();

  if (!respuesta.ok) {
    throw new Error(datos.error || "Error en la petición");
  }

  return datos;
}

export default apiFetch;