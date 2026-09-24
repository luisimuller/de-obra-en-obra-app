const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const prisma = require("../prisma-client");

router.post("/login", async (req, res) => {
  try {
    const { correo, passwordHash } = req.body;

    if (!correo || !passwordHash) {
      return res.status(400).json({ error: "Correo y contraseña son obligatorios" });
    }

    const usuario = await prisma.usuario.findUnique({
      where: { correo },
    });

    if (!usuario) {
      return res.status(401).json({ error: "Correo o contraseña incorrectos" });
    }

    const passwordCorrecta = await bcrypt.compare(passwordHash, usuario.passwordHash);

    if (!passwordCorrecta) {
      return res.status(401).json({ error: "Correo o contraseña incorrectos" });
    }

    const token = jwt.sign(
      { id: usuario.id, rol: usuario.rol },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      token,
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        correo: usuario.correo,
        rol: usuario.rol,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
});

module.exports = router;