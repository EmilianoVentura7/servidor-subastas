const socketIo = require('socket.io');

let io;

function initSocket(server) {
  io = socketIo(server);
  return io;
}

function getIo() {
  if (!io) {
    throw new Error('Socket.io not initialized!');
  }
  return io;
}

module.exports = {
  initSocket,
  getIo,
};
