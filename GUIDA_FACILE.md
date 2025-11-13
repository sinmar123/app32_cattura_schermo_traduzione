# 🚀 Guida Installazione SEMPLICE - Per Non Sviluppatori

## 📋 Cosa Ti Serve

1. **Un PC Windows** (Windows 10 o 11)
2. **Connessione Internet** (solo per l'installazione iniziale)
3. **10 minuti di tempo**

## 🎯 Installazione in 3 Passi

### **PASSO 1: Installa Node.js** (Solo la Prima Volta)

Node.js è il software che serve per far funzionare l'applicazione.

1. **Vai su**: https://nodejs.org/
2. **Clicca** sul pulsante verde grande "Download Node.js (LTS)"
3. **Apri** il file scaricato (tipo `node-v20.x.x-x64.msi`)
4. **Clicca** "Next" → "Next" → "Next" → "Install"
5. **Aspetta** che finisca (2-3 minuti)
6. **Clicca** "Finish"

✅ **Come verificare che funziona:**
- Premi `Win + R`
- Scrivi: `cmd` e premi Invio
- Nella finestra nera che si apre, scrivi: `node --version`
- Dovresti vedere qualcosa come `v20.10.0`

---

### **PASSO 2: Scarica l'Applicazione**

**Opzione A - Se hai Git installato:**
1. Apri il Terminale (Prompt dei comandi)
2. Vai nella cartella dove vuoi salvare l'app, esempio:
   ```
   cd Desktop
   ```
3. Scarica l'app:
   ```
   git clone https://github.com/tuousername/screen-translator-windows.git
   cd screen-translator-windows
   ```

**Opzione B - Scarica il file ZIP (PIÙ FACILE):**
1. Vai sulla pagina GitHub del progetto
2. Clicca sul pulsante verde "Code"
3. Clicca "Download ZIP"
4. Apri il file ZIP scaricato
5. Estrai tutto sul Desktop
6. Rinomina la cartella in `screen-translator-windows`

---

### **PASSO 3: Installa e Avvia l'App**

#### **Metodo Automatico (CONSIGLIATO - Più Facile!):**

Ho creato uno script che fa tutto automaticamente:

1. **Apri** la cartella `screen-translator-windows`
2. **Trova** il file `INSTALLA.bat`
3. **Doppio click** su `INSTALLA.bat`
4. **Aspetta** che finisca (3-5 minuti)
5. L'app si avvierà automaticamente! 🎉

#### **Metodo Manuale (Se preferisci):**

1. **Apri** il Prompt dei comandi (Tasto `Win`, scrivi `cmd`, premi Invio)
2. **Vai** nella cartella dell'app:
   ```
   cd Desktop\screen-translator-windows
   ```
3. **Installa** le dipendenze (serve solo la prima volta):
   ```
   npm install
   ```
   ⏱️ Aspetta 3-5 minuti
4. **Avvia** l'applicazione:
   ```
   npm start
   ```

✅ **L'app si aprirà automaticamente!**

---

## 🎮 Come Usare l'App

### **Primo Utilizzo:**

1. **Vedrai** una finestra viola con scritto "Screen Translator"
2. **Clicca** sul pulsante grande "🖼️ Nuova Cattura"

   OPPURE

   **Premi** sulla tastiera: `Ctrl + Shift + C`

3. **Lo schermo diventerà scuro** - è normale!
4. **Trascina** il mouse per selezionare l'area con testo inglese
5. **Aspetta** 5-10 secondi
6. **Boom!** Vedrai il testo tradotto in italiano! 🇮🇹

### **Scorciatoie Utili:**

| Cosa Fare | Come Fare |
|-----------|-----------|
| Catturare schermo | `Ctrl + Shift + C` |
| Annullare cattura | `ESC` |
| Copiare traduzione | Clicca "📋 Copia Testo" |
| Vedere cronologia | Clicca "📚 Cronologia" |
| Chiudere app | Clicca la X (va nella barra in basso) |

### **Icona nella Barra:**

Quando chiudi la finestra, l'app **NON si chiude**, ma va nella **barra in basso a destra** (vicino all'orologio).

- **Click destro** sull'icona → Menu con opzioni
- **Doppio click** sull'icona → Riapre la finestra
- Per **chiudere davvero**: Click destro → "Esci"

---

## 🎯 Esempio Pratico

**Scenario:** Vuoi tradurre un errore in inglese da un sito web

1. **Apri** il sito con l'errore
2. **Premi** `Ctrl + Shift + C`
3. **Seleziona** con il mouse l'area dell'errore
4. **Rilascia** il mouse
5. **Attendi** 5 secondi
6. **Leggi** la traduzione italiana!
7. **Clicca** "📋 Copia Testo" se vuoi salvare la traduzione

---

## ❓ Problemi Comuni

### **"npm non è riconosciuto..."**
➡️ Node.js non è installato correttamente. Ripeti il PASSO 1.

### **Lo shortcut Ctrl+Shift+C non funziona**
➡️ Esegui l'app come Amministratore:
1. Chiudi l'app
2. Click destro su `AVVIA.bat`
3. "Esegui come amministratore"

### **L'app non trova il testo nell'immagine**
➡️ Assicurati che:
- Il testo sia chiaro e leggibile
- L'area catturata non sia troppo piccola
- Il testo sia in inglese
- Ci sia buon contrasto (testo nero su sfondo bianco)

### **La traduzione non funziona**
➡️ Verifica la connessione internet. La traduzione richiede internet.

### **L'app è lenta**
➡️ Normale! L'OCR impiega 5-10 secondi. Più grande l'area, più tempo serve.

---

## 🔄 Prossime Volte

Dopo la prima installazione, per avviare l'app:

**Metodo Veloce:**
1. Doppio click su `AVVIA.bat` nella cartella dell'app

**Metodo Manuale:**
1. Apri Prompt dei comandi
2. `cd Desktop\screen-translator-windows`
3. `npm start`

---

## 🎁 BONUS: Avvio Automatico Windows

Vuoi che l'app parta automaticamente quando accendi il PC?

1. **Premi** `Win + R`
2. **Scrivi**: `shell:startup`
3. **Premi** Invio
4. **Copia** il file `AVVIA.bat` in questa cartella
5. **Riavvia** il PC → L'app partirà da sola! ✨

---

## 📞 Serve Aiuto?

Se qualcosa non funziona:
1. Controlla di aver fatto tutti i passi
2. Riavvia il PC e riprova
3. Verifica che Windows sia aggiornato
4. Disattiva temporaneamente l'antivirus

---

## 🎉 Fatto!

Ora hai l'app installata e funzionante!

**Ricorda:**
- Prima volta: Segui tutti i 3 passi
- Prossime volte: Basta doppio click su `AVVIA.bat`

Buona traduzione! 🚀🇮🇹
