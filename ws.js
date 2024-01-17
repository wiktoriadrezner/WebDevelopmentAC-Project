const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);

const namespace = io.of('/my-namespace');

namespace.on('connection', (socket) => {
  console.log('a user connected');

  // Create a channel and send a ping message every second
  setInterval(() => {
    socket.emit('my-broadcast', 'ping');
  }, 1000);

  // Listen for 'message' events
  socket.on('message', (msg) => {
    console.log('Message received: ', msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});