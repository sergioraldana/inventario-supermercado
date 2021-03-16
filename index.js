const { ipcRenderer } = require('electron');

let formulario = document.querySelector('#login');

formulario.addEventListener('submit', (event) => {
		abrirSistema();
});


function abrirSistema() {
	ipcRenderer.send('login-success');
};