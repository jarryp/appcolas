// Comando para establecer la conexion de socket

var socket = io();
var label = $('#lblNuevoTicket');
var labelUlt = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Servidor Conectado');
});


socket.on('disconnect', function() {
    console.log('Servidor desconectado');
});

socket.on('estadoActual', function(data) {
    labelUlt.text(data.actual);
})


$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});