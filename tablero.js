let menuTablero = document.querySelector('#tablero');
let menuEditarProducto = document.querySelector('#editar-producto');
let menuSolicitarProducto = document.querySelector('#solicitar-producto');

let tablaProductos = document.querySelector('#productos')

window.comunicacion.receiveMessage('productosEncontrados', function (event, args){
  
  if(args[1] == 'encontrados'){
  mostrarProductos(args[0])
  } else {
    tablaProductos.innerHTML = "Error al encontrar productos";
  }
})

function mostrarProductos(productos) {
  tablaProductos.innerHTML = "";

  for(var i = 0; i < productos.length; i++){
      console.log(productos[i])
      let producto = productos[i]

      let btnEditar = document.createElement('input')
      btnEditar.setAttribute('type','button')
      btnEditar.setAttribute('value','Editar')
      btnEditar.classList.add('btn')
      btnEditar.classList.add('btn-primary')
      btnEditar.addEventListener('click', editarProducto)
      btnEditar.setAttribute('id', producto.sku)

      let btnPedido = document.createElement('input')
      btnPedido.setAttribute('type','button')
      btnPedido.setAttribute('value','Pedido')
      btnPedido.classList.add('btn')
      btnPedido.classList.add('btn-success')
      btnPedido.addEventListener('click', pedirProducto)
      btnPedido.setAttribute('id', producto.sku)

      let celdaBotonEditar = document.createElement('td')
      celdaBotonEditar.appendChild(btnEditar)

      let celdaBotonPedido = document.createElement('td')
      celdaBotonPedido.appendChild(btnPedido)

      let fila = document.createElement('tr')
      fila.innerHTML += `<tr>
            <td>${producto.sku}</td>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>${producto['categorium.nombre']}</td>
            <td>${producto.existencia}</td>
          </tr>`
      fila.appendChild(celdaBotonEditar)
      fila.appendChild(celdaBotonPedido)
      tablaProductos.appendChild(fila)
  }
}

function editarProducto(event){
  let args = event.target.id
  window.comunicacion.solicitarProducto(args)

}

function pedirProducto(){

}