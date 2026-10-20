# API de clubes de la Copa Libertadores

Proyecto de práctica para construir una API con Node.js y Express. Incluye datos iniciales de países y clubes ganadores de la Copa Libertadores.

## Requisitos

- [Node.js](https://nodejs.org/)
- npm (se instala junto con Node.js) o Yarn

## Instalación

Desde la carpeta del proyecto, instala las dependencias con uno de estos comandos:

```bash
npm install
```

O, si utilizas Yarn:

```bash
yarn install
```

## Ejecución

Inicia el servidor en modo desarrollo con:

```bash
npm run dev
```

También puedes usar Yarn:

```bash
yarn dev
```

El servidor escucha en <http://localhost:3000>.

## Rutas disponibles

| Método | Ruta | Descripción |
| --- | --- | --- |
| `GET` | `/paises` | Lista todos los países. |
| `GET` | `/paises/:id` | Busca un país por su ID. |
| `GET` | `/clubes` | Lista todos los clubes. |
| `GET` | `/clubes?pais=Argentina` | Filtra los clubes por nombre de país. |
| `GET` | `/clubes/:id` | Busca un club por su ID. |
| `GET` | `/paises/:id/clubes` | Busca un país por ID y lista sus clubes. |
| `GET` | `/titulos/:club` | Lista los años de títulos de un club por su ID. |

Los nombres de país no distinguen entre mayúsculas y minúsculas. Por ejemplo, `?pais=argentina` también funciona.

### Ejemplos

```text
http://localhost:3000/paises
http://localhost:3000/paises/1
http://localhost:3000/clubes
http://localhost:3000/clubes?pais=Argentina
http://localhost:3000/clubes/1
http://localhost:3000/paises/1/clubes
http://localhost:3000/titulos/1
```

La ruta `/titulos/:club` responde con `200` y un array vacío (`[]`) si el club existe pero no tiene títulos. La API responde con `400` cuando un ID o parámetro tiene un formato inválido y con `404` cuando el país, el club o la ruta no existen. Los errores incluyen un mensaje en la propiedad `error`.

## Probar con Postman

Importa `postman/Libertadores.postman_collection.json` en Postman. Inicia el servidor con `yarn dev` y ejecuta las solicitudes de la colección para comprobar las respuestas exitosas, los errores y el caso de títulos vacíos.

## Estructura

- `server.js`: configura Express y CORS e inicia el servidor.
- `datos.js`: exporta los datos iniciales de países y clubes.
- `package.json`: contiene las dependencias y el comando de desarrollo.

Los datos de los países están en `paises`. Cada club de `clubes` incluye un `paisId` que referencia al país y un arreglo `titulos` con los años en que ganó la Copa Libertadores.

## Video presentación
- https://youtu.be/6DQs4UwbfUQ
