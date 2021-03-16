const { ipcRenderer } = require('electron');
const { crearEditarProducto } = require('./editar-producto.js');
const { crearSolicitarProducto } = require('./solicitar-producto.js');

let cardbody = document.querySelector('.card-body');
let menuTablero = document.querySelector('#tablero');
let menuEditarProducto = document.querySelector('#editar-producto');
let menuSolicitarProducto = document.querySelector('#solicitar-producto');


let producto = {
  sku: 1234,
  nombre: 'Nombre',
  descripcion: 'Descripcion',
  categoria: 'Categoria',
  existencia: 100
}



let btnsEditar = document.querySelectorAll('.btn-primary');
let btnsSolicitar = document.querySelectorAll('.btn-success');

Array.prototype.forEach.call(btnsEditar, function addClickListener(btn) {
  btn.addEventListener('click', (event) => {
    console.log(btn);
    cardbody.innerHTML = crearEditarProducto();
  });
});

Array.prototype.forEach.call(btnsSolicitar, function addClickListener(btn) {
  btn.addEventListener('click', (event) => {
    console.log(btn);
    cardbody.innerHTML = crearSolicitarProducto();
  });
});

menuEditarProducto.addEventListener('click', () => {
  cardbody.innerHTML = crearEditarProducto();
});

menuSolicitarProducto.addEventListener('click', () => {
  cardbody.innerHTML = crearSolicitarProducto();
});