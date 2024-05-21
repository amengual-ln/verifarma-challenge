# VerifarmaPlay (Frontend challenge)

## Introducción

Este proyecto es una aplicación web que nos permite explorar y consultar información sobre películas, construida usando Nuxt.js. La aplicación permite a los usuarios iniciar sesión y ver una grilla de pelicular junto con información detallada sobre cada una de ellas. Interactúa con la API de [TMDB](https://developer.themoviedb.org/reference/) para obtener datos de películas y proporciona una interfaz amigable inspirada en plataformas de streaming como Disney plus, prime video, etc.

## Características

- Pantalla de Log in: Una pantalla de inicio de sesión simple para simular la autenticación de usuarios.
- Grilla de películas: Una pantalla que muestra una lista de películas obtenidas de la API de TMDB.
- Detalle de una película: Una vista detallada de una película seleccionada, mostrando información sobre la misma, y títulos relacionados.

## Configuración e Instalación

- Clonar el repo
- Instalar dependencias
```bash
# npm
npm install

# bun
bun install
```
- Variables de entorno
Al ser una prueba, el .env ya esta preparado para facilitar la prueba del desarrollo.
Este consiste de una BASE_URL para la API, y la API KEY de la misma.

## Levantar el proyecto en desarrollo

Correr el proyecto en `http://localhost:3000`:

```bash
# npm
npm run dev

# bun
bun run dev
```

Gracias por su tiempo!