const express = require("express");
const router = express.Router();
const prisma = require("../prisma-client");

router.get("/", async (req, res) => {
    try {
        const usuarios = await prisma.usuario.findMany();
        res.json(usuarios);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener usuarios" });
    }
});

router.post("/", async (req, res) => {
  try {
    const { nombre, correo, passwordHash, telefono, rol } = req.body;

    if (!nombre || !correo || !passwordHash) {
      return res.status(400).json({ error: "Nombre, correo y contraseña son obligatorios" });
    }

    const nuevoUsuario = await prisma.usuario.create({
      data: {
        nombre,
        correo,
        passwordHash,
        telefono: telefono || null,
        rol: rol || "comprador",
      },
    });

    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el usuario" });
  }
});

module.exports = router;


//El flujo completo es: el cliente pide GET /usuarios, Express ejecuta el handler,
//Prisma consulta la base, espera el resultado y Express lo devuelve como JSON.

//cuando levantás el servidor con app.listen(3000), Express se queda escuchando. Cada vez que llega una petición, hace esto:
//Mira el método (GET, POST, etc.) y la URL.
//Busca en su lista si hay una ruta que coincida.
//Si la encuentra, llama a tu función, y le pasa dos objetos que arma él mismo: req con los datos de la petición y res con las herramientas para responder.
//Si no encuentra ninguna, responde automáticamente con un 404.


//Por qué se usa JSON, y tiene que ver con cómo viaja la información.
//Por la red no pueden viajar objetos de JavaScript.
//El array usuarios que te devuelve Prisma existe en la memoria de tu servidor Node.
//Lo que viaja por HTTP es texto (bytes), así que hay que convertir ese objeto a un formato de texto que el otro lado pueda reconstruir.
//Ese proceso se llama serializar.
