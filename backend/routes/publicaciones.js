const express = require("express");
const router = express.Router();
const prisma = require("../prisma-client");

router.post("/", async (req, res) => {
  try {
    const {
      vendedorId,
      categoriaId,
      titulo,
      descripcion,
      cantidad,
      unidad,
      precio,
      latitud,
      longitud,
      fechaVencimiento,
    } = req.body;

    if (!vendedorId || !categoriaId || !titulo || !precio || !latitud || !longitud) {
      return res.status(400).json({
        error: "vendedorId, categoriaId, titulo, precio, latitud y longitud son obligatorios",
      });
    }

    const nuevaPublicacion = await prisma.publicacion.create({
      data: {
        vendedorId: Number(vendedorId),
        categoriaId: Number(categoriaId),
        titulo,
        descripcion,
        cantidad: Number(cantidad),
        unidad,
        precio: Number(precio),
        latitud: Number(latitud),
        longitud: Number(longitud),
        fechaVencimiento: new Date(fechaVencimiento),
      },
    });

    res.status(201).json(nuevaPublicacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la publicación" });
  }
});

module.exports = router;