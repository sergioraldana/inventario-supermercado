let formulario = document.querySelector('#login');
let user = document.querySelector('#username');
let password = document.querySelector('#password');

formulario.addEventListener('submit', (event) => {
	event.preventDefault()
	let args = [user.value, password.value]
	window.comunicacion.iniciarSesion(args)
});