var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var mongojs=require('mongojs');
var db=mongojs('mongodb://127.0.0.1:27017/gestor_noticias');

app.use(express.static('public'));

var messages = [{
	id: String,
	nombre: String,
	apellido: String,
	cedula: String
}];




io.on('connection', function(socket) {

	db.tabla.find(function(err,tasks){

		for (var i = 0; i < tasks.length; i++) {
			messages[i]=tasks[i];
		}
	});
	console.log('Un cliente se ha conectado');
	socket.emit('messages', messages);
});





server.listen(3000, function() {
	console.log("Servidor corriendo en http://localhost:3000");
});