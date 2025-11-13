# 📸 Screen Translator - Windows Desktop App

Applicazione desktop nativa per **Windows x64** che permette di catturare testo dallo schermo e tradurlo automaticamente dall'inglese all'italiano.

![Platform](https://img.shields.io/badge/platform-Windows%2010%2F11-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Version](https://img.shields.io/badge/version-1.0.0-orange)

---

## 🎯 **PER UTENTI NON TECNICI** - INIZIA QUI!

**Se non sei uno sviluppatore**, segui queste guide semplificate:

📖 **[INIZIA_QUI.txt](INIZIA_QUI.txt)** ⭐ **LEGGI QUESTO PER PRIMO!**
📖 **[LEGGIMI_PRIMO.md](LEGGIMI_PRIMO.md)** - Guida completa passo-passo
📖 **[GUIDA_FACILE.md](GUIDA_FACILE.md)** - Istruzioni semplificate

**File da usare (semplici click):**
- 📄 `INSTALLA.bat` ← Doppio click per installare (solo prima volta)
- 📄 `AVVIA.bat` ← Doppio click per avviare l'app

**In 4 passi:**
1. Scarica questo progetto (ZIP o git clone)
2. Installa Node.js da https://nodejs.org
3. Doppio click su `INSTALLA.bat`
4. Doppio click su `AVVIA.bat`

---

## ✨ Funzionalità

- 🖼️ **Cattura Schermo Selettiva**: Selezione rettangolare come lo Strumento di Cattura Windows
- 🔍 **OCR Automatico**: Estrazione testo tramite Tesseract.js (completamente offline)
- 🌍 **Traduzione EN→IT**: Traduzione automatica con Google Translate
- 💾 **Cronologia**: Salvataggio automatico delle ultime 100 traduzioni
- ⌨️ **Shortcut Globale**: `Ctrl+Shift+C` per cattura rapida
- 🎯 **System Tray**: Icona nella barra applicazioni Windows
- 🚀 **Leggero e Veloce**: Interfaccia nativa Electron ottimizzata

## 📋 Requisiti

- **Sistema Operativo**: Windows 10/11 (x64)
- **RAM**: Minimo 4GB
- **Spazio Disco**: ~150MB per l'installazione
- **Connessione Internet**: Necessaria solo per la traduzione

## 🚀 Installazione

### Metodo 1: Installer (Consigliato)

1. Scarica l'installer `.exe` dalla sezione [Releases](../../releases)
2. Esegui l'installer e segui le istruzioni
3. L'applicazione si avvierà automaticamente

### Metodo 2: Portable

1. Scarica la versione portable `.exe` dalle [Releases](../../releases)
2. Esegui il file senza installazione
3. Perfetto per USB o esecuzione temporanea

## 🛠️ Build dal Sorgente

```bash
# 1. Clona il repository
git clone https://github.com/tuousername/screen-translator-windows.git
cd screen-translator-windows

# 2. Installa dipendenze
npm install

# 3. Avvia in modalità sviluppo
npm run dev

# 4. Build per Windows x64
npm run build
```

I file compilati saranno in `dist/`:
- `Screen Translator Setup 1.0.0.exe` - Installer NSIS
- `Screen Translator 1.0.0.exe` - Versione portable

## 📖 Come Usare

### Avvio Rapido

1. **Avvia l'applicazione** dal menu Start o dall'icona desktop
2. **Cattura schermo**:
   - Clicca su "Nuova Cattura" oppure
   - Premi `Ctrl+Shift+C` da qualsiasi punto
3. **Seleziona area**: Trascina il mouse per selezionare l'area con testo
4. **Attendi elaborazione**: L'app estrae e traduce automaticamente
5. **Copia risultato**: Usa il pulsante "Copia Testo" per copiare la traduzione

### Shortcut da Tastiera

| Shortcut | Azione |
|----------|--------|
| `Ctrl+Shift+C` | Avvia cattura schermo |
| `ESC` | Annulla cattura in corso |

### System Tray

L'app si minimizza nella system tray (vicino all'orologio). Menu disponibili:
- **Mostra Applicazione**: Riapre la finestra principale
- **Nuova Cattura**: Avvia cattura schermo
- **Cronologia**: Visualizza traduzioni precedenti
- **Impostazioni**: Configura l'app (in sviluppo)
- **Esci**: Chiude completamente l'app

