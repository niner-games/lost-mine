const { app, BrowserWindow, globalShortcut  } = require('electron');
const path = require('path');

app.whenReady().then(() => {
    const win = new BrowserWindow({
        frame: false,
        fullscreen: true,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false
        }
    });

    const indexPath = app.isPackaged
        ? path.join(process.resourcesPath, 'game', 'index.html')
        : path.join(__dirname, '../vite/dist/index.html');

    win.loadFile(indexPath)
        .then(() => {
            globalShortcut.register('CommandOrControl+Shift+C', () => {
                win.webContents.openDevTools();
            });
        })
        .catch((err) => {
            console.error('Failed to load file:', err);
        });
});