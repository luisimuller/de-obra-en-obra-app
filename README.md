\# # De Obra en Obra



Marketplace geolocalizado de materiales sobrantes de obra, con alertas automáticas cuando aparece algo que estás buscando.



Proyecto fullstack de portfolio. En construcción.



\## Stack

\- Backend: Node.js, Express, Prisma, SQLite

\- Frontend: React, Vite



## Cómo levantar el proyecto

### Backend

1. `cd backend`
2. `npm install`
3. `npx prisma migrate dev` — crea la base de datos SQLite local con las tablas ya definidas (no trae datos, cada quien arranca con la base vacía).

### Base de datos

El proyecto usa SQLite, así que no hace falta instalar ningún motor de base de datos aparte: el archivo vive dentro de `backend/prisma/dev.db` y se genera solo con el paso anterior.

Para ver y editar los datos visualmente con Prisma Studio:
cd backend
npx prisma studio --url "file://./prisma/dev.db"


Nota: con Prisma 7, `npx prisma studio` sin el flag `--url` puede fallar con el error `Prisma Studio is not supported for the "..." protocol`. Si eso pasa, usar el comando con `--url` de arriba.

4. `npm install` instala también el driver adapter de SQLite (`@prisma/adapter-better-sqlite3`), necesario porque Prisma 7 requiere pasarle explícitamente un adaptador de conexión al `PrismaClient` (ya no alcanza con la URL en `.env`).
5. `node index.js` levanta el servidor en `http://localhost:3000`.