import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Publicaciones from "./pages/Publicaciones";
import RutaPrivada from "./components/RutaPrivada";
import NuevaPublicacion from "./pages/NuevaPublicacion";
import DetallePublicacion from "./pages/DetallePublicacion";
import Registro from "./pages/Registro";

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
        <Route
          path="/publicaciones/:id"
          element={
            <RutaPrivada>
              <DetallePublicacion />
            </RutaPrivada>
          }
        />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;