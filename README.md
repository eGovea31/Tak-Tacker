# 🧠 Task Tracker API (Backend con Node.js + Express)

## 📌 Descripción del Proyecto

Este proyecto es una **API REST** desarrollada con JavaScript utilizando Node.js y Express.

Su objetivo es permitir la gestión de tareas (tasks), incluyendo:

* Crear tareas
* Listar tareas
* Actualizar tareas
* Eliminar tareas
* Cambiar el estado de una tarea (pendiente, en progreso, completada)

---

## 🎯 Objetivo del Proyecto

Este proyecto forma parte del aprendizaje práctico del roadmap de backend, donde se pasa de:

```text
Aplicaciones CLI → APIs REST
```

Tal como se recomienda en el roadmap de desarrollo full stack y backend .

El objetivo es entender:

* Cómo funciona un backend real
* Cómo manejar peticiones HTTP
* Cómo estructurar un proyecto de forma profesional
* Cómo separar responsabilidades (arquitectura)

---

## ⚙️ Tecnologías utilizadas

* JavaScript
* Node.js
* Express
* File System (fs)
* JSON (como almacenamiento)

---

## 🧱 Arquitectura del Proyecto

El proyecto sigue una arquitectura simple pero profesional:

```
Cliente (Postman / navegador)
        ↓
     Express (index.js)
        ↓
     Lógica (tasks.js)
        ↓
     Datos (storage.js)
        ↓
     tasks.json
```

---

## 📁 Estructura de Archivos

```
task-tracker/
│
├── index.js      → Servidor Express (entrada del sistema)
├── tasks.js      → Lógica de negocio
├── storage.js    → Manejo de datos (JSON)
├── tasks.json    → Base de datos
```

---

## 🔄 Flujo de funcionamiento

### Ejemplo: Crear una tarea

1. El cliente envía una petición:

```
POST /tasks
```

2. Express recibe la petición en `index.js`

3. Se llama a la función `addTask()` en `tasks.js`

4. `tasks.js` usa `storage.js` para guardar la tarea

5. Se actualiza el archivo `tasks.json`

6. Se devuelve una respuesta al cliente en formato JSON

---

## 🌐 Endpoints disponibles

### 📥 Obtener tareas

```
GET /tasks
```

Opcional:

```
GET /tasks?status=done
```

---

### ➕ Crear tarea

```
POST /tasks
```

Body:

```json
{
  "description": "Aprender backend"
}
```

---

### ❌ Eliminar tarea

```
DELETE /tasks/:id
```

---

### ✏️ Actualizar tarea

```
PUT /tasks/:id
```

Body:

```json
{
  "description": "Nuevo texto"
}
```

---

### 🔄 Cambiar estado

```
PATCH /tasks/:id
```

Body:

```json
{
  "status": "done"
}
```

---

## ▶️ Cómo ejecutar el proyecto

1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar el servidor:

```bash
node index.js
```

3. Abrir en navegador:

```
http://localhost:3000/tasks
```

---

## 🧪 Cómo probar la API

Se recomienda usar:

* Thunder Client (VS Code)
* Postman

El navegador solo permite probar peticiones GET.

---

## 🧠 Conceptos aprendidos

Este proyecto permite aprender:

* HTTP (GET, POST, PUT, DELETE, PATCH)
* APIs REST
* Manejo de rutas con Express
* Separación de responsabilidades
* Manejo de archivos en Node.js
* Arquitectura básica de backend

---

## 🚀 Estado actual del proyecto

✔ CLI completado
✔ Migración a API REST completada
✔ CRUD funcional

🔜 Próximos pasos:

* Separación en rutas (Router)
* Controladores (Controllers)
* Base de datos real (MongoDB / SQL)
* Autenticación (JWT)

---

## 💡 Nota final

Este proyecto no es solo un ejercicio, sino una base real sobre la cual se pueden construir aplicaciones más complejas como:

* Aplicaciones web (React + API)
* Apps móviles
* Sistemas completos backend

---
Proyecto desarrollado como parte del aprendizaje de backend moderno.
