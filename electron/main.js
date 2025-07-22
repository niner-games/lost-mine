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

    win.loadFile(path.join(__dirname, '../game/index.html'));

    if (!app.isPackaged) {
        win.webContents.openDevTools();
    }
}

app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
app.whenReady().then(createWindow);