const { ipcRenderer, contextBridge } = require('electron')

contextBridge.exposeInMainWorld(
    'comunicacion',
    {
        solicitarProductos: (args) => ipcRenderer.send('solicitarProductos', args),
        iniciarSesion: (args) => ipcRenderer.send('iniciarSesion', args),
        solicitarProducto: (args) => ipcRenderer.send('solicitarProducto', args),
        solicitarCategorias: (args) => ipcRenderer.send('solicitarCategorias', args),
        receiveMessage: (channel, callback) => ipcRenderer.on(channel, callback)
    }
)