const { app, BrowserWindow } = require('electron');
function createWindow () {
    const win = new BrowserWindow({
        fullscreen: true,
        frame: false,
        webPreferences: {
            contextIsolation: true
        }
    });
    win.loadFile('../game/index.html');
    win.webContents.openDevTools();
}
app.whenReady().then(createWindow);