# 📝 Gestor de Tareas (API REST + PostgreSQL)

Un gestor de tareas desarrollado con **Node.js, Express y PostgreSQL**.  
Permite realizar operaciones CRUD a través de una **API REST**, permitiendo:
- 📌 **Crear** nuevas tareas.
- 📌 **Listar** todas las tareas.
- 📌 **Actualizar** una tarea existente.
- 📌 **Eliminar** tareas.

## 🚀 Tecnologías utilizadas
- **Node.js** - Entorno de ejecución
- **Express.js** - Framework para la API
- **PostgreSQL** - Base de datos relacional
- **Sequelize** - ORM para manejar PostgreSQL
- **Swagger** - Documentación de la API

## 📌 Instalación y Uso
1. **Clonar el repositorio**  
   ```sh
   git clone https://github.com/Jair25x/gestor-tareas.git
   cd gestor-tareas

2. **Instalar dependencias**  
   ```sh
   npm install

3. **Configurar variables de entorno**  
   ```sh
   cp .env.example .env
   # Editar el archivo .env con tus variables de entorno

4. **Iniciar el servidor**  
   ```sh
   npm run dev

5. **Acceder a la documentación Swagger**  
   ```sh
   http://localhost:3000/api-docs
