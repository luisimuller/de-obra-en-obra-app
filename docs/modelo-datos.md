# Modelo de datos

| Entidad | Atributos clave | Relaciones |
| --- | --- | --- |
| usuarios | id, nombre, correo, hash de contraseña, teléfono, rol | Tiene muchas publicaciones y búsquedas guardadas |
| categorias | id, nombre, categoria_padre_id | Árbol de categorías y subcategorías |
| publicaciones | id, vendedor_id, categoria_id, título, descripción, cantidad, unidad, precio, latitud, longitud, estado, fecha_publicación, fecha_vencimiento | Pertenece a un vendedor y a una categoría; tiene fotos |
| publicacion_fotos | id, publicacion_id, url, orden | Pertenece a una publicación |
| busquedas_guardadas | id, comprador_id, categoria_id, palabras_clave, latitud, longitud, radio_km, precio_maximo, activa | Pertenece a un comprador y a una categoría |
| alertas | id, busqueda_id, publicacion_id, fecha, leída | Une una búsqueda con la publicación que coincidió |
| conversaciones | id, publicacion_id, comprador_id, vendedor_id, teléfono_revelado | Una por publicación y comprador interesado |
| mensajes | id, conversacion_id, emisor_id, texto, fecha | Pertenece a una conversación |
| reportes | id, publicacion_id, motivo, estado | Los atiende el administrador |

Las columnas latitud y longitud en publicaciones y en búsquedas guardadas son las que compara el motor de matching. En la Fase 1 esto se traduce a un schema.prisma real.

