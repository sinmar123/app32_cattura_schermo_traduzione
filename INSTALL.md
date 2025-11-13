# Guida Installazione Screen Translator

## 📦 Installazione Rapida (Utente Finale)

### Windows 10/11

1. **Scarica l'installer**
   - Vai alla pagina [Releases](../../releases)
   - Scarica `Screen-Translator-Setup-1.0.0.exe`

2. **Esegui l'installer**
   - Doppio click sul file scaricato
   - Se appare un avviso Windows Defender, clicca "Maggiori informazioni" → "Esegui comunque"
   - Segui la procedura guidata

3. **Prima esecuzione**
   - L'app si avvierà automaticamente dopo l'installazione
   - Troverai l'icona sul desktop e nel menu Start
   - L'app si minimizzerà nella system tray

---

## 🛠️ Installazione per Sviluppatori

### Prerequisiti

- **Node.js**: versione 16 o superiore
- **npm**: versione 8 o superiore
- **Git**: per clonare il repository
- **Windows 10/11**: per il testing

### Step 1: Clona il Repository

```bash
git clone https://github.com/tuousername/screen-translator-windows.git
cd screen-translator-windows
```

### Step 2: Installa le Dipendenze

```bash
npm install
```

Questo installerà:
- Electron e dipendenze core
- Tesseract.js per OCR
- Librerie di traduzione
- electron-builder per il build

**Tempo stimato**: 2-5 minuti (dipende dalla connessione)

### Step 3: Sviluppo

```bash
# Avvia in modalità sviluppo con DevTools
npm run dev

# oppure
npm start
```

L'app si avvierà con la console di sviluppo aperta.

### Step 4: Testing

```bash
# Test funzionalità base
1. Premi Ctrl+Shift+C
2. Seleziona un'area con testo
3. Verifica estrazione e traduzione

# Test system tray
1. Minimizza la finestra
2. Verifica icona nella tray
3. Testa il menu contestuale

# Test cronologia
1. Effettua più catture
2. Apri la cronologia
3. Verifica il salvataggio
```

### Step 5: Build per Produzione

```bash
# Build completo per Windows x64
npm run build

# Output:
# - dist/Screen Translator Setup 1.0.0.exe (installer)
# - dist/Screen Translator 1.0.0.exe (portable)
```

---

## 🔧 Configurazione Ambiente di Sviluppo

### Visual Studio Code (Consigliato)

**Estensioni consigliate:**
```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

**Settings.json:**
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

### Debugging in VS Code

Crea `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Electron: Main",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceFolder}",
      "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron",
      "args": ["."],
      "outputCapture": "std"
    }
  ]
}
```

---

## 🐛 Risoluzione Problemi Installazione

### Errore: "npm install" fallisce

**Soluzione 1**: Pulisci la cache npm
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Soluzione 2**: Usa yarn invece di npm
```bash
npm install -g yarn
yarn install
```

### Errore: electron-builder non compila

**Windows**: Installa Windows Build Tools
```bash
npm install --global windows-build-tools
```

### Errore: Tesseract.js non funziona

Verifica che i traineddata siano scaricati:
```bash
# I file dovrebbero essere in:
node_modules/tesseract.js-core/tesseract-core.wasm.js
```

### Permessi Amministratore

Se l'app richiede permessi admin per shortcuts:
```bash
# Esegui terminale come amministratore
# poi avvia l'app
npm start
```

---

## 📝 Note Post-Installazione

### Prima Esecuzione

1. **Shortcut Globale**: `Ctrl+Shift+C`
   - Potrebbe richiedere permessi amministratore
   - Verifica che non sia usato da altre app

2. **System Tray**
   - L'icona apparirà vicino all'orologio
   - Potrebbe essere nascosta: clicca la freccia ^

3. **Cronologia**
   - Salvata in: `%APPDATA%/screen-translator-windows/`
   - Limite: 100 traduzioni

### Configurazione Firewall

Se la traduzione non funziona:
1. Apri Windows Defender Firewall
2. Aggiungi eccezione per `Screen Translator.exe`
3. Consenti connessioni in uscita

### Auto-Start (Opzionale)

Per avvio automatico con Windows:
1. Premi `Win+R`
2. Digita: `shell:startup`
3. Crea collegamento a `Screen Translator.exe`

---

## 🔄 Aggiornamento

### Da Release GitHub

1. Scarica nuovo installer
2. Esegui (sovrascrive versione precedente)
3. Le impostazioni e cronologia vengono preservate

### Da Sorgente

```bash
git pull origin main
npm install  # Se ci sono nuove dipendenze
npm run build
```

---

## 🗑️ Disinstallazione

### Windows

**Metodo 1**: Pannello di Controllo
1. Impostazioni → App → App e funzionalità
2. Cerca "Screen Translator"
3. Clicca Disinstalla

**Metodo 2**: Uninstaller
1. Cerca `unins000.exe` nella cartella installazione
2. Esegui per rimuovere l'app

**Rimozione Dati**:
```bash
# Elimina anche configurazione e cronologia
%APPDATA%/screen-translator-windows/
```

---

## 📞 Supporto

Problemi durante l'installazione?
- [GitHub Issues](../../issues)
- [FAQ](../../wiki/FAQ)
- [Documentazione](README.md)
