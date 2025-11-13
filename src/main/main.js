const { app, BrowserWindow, ipcMain, globalShortcut, Menu, Tray, nativeImage } = require('electron');
const path = require('path');
const Store = require('electron-store');

// Inizializza store per salvare configurazioni e cronologia
const store = new Store();

let mainWindow = null;
let captureWindow = null;
let tray = null;

// Funzione per creare la finestra principale
function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 900,
    minWidth: 600,
    minHeight: 700,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    },
    icon: path.join(__dirname, '../../assets/icon.png'),
    show: false
  });

  mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));

  // Mostra finestra quando pronta
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Minimizza su tray invece di chiudere
  mainWindow.on('close', (event) => {
    if (!app.isQuitting) {
      event.preventDefault();
      mainWindow.hide();
    }
  });

  // Dev tools in modalità sviluppo
  if (process.argv.includes('--dev')) {
    mainWindow.webContents.openDevTools();
  }
}

// Funzione per creare la finestra di cattura (overlay fullscreen)
function createCaptureWindow() {
  const { screen } = require('electron');
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.workAreaSize;

  captureWindow = new BrowserWindow({
    width: width,
    height: height,
    fullscreen: true,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  captureWindow.loadFile(path.join(__dirname, '../renderer/capture.html'));
  captureWindow.setAlwaysOnTop(true, 'screen-saver');
}

// Crea system tray
function createTray() {
  // Icona placeholder (verrà sostituita con icon.ico)
  const iconPath = path.join(__dirname, '../../assets/tray-icon.png');
  const trayIcon = nativeImage.createEmpty();

  tray = new Tray(trayIcon);

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Mostra Applicazione',
      click: () => {
        mainWindow.show();
      }
    },
    {
      label: 'Nuova Cattura (Ctrl+Shift+C)',
      click: () => {
        startCapture();
      }
    },
    { type: 'separator' },
    {
      label: 'Cronologia',
      click: () => {
        mainWindow.show();
        mainWindow.webContents.send('show-history');
      }
    },
    {
      label: 'Impostazioni',
      click: () => {
        mainWindow.show();
        mainWindow.webContents.send('show-settings');
      }
    },
    { type: 'separator' },
    {
      label: 'Esci',
      click: () => {
        app.isQuitting = true;
        app.quit();
      }
    }
  ]);

  tray.setToolTip('Screen Translator');
  tray.setContextMenu(contextMenu);

  // Doppio click per mostrare finestra principale
  tray.on('double-click', () => {
    mainWindow.show();
  });
}

// Avvia modalità cattura
function startCapture() {
  if (captureWindow) {
    captureWindow.close();
  }
  createCaptureWindow();
}

// Registra shortcuts globali
function registerGlobalShortcuts() {
  // Ctrl+Shift+C per avviare cattura
  const ret = globalShortcut.register('CommandOrControl+Shift+C', () => {
    startCapture();
  });

  if (!ret) {
    console.log('Registrazione shortcut fallita');
  }
}

// IPC Handlers
ipcMain.on('capture-ready', () => {
  // Finestra di cattura pronta
  console.log('Capture window ready');
});

ipcMain.on('capture-complete', (event, imageData) => {
  // Cattura completata
  if (captureWindow) {
    captureWindow.close();
    captureWindow = null;
  }

  // Invia immagine alla finestra principale per elaborazione
  mainWindow.show();
  mainWindow.webContents.send('process-capture', imageData);
});

ipcMain.on('capture-cancel', () => {
  // Cattura annullata
  if (captureWindow) {
    captureWindow.close();
    captureWindow = null;
  }
});

ipcMain.on('save-translation', (event, data) => {
  // Salva traduzione nella cronologia
  const history = store.get('history', []);
  history.unshift({
    ...data,
    timestamp: Date.now()
  });

  // Mantieni solo ultime 100 traduzioni
  if (history.length > 100) {
    history.pop();
  }

  store.set('history', history);
});

ipcMain.on('get-history', (event) => {
  const history = store.get('history', []);
  event.reply('history-data', history);
});

ipcMain.on('clear-history', () => {
  store.set('history', []);
});

// Avvio applicazione
app.whenReady().then(() => {
  createMainWindow();
  createTray();
  registerGlobalShortcuts();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

// Cleanup shortcuts alla chiusura
app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
