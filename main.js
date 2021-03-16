const { app, BrowserWindow, ipcMain } = require('electron')

let ventanaIngreso

function createWindow () {
  ventanaIngreso = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  ventanaIngreso.loadFile('index.html')
}

let ventanaTablero;

function createWindowDashboard () {
  ventanaTablero = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
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


ipcMain.on('login-success', () => {
  console.info('creando ventana');
  createWindowDashboard();
});