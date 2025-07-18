const { app, BrowserWindow } = require('electron');
function createWindow () {
    const win = new BrowserWindow({
        fullscreen: true,
        frame: false, // removes window chrome (title bar, close/minimize/maximize buttons)
        webPreferences: {
            contextIsolation: true
        }
    });
    win.loadFile('../game/index.html');
}
app.whenReady().then(createWindow);