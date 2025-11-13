# Contribuire a Screen Translator

Grazie per il tuo interesse nel contribuire a Screen Translator! 🎉

## 📋 Indice

- [Codice di Condotta](#codice-di-condotta)
- [Come Contribuire](#come-contribuire)
- [Segnalare Bug](#segnalare-bug)
- [Proporre Nuove Funzionalità](#proporre-nuove-funzionalità)
- [Sviluppo](#sviluppo)
- [Pull Request](#pull-request)
- [Stile del Codice](#stile-del-codice)

## 🤝 Codice di Condotta

Questo progetto segue un codice di condotta. Partecipando, ti impegni a rispettarlo:

- Usa un linguaggio accogliente e inclusivo
- Rispetta i punti di vista e le esperienze degli altri
- Accetta con grazia le critiche costruttive
- Concentrati su ciò che è meglio per la comunità
- Mostra empatia verso gli altri membri della comunità

## 🛠️ Come Contribuire

Ci sono molti modi per contribuire:

### 1. Segnalare Bug 🐛
Trovato un bug? [Apri una issue](../../issues/new?template=bug_report.md)

### 2. Proporre Funzionalità ✨
Hai un'idea? [Proponi una feature](../../issues/new?template=feature_request.md)

### 3. Migliorare Documentazione 📝
La documentazione può sempre migliorare!

### 4. Scrivere Codice 💻
Implementa nuove feature o risolvi bug esistenti

### 5. Testare 🧪
Testa le nuove release e segnala problemi

## 🐛 Segnalare Bug

### Prima di segnalare

- Verifica che il bug non sia già stato segnalato
- Assicurati di usare l'ultima versione
- Raccogli informazioni dettagliate sul problema

### Template Bug Report

```markdown
## Descrizione del Bug
[Descrizione chiara del problema]

## Passi per Riprodurre
1. Vai a '...'
2. Clicca su '....'
3. Osserva errore

## Comportamento Atteso
[Cosa dovrebbe succedere]

## Comportamento Attuale
[Cosa succede invece]

## Screenshot
[Se possibile, aggiungi screenshot]

## Ambiente
- OS: [es. Windows 10 x64]
- Versione App: [es. 1.0.0]
- Node Version: [es. 18.0.0]

## Informazioni Aggiuntive
[Qualsiasi altro contesto utile]
```

## ✨ Proporre Nuove Funzionalità

### Template Feature Request

```markdown
## Funzionalità Proposta
[Descrizione della funzionalità]

## Motivazione
[Perché questa funzionalità è utile?]

## Soluzione Proposta
[Come dovrebbe funzionare?]

## Alternative Considerate
[Altre possibili soluzioni]

## Impatto
- [ ] Breaking change
- [ ] Richiede migrazione dati
- [ ] Impatta performance
```

## 💻 Sviluppo

### Setup Ambiente

```bash
# Fork e clona il repository
git clone https://github.com/tuo-username/screen-translator-windows.git
cd screen-translator-windows

# Installa dipendenze
npm install

# Crea un branch per la tua feature
git checkout -b feature/nome-feature

# Avvia in modalità dev
npm run dev
```

### Struttura del Progetto

```
src/
├── main/           # Processo principale Electron
│   └── main.js
├── renderer/       # UI e logica frontend
│   ├── index.html
│   ├── app.js
│   ├── capture.html
│   └── capture.js
├── services/       # Servizi core (OCR, traduzione)
│   ├── ocr.js
│   ├── translator.js
│   └── screenshot.js
└── utils/          # Utility e configurazione
    ├── storage.js
    └── config.js
```

### Workflow di Sviluppo

1. **Crea un branch**: `git checkout -b tipo/descrizione`
   - `feature/` per nuove funzionalità
   - `fix/` per bug fix
   - `docs/` per documentazione
   - `refactor/` per refactoring

2. **Sviluppa**: Implementa le modifiche

3. **Testa**: Verifica che tutto funzioni
   ```bash
   npm start
   npm run build  # Test del build
   ```

4. **Commit**: Usa commit messaggi chiari
   ```bash
   git commit -m "feat: aggiungi supporto dark mode"
   ```

5. **Push**:
   ```bash
   git push origin feature/nome-feature
   ```

6. **Pull Request**: Apri una PR su GitHub

## 📤 Pull Request

### Checklist PR

Prima di aprire una PR, verifica:

- [ ] Il codice compila senza errori
- [ ] Hai testato manualmente le modifiche
- [ ] La documentazione è aggiornata
- [ ] Il commit message segue le convenzioni
- [ ] Il codice segue lo stile del progetto
- [ ] Non ci sono conflitti con `main`

### Template Pull Request

```markdown
## Descrizione
[Descrizione delle modifiche]

## Tipo di Change
- [ ] Bug fix
- [ ] Nuova feature
- [ ] Breaking change
- [ ] Documentazione

## Issue Correlata
Closes #(issue number)

## Come Testare
1. [Step 1]
2. [Step 2]

## Screenshot
[Se applicabile]

## Checklist
- [ ] Codice testato
- [ ] Documentazione aggiornata
- [ ] No errori console
- [ ] Build funzionante
```

## 🎨 Stile del Codice

### JavaScript

```javascript
// ✅ Buone pratiche
const myFunction = async () => {
  try {
    const result = await someAsyncOperation();
    return result;
  } catch (error) {
    console.error('Errore:', error);
    throw error;
  }
};

// ❌ Evitare
function myFunction() {
  someAsyncOperation().then(result => {
    return result
  }).catch(err => console.log(err))
}
```

### Convenzioni

- **Nomi variabili**: camelCase (`myVariable`)
- **Nomi costanti**: UPPER_CASE (`MAX_SIZE`)
- **Nomi file**: kebab-case (`my-file.js`)
- **Indentazione**: 2 spazi
- **Quotes**: Single quotes `'` per stringhe
- **Semicolon**: Sempre usare `;`

### Commenti

```javascript
/**
 * Funzione che fa qualcosa
 * @param {string} text - Testo da elaborare
 * @returns {Promise<string>} Risultato elaborato
 */
async function processText(text) {
  // Implementazione
}
```

## 🧪 Testing

### Test Manuali

```bash
# 1. Test cattura schermo
Ctrl+Shift+C → Seleziona area → Verifica cattura

# 2. Test OCR
Cattura testo chiaro → Verifica estrazione corretta

# 3. Test traduzione
Verifica traduzione EN→IT corretta

# 4. Test cronologia
Effettua multiple catture → Verifica salvataggio

# 5. Test system tray
Minimizza → Verifica icona → Testa menu
```

### Test Build

```bash
npm run build
# Installa l'exe generato
# Testa tutte le funzionalità
```

## 📝 Convenzioni Commit

Usa [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nuova funzionalità
- `fix:` Bug fix
- `docs:` Solo documentazione
- `style:` Formatting (no code change)
- `refactor:` Refactoring
- `test:` Aggiunta test
- `chore:` Maintenance

**Esempi:**
```bash
feat: aggiungi supporto lingue multiple
fix: risolvi crash su Windows 11
docs: aggiorna README con nuove istruzioni
style: formatta codice con prettier
refactor: migliora struttura servizi
```

## 🏆 Riconoscimenti

I contributori verranno aggiunti alla lista in `CONTRIBUTORS.md`!

## ❓ Domande?

- Apri una [Discussion](../../discussions)
- Contatta via [Issues](../../issues)

Grazie per contribuire a Screen Translator! 🚀
