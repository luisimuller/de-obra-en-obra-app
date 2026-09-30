import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Publicaciones from "./pages/Publicaciones";
import RutaPrivada from "./components/RutaPrivada";
import NuevaPublicacion from "./pages/NuevaPublicacion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/publicaciones"
          element={
            <RutaPrivada>
              <Publicaciones />
            </RutaPrivada>
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/publicaciones/nueva"
          element={
            <RutaPrivada>
              <NuevaPublicacion />
            </RutaPrivada>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;