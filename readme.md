# 📝 Gestor de Tareas Pro v2

Aplicación **Full Stack** para la gestión de tareas, desarrollada con **Node.js y Express** en backend y **JavaScript puro** en frontend.
Permite crear, listar, editar y eliminar tareas mediante una **API REST**, con persistencia de datos en archivos JSON.


---


## 🚀 Demo


- **Frontend (GitHub Pages)**
  https://migueldavidortigoza.github.io/gestor-de-tareas-pro-v2/

- **Backend (Node + Express - Render)**
  https://gestor-de-tareas-pro-v2.onrender.com


---


## 🛠️ Tecnologías utilizadas


### Frontend
- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API
- Manipulación del DOM


### Backend
- Node.js
- Express.js
- API REST
- Persistencia de datos en archivos JSON
- Nodemon (entorno de desarrollo)


---


## 📌 Funcionalidades

- ✅ Crear nuevas tareas
- 📄 Listar tareas
- ✏️ Editar tareas existentes 
- 🗑️ Eliminar tareas
- ⏱️ Registro de fecha y hora
- 🔗 Comunicación Frontend ↔ Backend mediante Fetch
- 💾 Persistencia de datos sin base de datos (JSON)


---


## 📂 Estructura del proyecto 

```
gestor-de-tareas-pro-v2/
│
├── backend/
│ ├── data/
│ │ └── tareas.json
│ ├── routes/
│ │ └── tareas.routes.js
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── app.js
│
└── README.md
```

---


## 🔌 Endpoints de la API

| Método |     Ruta        |      Descripción         | 
|--------|-----------------|--------------------------|
|  GET   | /api/tareas     | Obtener todas las tareas |
|  POST  | /api/tareas     | Crear una nueva tarea    |
|  PUT   | /api/tareas/:id | Editar una tarea         |
| DELETE | /api/tareas/:id | Eliminar una tarea       |


---


## ⚙️ Instalación y uso en local

1. Clonar el repositorio:
```
git clone https://github.com/migueldavidortigoza/gestor-de-tareas-pro-v2.git
```

2. Ingresar al backend e instalar dependecias: 
```
cd backend
npm install
```

3. Ejecutar el servidor
```
npm run dev
```

4. Abrir el frontend:
• Abrir el archivo **index.html** con Live Server o directamente en el navegador 


## 📚 Qué demuestra este proyecto 
• Separación clara entre Frontend y Backend
• Creación y consumo de una API REST
• Manejo de rutas y lógica de servidor
• Uso de asincronía con Fetch y async/await
• Persistencia de datos sin base de datos
• Estructuración correcta de un proyecto Full Stack


## 🧑‍💻 Autor

**Miguel David Ortigoza**
📍 Argentina
🔗 GitHub: https://github.com/migueldavidortigoza
