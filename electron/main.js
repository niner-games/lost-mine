const { app, BrowserWindow } = require('electron');
const path = require('path');

app.whenReady().then(() => {
    const win = new BrowserWindow({
        frame: false,
        fullscreen: true,
        webPreferences: {
            contextIsolation: true
        }
    });

    win.loadFile(path.join(__dirname, 'game/index.html'));

    if (!app.isPackaged) {
        win.webContents.openDevTools();
    }
});