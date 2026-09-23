const express = require("express");
const cors = require("cors");
const prisma = require("./prisma-client");
const usuariosRouter = require("./routes/usuarios");
const categoriasRouter = require("./routes/categorias");
const publicacionesRouter = require("./routes/publicaciones");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mensaje: "API de De Obra en Obra funcionando" });
});

app.use("/usuarios",usuariosRouter);
app.use("/categorias",categoriasRouter);
app.use("/publicaciones",publicacionesRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});