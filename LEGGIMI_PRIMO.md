# 📖 ISTRUZIONI PER INIZIARE - LEGGI QUI!

## 🎯 Prima di Tutto

Questo progetto è su **GitHub**. Per usarlo sul tuo PC devi:
1. **Scaricare** il codice sul tuo computer
2. **Installare** le dipendenze
3. **Avviare** l'applicazione

## 🚀 GUIDA COMPLETA - 4 PASSI SEMPLICISSIMI

---

### **📥 PASSO 1: Scarica il Progetto sul tuo PC**

Hai **3 opzioni** (scegli la più facile per te):

#### **Opzione A: Download ZIP (PIÙ FACILE - NO GIT)** ⭐ CONSIGLIATA

1. Vai sulla pagina GitHub del progetto:
   ```
   https://github.com/sinmar123/app32_cattura_schermo_traduzione
   ```

2. Clicca sul **pulsante verde "Code"** (in alto a destra)

3. Clicca su **"Download ZIP"**

4. Il file ZIP viene scaricato (es. nella cartella Download)

5. **Apri il file ZIP** e clicca **"Estrai tutto"**

6. Scegli dove estrarre, esempio: `Desktop`

7. **Rinomina** la cartella estratta in: `screen-translator`

8. **Apri** la cartella `screen-translator`

✅ **Sei pronto per il PASSO 2!**

---

#### **Opzione B: Usa Git (Se lo hai installato)**

1. **Apri** il Prompt dei comandi (premi `Win`, scrivi `cmd`, Invio)

2. **Vai** dove vuoi salvare l'app (esempio Desktop):
   ```
   cd Desktop
   ```

3. **Clona** il repository:
   ```
   git clone https://github.com/sinmar123/app32_cattura_schermo_traduzione.git
   ```

4. **Entra** nella cartella:
   ```
   cd app32_cattura_schermo_traduzione
   ```

✅ **Sei pronto per il PASSO 2!**

---

#### **Opzione C: Usa GitHub Desktop (Se ce l'hai)**

1. **Apri** GitHub Desktop

2. Clicca su **"File"** → **"Clone Repository"**

3. Vai su **"URL"** e incolla:
   ```
   https://github.com/sinmar123/app32_cattura_schermo_traduzione.git
   ```

4. Clicca **"Clone"**

5. Aspetta che finisca

✅ **Sei pronto per il PASSO 2!**

---

### **💻 PASSO 2: Installa Node.js (Solo la Prima Volta)**

**Cos'è Node.js?** È il software che serve per far funzionare l'app.

1. **Vai su**: https://nodejs.org/it

2. **Clicca** sul pulsante verde **"Download Node.js (LTS)"**
   - È gratuito e sicuro!
   - Versione consigliata: 20.x LTS

3. **Apri** il file scaricato (tipo `node-v20.10.0-x64.msi`)

4. **Segui** l'installazione:
   - Clicca "Next"
   - Accetta licenza
   - Clicca "Next" → "Next" → "Next"
   - Clicca "Install"
   - Se chiede permessi amministratore, clicca "Sì"

5. **Aspetta** 2-3 minuti che finisca

6. Clicca **"Finish"**

#### **✅ Verifica che funzioni:**

1. Premi `Win + R`
2. Scrivi: `cmd` e premi Invio
3. Nella finestra nera scrivi: `node --version`
4. Dovresti vedere: `v20.10.0` (o simile)
5. Scrivi: `npm --version`
6. Dovresti vedere: `10.2.3` (o simile)

Se vedi i numeri di versione = **Tutto OK!** ✅

Se vedi errore = Riavvia il PC e riprova

---

### **⚙️ PASSO 3: Installa l'Applicazione (Automatico!)**

Ora hai:
- ✅ Il codice sul PC (PASSO 1)
- ✅ Node.js installato (PASSO 2)

Installa l'app:

#### **Metodo Automatico (FACILE!):** ⭐

1. **Apri** la cartella del progetto (quella che hai scaricato/clonato)

2. **Trova** il file chiamato: **`INSTALLA.bat`**

3. **Doppio click** su `INSTALLA.bat`

4. Si aprirà una finestra nera che dice "Installazione dipendenze..."

5. **Aspetta 3-5 minuti** (scarica le librerie necessarie)

6. Quando finisce, chiede: **"Vuoi avviare l'app adesso?"**
   - Scrivi **S** e premi Invio = L'app parte subito! 🎉
   - Scrivi **N** e premi Invio = Avvierai manualmente dopo

✅ **Installazione completata!**

#### **Metodo Manuale (Se preferisci):**

1. **Apri** il Prompt dei comandi (`Win` + `R`, scrivi `cmd`, Invio)

2. **Vai** nella cartella del progetto:
   ```
   cd Desktop\screen-translator
   ```
   (Cambia `Desktop\screen-translator` con il percorso reale)

3. **Installa** le dipendenze:
   ```
   npm install
   ```

4. **Aspetta** 3-5 minuti

