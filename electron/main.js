const path = require('path');
const { app, BrowserWindow } = require('electron');
function createWindow () {
    const win = new BrowserWindow({
        fullscreen: true,
        frame: false,
        webPreferences: {
            sandbox: true,
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    win.loadFile(require('path').join(__dirname, '../src/index.html'));

    if (!app.isPackaged) {
        win.webContents.openDevTools();
    }
}

app.whenReady().then(createWindow);