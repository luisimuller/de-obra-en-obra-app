-- CreateTable
CREATE TABLE "usuarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "telefono" TEXT,
    "rol" TEXT NOT NULL DEFAULT 'comprador',
    "creadoEn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "categorias" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "categoriaPadreId" INTEGER,
    CONSTRAINT "categorias_categoriaPadreId_fkey" FOREIGN KEY ("categoriaPadreId") REFERENCES "categorias" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "publicaciones" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vendedorId" INTEGER NOT NULL,
    "categoriaId" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "cantidad" REAL NOT NULL,
    "unidad" TEXT NOT NULL,
    "precio" REAL NOT NULL,
    "latitud" REAL NOT NULL,
    "longitud" REAL NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'activa',
    "fechaVencimiento" DATETIME NOT NULL,
    "creadoEn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "publicaciones_vendedorId_fkey" FOREIGN KEY ("vendedorId") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "publicaciones_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categorias" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "publicacion_fotos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "publicacionId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "orden" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "publicacion_fotos_publicacionId_fkey" FOREIGN KEY ("publicacionId") REFERENCES "publicaciones" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "busquedas_guardadas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "compradorId" INTEGER NOT NULL,
    "categoriaId" INTEGER NOT NULL,
    "palabrasClave" TEXT,
    "latitud" REAL NOT NULL,
    "longitud" REAL NOT NULL,
    "radioKm" REAL NOT NULL,
    "precioMaximo" REAL,
    "activa" BOOLEAN NOT NULL DEFAULT true,
    "creadoEn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "busquedas_guardadas_compradorId_fkey" FOREIGN KEY ("compradorId") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "busquedas_guardadas_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categorias" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "alertas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "busquedaId" INTEGER NOT NULL,
    "publicacionId" INTEGER NOT NULL,
    "leida" BOOLEAN NOT NULL DEFAULT false,
    "creadoEn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "alertas_busquedaId_fkey" FOREIGN KEY ("busquedaId") REFERENCES "busquedas_guardadas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "alertas_publicacionId_fkey" FOREIGN KEY ("publicacionId") REFERENCES "publicaciones" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "conversaciones" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "publicacionId" INTEGER NOT NULL,
    "compradorId" INTEGER NOT NULL,
    "vendedorId" INTEGER NOT NULL,
    "telefonoRevelado" BOOLEAN NOT NULL DEFAULT false,
    "creadoEn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "conversaciones_publicacionId_fkey" FOREIGN KEY ("publicacionId") REFERENCES "publicaciones" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "conversaciones_compradorId_fkey" FOREIGN KEY ("compradorId") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "conversaciones_vendedorId_fkey" FOREIGN KEY ("vendedorId") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "mensajes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "conversacionId" INTEGER NOT NULL,
    "emisorId" INTEGER NOT NULL,
    "texto" TEXT NOT NULL,
    "creadoEn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "mensajes_conversacionId_fkey" FOREIGN KEY ("conversacionId") REFERENCES "conversaciones" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "mensajes_emisorId_fkey" FOREIGN KEY ("emisorId") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "reportes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "publicacionId" INTEGER NOT NULL,
    "motivo" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'pendiente',
    "creadoEn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "reportes_publicacionId_fkey" FOREIGN KEY ("publicacionId") REFERENCES "publicaciones" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_correo_key" ON "usuarios"("correo");
