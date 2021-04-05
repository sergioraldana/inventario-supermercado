const { Sequelize } = require('sequelize')
const { defineCategoria, defineEmpleado, defineProducto, defineProveedor, defineUsuario, definePedido, defineProveedorProducto } = require('./modelos')

class DB {
    constructor(){
        // Conexion
        this.connection = new Sequelize('bd_inventario','inventario','Galileo123', {
            host:'localhost',
            dialect:'mysql',
            define: {
                freezeTableName: true,
                timestamps: false
              }
        })

        //Modelos
        this.Categoria  = defineCategoria(this.connection)
        this.Empleado = defineEmpleado(this.connection)
        this.Producto = defineProducto(this.connection)
        this.Proveedor = defineProveedor(this.connection)
        this.Usuario = defineUsuario(this.connection)
        this.Pedido = definePedido(this.connection)
        this.ProveedorProducto = defineProveedorProducto(this.connection)

        //Sincronizar modelos
        // this.Categoia.sync()
        // this.Empleado.sync()
        // this.Producto.sync()
        // this.Proveedor.sync()
        // this.Usuario.sync()
        // this.Pedido.sync()
        // this.ProveedorProducto.sync()


        //Llaves foraneas
        this.Usuario.belongsTo(this.Empleado)
        this.Producto.belongsTo(this.Categoria, {foreignKey: 'categoria_id', sourceKey:'id'})
        //this.Favorito.belongsTo(this.Libro, {foreignKey: 'libro_id', sourceKey:'id'})

    }

    crearEmpleado(param_cui, param_nombres, param_apellidos) {

        this.Empleado.findOrCreate({
            where: { cui: param_cui },
            defaults: {
                cui: param_cui,
                nombres: param_nombres,
                apellidos: param_apellidos
            }
        })
    }

    crearUsuario (param_empleado_id, param_username, param_password) {
            this.Usuario.findOrCreate({
                where: { username: param_username },
                defaults:{
                    empleado_id: param_empleado_id,
                    username: param_username,
                    password: param_password
                }
            })
    }

    actualizarPassword (param_username, param_password) {
        this.Usuario.update({ password: param_password }, {
            where: {
              username: param_username
            }
          });
}

consultarUsuario(param_username){
    return this.Usuario.findAll({
        raw:true,
        include:[
            {
                model:this.Empleado
            }
        ],
        where:{
            username: param_username
        }
    })
}

consultarProductos(){
    return this.Producto.findAll({
        raw:true,
        include:[
            {
                model:this.Categoria
            }
        ]
    })
}

consultarProducto(param_sku){
    return this.Producto.findAll({
        raw:true,
        where: {
            sku: param_sku
          },
        include:[
            {
                model:this.Categoria
            }
        ]
    })
}

consultarCategorias(){
    return this.Categoria.findAll({
        raw:true,
    })
}


editarProducto(param_sku, param_nombre, param_descripcion, param_categoria_id){
    this.Producto.update(
        { nombre: param_nombre,
         descripcion: param_descripcion,
        categoria_id: param_categoria_id},{
        
        where: {
          sku: param_sku
        }
    }
      );
}





}

module.exports = DB