5. Quando finisce, **avvia** l'app:
   ```
   npm start
   ```

✅ **L'app si aprirà!**

---

### **🎮 PASSO 4: Usa l'Applicazione!**

L'app è ora installata e aperta! 🎉

#### **Come Funziona:**

1. **Vedrai** una finestra viola con scritto "📸 Screen Translator"

2. **Cattura schermo**:
   - Clicca sul pulsante **"🖼️ Nuova Cattura"**
   - OPPURE premi sulla tastiera: **`Ctrl + Shift + C`**

3. **Lo schermo diventa scuro** = Modalità cattura attiva!

4. **Trascina** il mouse per selezionare l'area con testo inglese
   - Appare un rettangolo verde
   - Vedi le dimensioni (es. "250 × 180")

5. **Rilascia** il mouse quando hai selezionato l'area

6. **Aspetta 5-10 secondi** mentre l'app:
   - Estrae il testo dall'immagine (OCR)
   - Traduce dall'inglese all'italiano

7. **Vedi il risultato!**
   - In alto: Testo originale in inglese
   - In basso: Traduzione in italiano 🇮🇹

8. **Copia la traduzione**:
   - Clicca sul pulsante **"📋 Copia Testo"**
   - Incolla dove vuoi (Ctrl+V)

#### **Altre Funzioni:**

- **📚 Cronologia**: Vedi le ultime 100 traduzioni
- **🗑️ Pulisci**: Cancella i risultati correnti
- **Chiudi finestra**: L'app va nella barra in basso (system tray)
- **Esci davvero**: Click destro icona tray → "Esci"

---

## 🔄 Le Prossime Volte

Dopo aver fatto l'installazione **una volta**, per avviare l'app:

### **Metodo Facile:**
1. **Vai** nella cartella del progetto
2. **Doppio click** su **`AVVIA.bat`**
3. L'app parte! 🚀

### **Metodo Alternativo:**
```
cd Desktop\screen-translator
npm start
```

---

## 🎯 Esempio Pratico

**Scenario:** Hai un errore in inglese su un sito web

1. **Avvia** l'app (doppio click `AVVIA.bat`)
2. **Premi** `Ctrl + Shift + C`
3. **Seleziona** con il mouse l'errore
4. **Attendi** 5 secondi
5. **Leggi** la traduzione italiana!
6. **Copia** con il pulsante se serve

---

## ❓ Problemi e Soluzioni

### **"Il file INSTALLA.bat non si apre"**
➡️ Forse hai un Mac o Linux. Questa app è solo per **Windows**.

### **"npm non è riconosciuto..."**
➡️ Node.js non è installato. Ripeti il **PASSO 2**.

### **"Installazione fallita"**
➡️ Prova:
1. Click destro su `INSTALLA.bat` → "Esegui come amministratore"
2. Disattiva l'antivirus temporaneamente
3. Verifica la connessione internet

### **"Lo shortcut non funziona"**
➡️ Esegui l'app come amministratore:
- Click destro su `AVVIA.bat` → "Esegui come amministratore"

### **"L'app non trova il testo"**
➡️ Assicurati:
- Il testo sia leggibile (non troppo piccolo)
- Buon contrasto (nero su bianco è meglio)
- Il testo sia in inglese
- L'area sia abbastanza grande (min 100x100px)

### **"La traduzione non funziona"**
➡️ Serve **internet** per tradurre! Verifica la connessione.

### **"L'app è lenta"**
➡️ È normale:
- OCR: 3-5 secondi
- Traduzione: 1-2 secondi
- Totale: 5-8 secondi circa

---

## 🎁 BONUS: Avvio Automatico

Vuoi che l'app parta quando accendi il PC?

1. **Premi** `Win + R`
2. **Scrivi**: `shell:startup` e premi Invio
3. **Copia** il file `AVVIA.bat` dentro
4. **Fatto!** Al prossimo avvio, l'app parte da sola ✨

---

## 📞 Serve Ancora Aiuto?

Leggi le altre guide:
- `GUIDA_FACILE.md` - Guida dettagliata
- `README.md` - Documentazione completa
- `QUICKSTART.md` - Guida rapida

Oppure cerca su Google: "installare Node.js Windows"

---

## ✅ Riepilogo Veloce

```
1. Scarica progetto da GitHub (ZIP o git clone)
2. Installa Node.js da nodejs.org
3. Doppio click su INSTALLA.bat
4. Aspetta 3-5 minuti
5. Doppio click su AVVIA.bat
6. Usa l'app! 🎉
```

---

## 🎊 Buon Utilizzo!

Ora hai tutto quello che serve per:
- ✅ Scaricare il progetto
- ✅ Installare Node.js
- ✅ Installare l'app
- ✅ Avviare l'app
- ✅ Usare l'app

**Inizia dal PASSO 1 e procedi in ordine!** 🚀

Se tutto funziona, puoi tradurre qualsiasi testo inglese dallo schermo in pochi secondi!

Buona traduzione! 🇮🇹✨
