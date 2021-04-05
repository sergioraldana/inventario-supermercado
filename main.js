const { app, BrowserWindow, ipcMain, webContents } = require('electron')
const path = require('path')
const  DB  = require('./database/db')
const bcrypt = require('bcrypt');
const { defineUsuario } = require('./database/modelos')

let database = new DB()

database.crearEmpleado(
  '1234567890123',
  'Pedro',
  'Salazar'
)

const saltRounds = 10;
const password = '12345';
const passwordlogin = '12345'

bcrypt.genSalt(saltRounds, function(err, salt) {
  bcrypt.hash(password, salt, function(err, hash) {
    database.actualizarPassword(
      'psalazar',
      hash
    )
  });
});

database.consultarUsuario('psalazar').then(
  res => {
    let user = res[0]

    bcrypt.compare(passwordlogin, user.password, function(err, result) {
      if (result == true) {
        console.log('contrasena correcta')
      }
  });

  }
)

let ventanaIngreso

function createWindow () {
  ventanaIngreso = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {
      preload: path.join(app.getAppPath(),'preload.js')
    }
  })

  ventanaIngreso.loadFile('index.html')
}

let ventanaTablero;

function createWindowTablero () {
  ventanaTablero = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {
      preload: path.join(app.getAppPath(),'preload.js')
    }
  })

  ventanaTablero.loadFile('tablero.html')
}

app.whenReady().then(createWindow)

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// })

ipcMain.on('iniciarSesion', function(event, args){
  console.log(args)
  createWindowTablero();
  ventanaTablero.webContents.once('did-finish-load', () => {
    encontrarProductos()
  })
});



ipcMain.on('login-success', () => {
  createWindowTablero();
  ventanaTablero.webContents.once('did-finish-load', () => {
    encontrarProductos()
  })
});

ipcMain.on('solicitarProductos', function(event, args){
  encontrarProductos()
})

function encontrarProductos() {
  database.consultarProductos()
  .then(
  res => { ventanaTablero.webContents.send('productosEncontrados', [res,'encontrados'])
  })
}

ipcMain.on('solicitarProducto', function(event, sku){
  database.consultarProducto(sku).then(
    res => { ventanaTablero.webContents.send('productoEncontrado', [res,'encontrado'])
    })
})

ipcMain.on('solicitarCategorias', function(event, args){
  database.consultarCategorias()
  .then(
    res => { ventanaTablero.webContents.send('categoriasEncontradas', [res,'encontradas'])
    })
})


