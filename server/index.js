const io = require('socket.io')(3000);

io.on('connection', socket => {
    socket.on('CLIENT_SEND_MESSAGE', message => {
        console.log(message);
    });
});

console.log('Server started.');
