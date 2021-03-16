let cardbody = document.querySelector('.card-body');

function crearSolicitarProducto () {
    return `
    <form>
    <div class="mb-3 row">
        <label for="sku" class="col-sm-2 col-form-label col-form-label-lg" >SKU</label>
        <div class="col-sm-10">
        <input class="form-control form-control-lg" type="text" value="123" id="sku" readonly>
        </div>
    </div>
    <div class="mb-3 row">
        <label for="nombre" class="col-sm-2 col-form-label col-form-label-lg">Nombre</label>
        <div class="col-sm-10">
            <input class="form-control form-control-lg" type="text" id="nombre" readonly></input>
        </div>
    </div>
    <div class="mb-3 row">
        <label for="categoria" class="col-sm-2 col-form-label col-form-label-lg">Proveedor</label>
        <div class="col-sm-10">
            <select class="custom-select form-control-lg" id="categoria">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
    </div>
    <div class="mb-3 row">
        <label for="descripcion" class="col-sm-2 col-form-label col-form-label-lg">Cantidad</label>
        <div class="col-sm-10">
            <input class="form-control form-control-lg" type="number" id="cantidad"></input>
        </div>
    </div>
    <div class="mb-3 row">
        <label for="botones" class="col-sm-2 col-form-label col-form-label-lg"></label>
        <div class="col-sm-10">
        <button type="reset" class="btn btn-lg btn-danger">Cancelar</button>
        <button type="submit" class="btn btn-lg btn-success">Solicitar pedido</button>
    </div>
    </div>
    </form>
</div>
    `
};

module.exports = {
        crearSolicitarProducto
    };