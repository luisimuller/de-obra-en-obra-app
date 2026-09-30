import { Navigate } from "react-router-dom";

function RutaPrivada({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default RutaPrivada;