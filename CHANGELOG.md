# Changelog

Tutte le modifiche notevoli a questo progetto verranno documentate in questo file.

Il formato è basato su [Keep a Changelog](https://keepachangelog.com/it/1.0.0/),
e questo progetto aderisce al [Semantic Versioning](https://semver.org/lang/it/).

## [1.0.0] - 2024-11-13

### Aggiunto
- ✨ Cattura schermo selettiva con overlay fullscreen
- 🔍 OCR automatico con Tesseract.js (completamente offline)
- 🌍 Traduzione automatica EN→IT con Google Translate
- 💾 Sistema di cronologia con salvataggio automatico (ultime 100 traduzioni)
- ⌨️ Shortcut globale `Ctrl+Shift+C` per cattura rapida
- 🎯 Integrazione system tray Windows
- 📋 Funzione copia negli appunti
- 🖼️ Anteprima visuale delle catture
- 📊 Indicatore di stato e progresso elaborazione
- 🎨 Interfaccia grafica moderna con gradiente viola-blu

### Caratteristiche Tecniche
- Electron 28 per applicazione desktop nativa
- Tesseract.js 5.0 per OCR locale
- electron-store per persistenza dati
- electron-builder per generazione installer Windows
- Supporto NSIS installer e versione portable

### Supporto Piattaforma
- Windows 10 x64
- Windows 11 x64

---

## [Prossime Versioni]

### Pianificato per v1.1.0
- [ ] Pannello impostazioni completo
- [ ] Supporto lingue aggiuntive (ES, FR, DE)
- [ ] OCR multi-lingua con rilevamento automatico
- [ ] Esportazione cronologia (JSON, CSV)
- [ ] Ricerca nella cronologia
- [ ] Temi personalizzabili (chiaro/scuro)

### Pianificato per v1.2.0
- [ ] Auto-update integrato
- [ ] Shortcut personalizzabili
- [ ] Supporto monitor multipli
- [ ] Hotkey per traduzioni dirette (senza UI)
- [ ] Integrazione con traduttori alternativi (DeepL, LibreTranslate)
- [ ] Cache traduzioni per ridurre richieste API

### Idee Future
- [ ] Plugin system per estensioni
- [ ] API REST locale per integrazioni
- [ ] Modalità batch per multiple immagini
- [ ] Supporto PDF e documenti
- [ ] Cloud sync cronologia (opzionale)
- [ ] Versione macOS e Linux
