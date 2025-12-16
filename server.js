const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

const PORT = process.env.PORT || 3000;


io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("chat message", (msg) => {
        // Broadcast to all clients
        io.emit("chat message", msg);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

http.listen(PORT, () => {
  console.log("Server running");
});