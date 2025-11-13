# 📂 Contenuto del Progetto - Cosa C'è in Questa Cartella

## 🎯 File Principali per Utenti

### **File da Usare (Doppio Click):**

| File | Quando Usarlo | Cosa Fa |
|------|---------------|---------|
| 📄 **INSTALLA.bat** | **Una volta sola** (prima installazione) | Installa automaticamente tutto quello che serve |
| 📄 **AVVIA.bat** | **Ogni volta** che vuoi usare l'app | Avvia l'applicazione Screen Translator |
| 📄 **CREA_COLLEGAMENTO_DESKTOP.bat** | Opzionale | Crea un'icona sul Desktop per avviare velocemente |

### **Guide da Leggere:**

| File | Per Chi | Contenuto |
|------|---------|-----------|
| 📖 **INIZIA_QUI.txt** | ⭐ **Tutti - LEGGI PRIMO!** | Istruzioni rapide per iniziare |
| 📖 **LEGGIMI_PRIMO.md** | Chi vuole guida completa | Guida dettagliata passo-passo dall'inizio |
| 📖 **GUIDA_FACILE.md** | Utenti non tecnici | Istruzioni semplificate |
| 📖 **README.md** | Sviluppatori e utenti avanzati | Documentazione tecnica completa |
| 📖 **QUICKSTART.md** | Chi ha fretta | Guida rapida 5 minuti |

---

## 📚 Documentazione Aggiuntiva

| File | Contenuto |
|------|-----------|
| **INSTALL.md** | Guida installazione per sviluppatori |
| **CONTRIBUTING.md** | Come contribuire al progetto |
| **CHANGELOG.md** | Cronologia versioni e modifiche |
| **FEATURES.md** | Lista completa delle funzionalità |
| **LICENSE** | Licenza MIT del progetto |

---

## ⚙️ File di Configurazione (Non Toccare!)

| File | Cosa Fa |
|------|---------|
| **package.json** | Definisce dipendenze e comandi npm |
| **electron-builder.json** | Configurazione per build Windows |
| **.gitignore** | File da escludere da Git |
| **.env.example** | Template configurazione ambiente |

---

## 📁 Cartelle del Progetto

### **src/** - Codice Sorgente
```
src/
├── main/              # Processo principale Electron
│   └── main.js        # Entry point applicazione
│
├── renderer/          # Interfaccia utente
│   ├── index.html     # Finestra principale
│   ├── app.js         # Logica UI principale
│   ├── capture.html   # Overlay cattura schermo
│   └── capture.js     # Logica cattura
│
├── services/          # Servizi core
│   ├── ocr.js         # OCR con Tesseract.js
│   ├── translator.js  # Traduzione Google
│   └── screenshot.js  # Cattura schermo
│
└── utils/             # Utility
    ├── storage.js     # Salvataggio dati locale
    └── config.js      # Configurazione app
```

### **assets/** - Risorse Grafiche
```
assets/
├── README.md          # Istruzioni per icone
├── icon.ico           # Icona principale (da creare)
├── icon.png           # Icona PNG (da creare)
└── tray-icon.png      # Icona system tray (da creare)
```

### **build/** - File Build (Viene Creata Automaticamente)
Viene creata da electron-builder quando fai il build.

---

## 🗂️ File che NON Vedi (Nascosti/Ignorati)

Questi file/cartelle **non sono nel repository** ma vengono creati automaticamente:

| File/Cartella | Quando Appare | Cosa Contiene |
|---------------|---------------|---------------|
| **node_modules/** | Dopo `INSTALLA.bat` | Librerie e dipendenze (circa 200MB) |
| **dist/** | Dopo `npm run build` | File .exe compilati per Windows |
| **package-lock.json** | Dopo `npm install` | Lock delle versioni dipendenze |
| **.env** | Se lo crei manualmente | Configurazioni personali |

---

## 📊 Struttura Visuale Completa

```
screen-translator-windows/
│
├── 📄 INIZIA_QUI.txt               ⭐ Leggi questo!
├── 📄 INSTALLA.bat                 ⭐ Esegui per installare
├── 📄 AVVIA.bat                    ⭐ Esegui per avviare
│
├── 📖 Guide per utenti
│   ├── LEGGIMI_PRIMO.md
│   ├── GUIDA_FACILE.md
│   └── README.md
│
├── 📚 Documentazione
│   ├── QUICKSTART.md
│   ├── INSTALL.md
│   ├── CONTRIBUTING.md
│   ├── CHANGELOG.md
│   └── FEATURES.md
│
├── ⚙️ Configurazione
│   ├── package.json
│   ├── electron-builder.json
│   └── .env.example
│
├── 📁 src/                         # Codice sorgente
│   ├── main/                       # Processo Electron
│   ├── renderer/                   # UI
│   ├── services/                   # OCR, traduzione
│   └── utils/                      # Utility
│
├── 📁 assets/                      # Icone e risorse
│
└── 🚫 Non nel repo
    ├── node_modules/               # Creato da npm install
    ├── dist/                       # Creato da build
    └── package-lock.json
```

---

## 🎯 Riepilogo per Utenti Finali

**Cosa ti serve:**

1. **Scaricare il progetto** da GitHub
2. **Installare Node.js** (una volta)
3. **Doppio click** su `INSTALLA.bat` (una volta)
4. **Doppio click** su `AVVIA.bat` (ogni volta)

**File da leggere:**
- `INIZIA_QUI.txt` - Per capire da dove partire
- `LEGGIMI_PRIMO.md` - Per guida completa

**File da ignorare:**
- Tutto il resto! Gli script `.bat` fanno tutto automaticamente

---

## 🔧 Per Sviluppatori

**File importanti:**
- `package.json` - Dipendenze e script
- `src/` - Codice sorgente da modificare
- `electron-builder.json` - Configurazione build

**Comandi utili:**
```bash
npm install          # Installa dipendenze
npm start            # Avvia app
npm run dev          # Avvia con DevTools
npm run build        # Build Windows x64
```

---

## 📏 Dimensioni Progetto

| Tipo | Dimensione |
|------|------------|
| Codice sorgente | ~100 KB |
| Documentazione | ~150 KB |
| node_modules (dopo install) | ~200 MB |
| Build finale (.exe) | ~150 MB |

---

## ❓ FAQ

**Q: Posso cancellare alcuni file?**
A: NO! Tutti i file sono necessari. Cancella solo `node_modules/` se vuoi risparmiare spazio (poi riesegui `INSTALLA.bat`).

**Q: Dove vanno i dati dell'app?**
A: In `%APPDATA%/screen-translator-windows/` (cronologia, configurazione)

**Q: Posso spostare la cartella?**
A: Sì! Tutto il progetto è portabile. Sposta dove vuoi.

**Q: Posso rinominare i file .bat?**
A: Meglio di no, ma funzionerebbe comunque.

---

## 🎉 Conclusione

**Per usare l'app:**
1. Leggi `INIZIA_QUI.txt`
2. Segui i 4 passi
3. Usa `AVVIA.bat`

**Per saperne di più:**
- Leggi le guide nella sezione "Guide per utenti"

**Per sviluppare:**
- Leggi `CONTRIBUTING.md` e `INSTALL.md`

---

Versione documento: 1.0.0
Ultimo aggiornamento: 2024-11-13
