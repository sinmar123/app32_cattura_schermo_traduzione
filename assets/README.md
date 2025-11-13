# Assets Folder

Questa cartella contiene le risorse grafiche dell'applicazione.

## File Necessari

### icon.ico
Icona principale dell'applicazione Windows (256x256 px).
Formati richiesti: .ico con multiple risoluzioni (16x16, 32x32, 48x48, 256x256)

### icon.png
Versione PNG dell'icona (256x256 px) per uso generico.

### tray-icon.png
Icona per la system tray (16x16 o 32x32 px).
Deve essere semplice e riconoscibile anche a dimensioni ridotte.

## Come Generare le Icone

### Opzione 1: Tool Online
1. Vai su https://www.icoconverter.com/
2. Carica un'immagine PNG 256x256
3. Seleziona tutti i formati
4. Scarica il file .ico

### Opzione 2: ImageMagick
```bash
convert icon.png -define icon:auto-resize=256,128,96,64,48,32,16 icon.ico
```

### Opzione 3: GIMP
1. Apri l'immagine in GIMP
2. File > Export As
3. Seleziona formato .ico
4. Scegli tutte le risoluzioni

## Icone Temporanee

Per il testing, puoi usare icone placeholder o emoji:
- 📸 per l'icona principale
- 🖼️ per la system tray

## Design Consigliato

L'icona dovrebbe rappresentare:
- 📸 Una fotocamera/screenshot
- 🔤 Testo/OCR
- 🌍 Traduzione/lingua

Colori suggeriti: Blu, Viola, Verde (come il gradiente dell'UI)
