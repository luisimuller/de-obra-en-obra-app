\# Modelo de datos



| Entidad | Atributos clave | Relaciones |

| --- | --- | --- |

| usuarios | id, nombre, correo, hash de contraseña, teléfono, rol | Tiene muchas publicaciones y búsquedas guardadas |

| categorias | id, nombre, categoria\_padre\_id | Árbol de categorías y subcategorías |

| publicaciones | id, vendedor\_id, categoria\_id, título, descripción, cantidad, unidad, precio, latitud, longitud, estado, fecha\_publicación, fecha\_vencimiento | Pertenece a un vendedor y a una categoría; tiene fotos |

| publicacion\_fotos | id, publicacion\_id, url, orden | Pertenece a una publicación |

| busquedas\_guardadas | id, comprador\_id, categoria\_id, palabras\_clave, latitud, longitud, radio\_km, precio\_maximo, activa | Pertenece a un comprador y a una categoría |

| alertas | id, busqueda\_id, publicacion\_id, fecha, leída | Une una búsqueda con la publicación que coincidió |

| conversaciones | id, publicacion\_id, comprador\_id, vendedor\_id, teléfono\_revelado | Una por publicación y comprador interesado |

| mensajes | id, conversacion\_id, emisor\_id, texto, fecha | Pertenece a una conversación |

| reportes | id, publicacion\_id, motivo, estado | Los atiende el administrador |



Las columnas latitud y longitud en publicaciones y en búsquedas guardadas son las que compara el motor de matching. En la Fase 1 esto se traduce a un schema.prisma real.

