require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', taskRoutes);

const startServer = async () => {
  try {
    await sequelize.sync(); // Sincroniza la base de datos
    console.log('Base de datos conectada');
    
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
    
    // Inicializa Swagger
    const swaggerSetup = require('./config/swagger');
swaggerSetup(app);
  } catch (error) {
    console.error('Error al conectar la base de datos:', error);
  }
};

startServer();