## 🎨 Screenshot

### Finestra Principale
```
┌─────────────────────────────────────┐
│  📸 Screen Translator      [_][□][×]│
│  Cattura, Estrai e Traduci - EN→IT  │
├─────────────────────────────────────┤
│  [🖼️ Nuova Cattura]                 │
│  Ctrl+Shift+C                        │
├─────────────────────────────────────┤
│  🖼️ Anteprima Cattura               │
│  ┌─────────────────────────────┐    │
│  │ [Immagine catturata]        │    │
│  └─────────────────────────────┘    │
│                                      │
│  📝 Testo Originale (EN)             │
│  ┌─────────────────────────────┐    │
│  │ Hello World!                │    │
│  │ This is a test.             │    │
│  └─────────────────────────────┘    │
│                                      │
│  🇮🇹 Traduzione (IT)                 │
│  ┌─────────────────────────────┐    │
│  │ Ciao Mondo!                 │    │
│  │ Questo è un test.           │    │
│  └─────────────────────────────┘    │
│                                      │
│  [📋 Copia] [📚 Cronologia] [🗑️]    │
└─────────────────────────────────────┘
```

### Modalità Cattura
Overlay fullscreen semi-trasparente con cursore crosshair e box di selezione verde.

## ⚙️ Configurazione

### File di Configurazione

Le impostazioni vengono salvate automaticamente in:
```
%APPDATA%/screen-translator-windows/config.json
```

### Opzioni Disponibili

```json
{
  "shortcut": "CommandOrControl+Shift+C",
  "autoStart": false,
  "minimizeToTray": true,
  "language": {
    "from": "en",
    "to": "it"
  },
  "ocrEngine": "tesseract"
}
```

## 🔧 Tecnologie Utilizzate

- **Framework**: Electron 28
- **OCR**: Tesseract.js 5.0 (completamente offline)
- **Traduzione**: translate-google (API gratuita)
- **Storage**: electron-store (persistenza locale)
- **Build**: electron-builder (installer Windows)

## 🐛 Risoluzione Problemi

### L'app non si avvia
- Verifica di avere Windows 10/11 x64
- Prova a eseguire come amministratore
- Controlla che non sia bloccata dall'antivirus

### OCR non funziona
- Verifica che l'immagine contenga testo leggibile
- Aumenta la dimensione dell'area di cattura
- Assicurati che il testo sia in inglese

### Traduzione non funziona
- Verifica la connessione internet
- Controlla il firewall Windows
- Prova a riavviare l'applicazione

### Shortcut Ctrl+Shift+C non funziona
- L'app deve essere in esecuzione (anche minimizzata)
- Verifica che nessun'altra app usi lo stesso shortcut
- Prova a eseguire l'app come amministratore

## 📝 Cronologia Versioni

### v1.0.0 (2024-11-13)
- ✨ Release iniziale
- 🖼️ Cattura schermo selettiva
- 🔍 OCR con Tesseract.js
- 🌍 Traduzione EN→IT
- 💾 Cronologia traduzioni
- ⌨️ Shortcut globali
- 🎯 System tray integration

## 🤝 Contribuire

I contributi sono benvenuti! Per favore:

1. Fai un fork del progetto
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Commit le modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è rilasciato sotto licenza **MIT**. Vedi il file [LICENSE](LICENSE) per dettagli.

## 👨‍💻 Autore

Screen Translator Windows - 2024

## 🙏 Ringraziamenti

- [Tesseract.js](https://tesseract.projectnaptha.com/) - OCR engine
- [Electron](https://www.electronjs.org/) - Framework desktop
- [translate-google](https://github.com/shikar/NODE_GOOGLE_TRANSLATE) - API traduzione

## 📞 Supporto

Per bug, richieste di feature o domande:
- Apri una [Issue](../../issues) su GitHub
- Controlla le [FAQ](../../wiki/FAQ)

---

**Nota**: Questa applicazione è per uso personale ed educativo. Google Translate è un marchio registrato di Google LLC.
