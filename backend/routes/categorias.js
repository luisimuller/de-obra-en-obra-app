const express = require("express");
const router = express.Router();
const prisma = require("../prisma-client");

router.get("/", async (req, res) => {
    try {
        const categorias = await prisma.categoria.findMany();
        res.json(categorias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener categorías" })
    }
});

router.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    const categoria = await prisma.categoria.findUnique({
      where: { id },
    });

    if (!categoria) {
      return res.status(404).json({ error: "Categoría no encontrada" });
    }

    res.json(categoria);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la categoría" });
  }
});

router.post("/", async (req, res) => {
    try {
        const { nombre, categoriaPadreId } = req.body;
        if (!nombre) {
            return res.status(400).json * ({ error: "El nombre es obligatorio" })
        }
        const nuevaCategoria = await prisma.categoria.create({
            data: {
                nombre,
                categoriaPadreId: categoriaPadreId || null, //si no mandaron categoriaPadreId (porque es una categoría de primer nivel, sin padre)
            },

        });
        res.status(201).json(nuevaCategoria);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear la categoría" });
    }
});


module.exports = router;