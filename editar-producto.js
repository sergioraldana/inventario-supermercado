let cardbody = document.querySelector('.card-body');
let categorias;
let listaCategorias = "";

window.comunicacion.solicitarCategorias()

window.comunicacion.receiveMessage('categoriasEncontradas', function (event, args){
    console.log(args[0])
    if(args[1] == 'encontradas'){
    categorias = (args[0])
        for (let i = 0; i < categorias.length; i++) {
            let categoria = categorias[i]

            let opCategoria = `<option value="${categoria.id}">${categoria.nombre}</option>`
     
            listaCategorias += opCategoria
        }
        console.log(listaCategorias);
    } else {
    }
  })


function crearEditarProducto (producto) {
    cardbody.innerHTML = 
    `<form>
    <div class="mb-3 row">
        <label for="sku" class="col-sm-2 col-form-label col-form-label-lg" >SKU</label>
        <div class="col-sm-10">
        <input class="form-control form-control-lg" type="text" id="sku" value="${producto.sku}" readonly>
        </div>
    </div>
    <div class="mb-3 row">
        <label for="nombre" class="col-sm-2 col-form-label col-form-label-lg">Nombre</label>
        <div class="col-sm-10">
            <input class="form-control form-control-lg" type="text" id="nombre" value="${producto.nombre}"></input>
        </div>
    </div>
    <div class="mb-3 row">
        <label for="categoria" class="col-sm-2 col-form-label col-form-label-lg">Categoría</label>
        <div class="col-sm-10">
            <select class="custom-select form-control-lg" id="categoria">
                <option value="${producto['categorium.id']}"selected>${producto['categorium.nombre']}</option>
               ${listaCategorias}
            </select>
        </div>
    </div>
    <div class="mb-3 row">
        <label for="descripcion" class="col-sm-2 col-form-label col-form-label-lg">Descripción</label>
        <div class="col-sm-10">
            <textarea class="form-control form-control-lg" type="text" id="descripcion" rows="2">${producto.descripcion}</textarea>
        </div>
    </div>
    <div class="mb-3 row">
        <label for="botones" class="col-sm-2 col-form-label col-form-label-lg"></label>
        <div class="col-sm-10">
        <button type="reset" class="btn btn-lg btn-danger">Cancelar</button>
        <button type="submit" class="btn btn-lg btn-success" id="guardar">Guardar cambios</button>
    </div>
    </div>
    </form>
  </div>
        `
  listaCategorias = document.querySelector('#categoria');

  let btnGuardar = document.querySelector('#guardar')
    btnGuardar.addEventListener('click', () => {
    console.log('guardar')
})

};



  
window.comunicacion.receiveMessage('productoEncontrado', function (event, args){
    console.log(categorias)
    if(args[1] == 'encontrado'){

        crearEditarProducto(args[0][0])

    } else {
      tablaProductos.innerHTML = "Error al encontrar producto";
    }
  })


