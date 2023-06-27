const server = require("http").createServer();
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
    },
});

const PORT = 5555;
const NEW_CHAT_MESSAGE_EVENT = "message";

io.on("connection", (socket) => {

    // Listen for new messages
    socket.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
        io.emit('pushNotification', JSON.parse(message).data);
    });

    // Leave the room if the user closes the socket
    socket.on("disconnect", () => {
    });
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});