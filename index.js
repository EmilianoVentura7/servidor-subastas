const express = require('express');
const http = require('http');
const mongoose = require('./configs/db');
const expressConfig = require('./configs/express');
const socketUtil = require('./utils/socketUtil');
const errorMiddleware = require('./middlewares/errorMiddleware');


const subastaRoutes = require('./src/routes/subasta.routes');
const usuarioRoutes = require('./src/routes/usuario.routes');
const notificacionesRoutes = require('./src/routes/notificaciones.routes');

// Configurar Express
const app = expressConfig(express());
const server = http.createServer(app);
const io = socketUtil.initSocket(server);

// Configurar rutas
app.use('/api', subastaRoutes);
app.use('/api', usuarioRoutes);
app.use('/api', notificacionesRoutes);

// Configurar middleware de manejo de errores
app.use(errorMiddleware);

// Manejar conexiones WebSocket
io.on('connection', (socket) => {
  console.log('New connection:', socket.id);

  // 
  // 
  // 
});

// Iniciar servidor
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
