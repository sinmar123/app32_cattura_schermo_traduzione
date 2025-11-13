# 🚀 Quick Start Guide

Guida rapida per iniziare a usare Screen Translator in meno di 5 minuti.

## Per Utenti Windows

### 1. Installa l'App (30 secondi)

**Opzione A: Installer** (Consigliato)
```
1. Scarica "Screen-Translator-Setup-1.0.0.exe" dalle Releases
2. Doppio click → Segui wizard → Fine
3. L'app si avvia automaticamente
```

**Opzione B: Portable** (No installazione)
```
1. Scarica "Screen-Translator-1.0.0-Portable.exe"
2. Doppio click → Usa subito
```

### 2. Primo Utilizzo (1 minuto)

**Metodo 1: Pulsante**
```
1. Clicca "🖼️ Nuova Cattura"
2. Trascina mouse sull'area con testo
3. Attendi 5-10 secondi
4. Vedi testo tradotto!
```

**Metodo 2: Shortcut** (Più veloce)
```
1. Premi Ctrl+Shift+C da qualsiasi app
2. Seleziona area
3. Pronto!
```

### 3. Funzioni Utili

**Copia Traduzione**
```
Clicca "📋 Copia Testo" → Incolla dove vuoi
```

**Vedi Cronologia**
```
Clicca "📚 Cronologia" → Ultimi 100 traduzioni
```

**Minimizza**
```
Chiudi finestra → App va in tray (vicino orologio)
Click destro icona tray → Menu opzioni
```

---

## Per Sviluppatori

### Setup Veloce (5 minuti)

```bash
# 1. Clona e entra
git clone <repo-url>
cd screen-translator-windows

# 2. Installa (2-3 minuti)
npm install

# 3. Avvia
npm start

# 4. Testa cattura
Ctrl+Shift+C → Seleziona testo → Verifica output
```

### Test Rapidi

**Test OCR:**
```javascript
// Apri DevTools (F12) nel renderer
const { extractText } = require('../services/ocr');
extractText('path/to/test-image.png').then(console.log);
```

**Test Traduzione:**
```javascript
const { translateText } = require('../services/translator');
translateText('Hello World', 'en', 'it').then(console.log);
// Output: "Ciao Mondo"
```

**Test Storage:**
```javascript
const { saveTranslation, getHistory } = require('../services/storage');
saveTranslation({ original: 'test', translated: 'test' });
console.log(getHistory(5));
```

### Build Rapido

```bash
# Build completo (3-5 minuti)
npm run build

# Output:
# dist/Screen-Translator-Setup-1.0.0.exe
# dist/Screen-Translator-1.0.0-Portable.exe
```

---

## 🎯 Casi d'Uso Comuni

### 1. Traduci Errori di Programmazione
```
1. Errore in console/IDE → Ctrl+Shift+C
2. Seleziona messaggio errore
3. Leggi traduzione italiana
```

### 2. Traduci Documentazione Tecnica
```
1. Apri docs inglesi in browser
2. Ctrl+Shift+C su paragrafo
3. Comprendi meglio
```

### 3. Traduci Interfacce Software
```
1. App/Game in inglese
2. Ctrl+Shift+C su testi UI
3. Capisci cosa fare
```

### 4. Learning Inglese
```
1. Leggi testo inglese
2. Cattura parole sconosciute
3. Vedi traduzione + contesto
```

---

## ⚙️ Configurazione Rapida

### Cambia Shortcut (se Ctrl+Shift+C è occupata)

Modifica `%APPDATA%/screen-translator-windows/config.json`:
```json
{
  "settings": {
    "shortcut": "CommandOrControl+Alt+C"
  }
}
```

### Avvio Automatico con Windows

```
1. Win+R → shell:startup
2. Trascina shortcut di Screen Translator
3. Riavvia → App parte automaticamente
```

### Migliora Accuratezza OCR

**Tips:**
- ✅ Cattura aree più grandi (min 100x100px)
- ✅ Testo chiaro su sfondo uniforme
- ✅ Font leggibili (evita handwriting)
- ✅ Buon contrasto colori
- ❌ Evita testo inclinato/ruotato
- ❌ Evita testo molto piccolo (<10px)

---

## 🐛 Problemi Comuni e Fix Istantanei

### Shortcut non funziona
```
→ Esegui app come amministratore
   Click destro .exe → "Esegui come amministratore"
```

### OCR non trova testo
```
→ Aumenta dimensione area cattura
→ Verifica che sia testo (non immagine di testo)
→ Controlla che sia inglese
```

### Traduzione fallisce
```
→ Verifica connessione internet
→ Riavvia app
→ Controlla firewall Windows
```

### App non parte
```
→ Verifica Windows 10/11 x64
→ Reinstalla con installer ufficiale
→ Controlla antivirus (aggiungi eccezione)
```

---

## 📊 Benchmark Performance

**Tempi medi su Windows 10 (i5, 8GB RAM):**

| Operazione | Tempo |
|------------|-------|
| Avvio app | ~2s |
| Cattura schermo | <1s |
| OCR (area 300x300px) | 3-5s |
| Traduzione | 1-2s |
| Totale (cattura→traduzione) | 5-8s |

**Requisiti consigliati per performance ottimali:**
- CPU: Intel i5 o superiore
- RAM: 8GB o superiore
- SSD: Consigliato per avvio più rapido

---

## 🎓 Video Tutorial (TODO)

_Verranno aggiunti video tutorial per:_
- [ ] Primo utilizzo
- [ ] Configurazione avanzata
- [ ] Tips & tricks
- [ ] Troubleshooting

---

## 💡 Pro Tips

1. **Hotkey sempre attiva**: Tieni app minimizzata in tray, usa solo Ctrl+Shift+C
2. **Traduzioni veloci**: Seleziona solo la frase che ti interessa, non tutto lo schermo
3. **Cronologia**: Tutte le traduzioni sono salvate, riutilizzale senza ricatturare
4. **Copia rapida**: Ctrl+Shift+C → Selezione → Attendi → Ctrl+C automatico (TODO: feature futura)

---

## 📞 Serve Aiuto?

- 📖 [README Completo](README.md)
- 🔧 [Guida Installazione](INSTALL.md)
- 🐛 [Segnala Bug](../../issues)
- ❓ [FAQ](../../wiki/FAQ)

**Inizia subito!** 🚀
