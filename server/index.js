const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
app.use(express.static('dist'));

const port = process.env.PORT || 3000;
server.listen(port, () => console.log('Server started!'));

io.on('connection', socket => {
    socket.on('CLIENT_SEND_MESSAGE', message => {
        io.emit('SERVER_SEND_MESSAGE', message);
    });
});
