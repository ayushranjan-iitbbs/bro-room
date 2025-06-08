const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();

// Enable CORS for your frontend origin
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
}));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  }
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  //  socket ID
  socket.emit('me', socket.id);

  // Calling 
  socket.on('call-user', (data) => {
    io.to(data.userToCall).emit('receive-call', {
      signal: data.signalData,
      from: data.from,
      name: data.name
    });
  });

  // Answering call
  socket.on('answer-call', (data) => {
    io.to(data.to).emit('call-accepted', data.signal);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start the server
const PORT = process.env.PORT || 5000; 
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
