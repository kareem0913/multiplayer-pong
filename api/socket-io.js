const { Server } = require("socket.io");
const { listen } = require("../sockets");

export default function handler(req, res) {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server, {
      path: "/api/socket-io",
    });
    res.socket.server.io = io;
    listen(io);
    console.log("Socket.IO server started");
  }
  res.end();
}
