const { DataTypes } = require('sequelize')

module.exports.defineEmpleado = function (sequelize){
    return sequelize.define('empleado',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
        },
        cui:{
            type: DataTypes.STRING(13), 
        },
        nombres:{
            type: DataTypes.STRING(45)
        },
        apellidos:{
            type: DataTypes.STRING(45)
        }
    })
}

module.exports.defineUsuario = function (sequelize){
    return sequelize.define('usuario',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
        },
        empleado_id:{
            type: DataTypes.INTEGER,
            references: {         // Usuario belongsTo Empleado 1:1
                model: 'empleado',
                key: 'id'
            }   
        },
        username:{
            type: DataTypes.STRING(10)
        },
        password:{
            type: DataTypes.STRING
        }
    },
    {
        underscored: true
      })
}

module.exports.defineCategoria = function(sequelize){
    return sequelize.define('categoria', 
    {
        id:{
            primaryKey: true,
            type: DataTypes.STRING
        },
        nombre: {
            type: DataTypes.STRING(100)
        }
    },)
}

module.exports.defineProducto = function(sequelize){
    return sequelize.define('producto', 
    {
        id:{
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        sku:{
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.STRING(45)
        },
        descripcion: {
            type: DataTypes.STRING(100)
        },
        categoria_id: {
            type: DataTypes.INTEGER,
            references: {         // Producto belongsTo Categoria 1:1
                model: 'categoria',
                key: 'id'
            }
        },
        existencia: {
            primaryKey: true,
            type: DataTypes.INTEGER
        }
    },)
}

module.exports.defineProveedor = function(sequelize){
    return sequelize.define('proveedor', 
    {
        id:{
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        nombre:{
            type: DataTypes.STRING(100)
        }
    },)
}

module.exports.definePedido = function(sequelize){
    return sequelize.define('pedido', 
    {
        id:{
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        producto_id: {
            type: DataTypes.INTEGER,
            references: {         // Pedido belongsTo Categoria 1:1
                model: 'producto',
                key: 'id'
            }
        }, 
        proveedor_id: {
            type: DataTypes.INTEGER,
            references: {         // Pedido belongsTo Proveedor 1:1
                model: 'proveedor',
                key: 'id'
            }
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            references: {         // Pedido belongsTo Categoria 1:1
                model: 'usuario',
                key: 'id'
            }
        },
        cantidad: {
            type: DataTypes.INTEGER
        }
    },)
}

module.exports.defineProveedorProducto = function(sequelize){
    return sequelize.define('proveedor_producto', 
    {
        id:{
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        proveedor_id: {
            type: DataTypes.INTEGER,
            references: {         // Proveedor_Producto belongsTo Proveedor 1:1
                model: 'proveedor',
                key: 'id'
            }
        },
        producto_id: {
            type: DataTypes.INTEGER,
            references: {         // Proveedor_Producto belongsTo Producto 1:1
                model: 'producto',
                key: 'id'
            }
        }
    },)
}