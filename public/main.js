var socket = io.connect('http://localhost:3000', { 'forceNew': true });

socket.on('messages', function(data) {
	console.log(data);
	render(data);
});

function render (data) {
	var html = data.map(function(elem, index) {
		return(`<div>
			<strong>${elem.nombre}</strong>:
			<em>${elem.apellido}</em>
			<em>${elem.cedula}</em>
			</div>`);
	}).join(" ");

	document.getElementById('messages').innerHTML = html;
}