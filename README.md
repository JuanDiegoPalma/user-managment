# Gestión de Usuarios

## Tecnologías utilizadas

Backend: NestJS (Node.js, TypeScript)

Frontend: React, Vite, TypeScript, Tailwind CSS

## Descripción

Este proyecto es una aplicación básica para la gestión de usuarios. Permite registrar nuevos usuarios, ver una lista de los existentes y eliminarlos. El backend expone una API REST que guarda los datos en memoria (sin base de datos), y el frontend ofrece una interfaz sencilla y moderna para interactuar con esa API.

## Pasos para instalar y correr

### Clonar el repositorio

git clone https://github.com/JuanDiegoPalma/user-managment.git

cd user-managment

### Instalar dependencias

#### Backend

cd backend

npm install

#### Frontend

cd ../frontend

npm install

### Correr el proyecto

#### Backend

cd backend

npm run start:dev

#### Frontend

cd frontend

npm run dev

## Comandos para desarrollo

### Backend

 - `npm run start:dev` Inicia el servidor en modo desarrollo.
 - `npm run build` Compila el proyecto.
 - `npm run start` Inicia el servidor en modo producción.

### Frontend

 - `npm run dev`  Inicia el servidor de desarrollo de Vite.
 - `npm run build`  Genera la versión de producción.
 - `npm run preview`  Previsualiza la versión de producción localmente.