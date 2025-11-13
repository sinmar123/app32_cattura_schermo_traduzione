const { ipcRenderer } = require('electron');
const { extractText } = require('../services/ocr');
const { translateText } = require('../services/translator');

// Elementi DOM
const captureBtn = document.getElementById('captureBtn');
const previewBox = document.getElementById('previewBox');
const loading = document.getElementById('loading');
const originalSection = document.getElementById('originalSection');
const translationSection = document.getElementById('translationSection');
const originalText = document.getElementById('originalText');
const translatedText = document.getElementById('translatedText');
const actionButtons = document.getElementById('actionButtons');
const copyBtn = document.getElementById('copyBtn');
const historyBtn = document.getElementById('historyBtn');
const clearBtn = document.getElementById('clearBtn');
const statusText = document.getElementById('statusText');
const historyPanel = document.getElementById('historyPanel');
const closeHistoryBtn = document.getElementById('closeHistoryBtn');
const historyList = document.getElementById('historyList');

let currentCapture = null;

// Event Listeners
captureBtn.addEventListener('click', () => {
  // Invia messaggio al processo principale per avviare cattura
  // Il main process aprirà la finestra di cattura
  console.log('Starting capture from renderer');
  showStatus('Avvio cattura schermo...');
});

copyBtn.addEventListener('click', () => {
  const text = translatedText.value;
  if (text) {
    navigator.clipboard.writeText(text).then(() => {
      showStatus('Testo copiato negli appunti!', 2000);
    });
  }
});

clearBtn.addEventListener('click', () => {
  resetUI();
  showStatus('Interfaccia pulita');
});

historyBtn.addEventListener('click', () => {
  loadHistory();
  historyPanel.classList.add('active');
});

closeHistoryBtn.addEventListener('click', () => {
  historyPanel.classList.remove('active');
});

// Ricevi cattura dal processo principale
ipcRenderer.on('process-capture', async (event, imageData) => {
  console.log('Received capture data');
  currentCapture = imageData;

  // Mostra anteprima
  previewBox.innerHTML = `<img src="${imageData}" alt="Cattura schermo">`;

  // Avvia elaborazione
  await processCapture(imageData);
});

// Elabora la cattura: OCR + Traduzione
async function processCapture(imageData) {
  try {
    showLoading(true);
    showStatus('Estrazione testo in corso...');

    // Step 1: OCR
    const extractedText = await extractText(imageData);

    if (!extractedText || extractedText.trim().length === 0) {
      throw new Error('Nessun testo trovato nell\'immagine');
    }

    // Mostra testo originale
    originalText.value = extractedText;
    originalSection.style.display = 'block';
    showStatus('Testo estratto, traduzione in corso...');

    // Step 2: Traduzione
    const translated = await translateText(extractedText, 'en', 'it');

    // Mostra traduzione
    translatedText.value = translated;
    translationSection.style.display = 'block';
    actionButtons.style.display = 'flex';

    // Salva nella cronologia
    saveToHistory({
      image: imageData,
      original: extractedText,
      translated: translated
    });

    showStatus('Traduzione completata!', 3000);
    showLoading(false);

  } catch (error) {
    console.error('Errore elaborazione:', error);
    showStatus(`Errore: ${error.message}`, 5000);
    showLoading(false);

    // Mostra errore all'utente
    alert(`Errore durante l'elaborazione:\n${error.message}`);
  }
}

// Salva traduzione nella cronologia
function saveToHistory(data) {
  ipcRenderer.send('save-translation', data);
}

// Carica cronologia
function loadHistory() {
  ipcRenderer.send('get-history');
}

ipcRenderer.on('history-data', (event, history) => {
  historyList.innerHTML = '';

  if (history.length === 0) {
    historyList.innerHTML = '<div style="padding: 20px; text-align: center; color: #999;">Nessuna cronologia</div>';
    return;
  }

  history.forEach(item => {
    const div = document.createElement('div');
    div.className = 'history-item';

    const time = new Date(item.timestamp).toLocaleString('it-IT');
    const preview = item.original.substring(0, 50) + (item.original.length > 50 ? '...' : '');

    div.innerHTML = `
      <div class="history-time">${time}</div>
      <div class="history-text">${preview}</div>
    `;

    div.addEventListener('click', () => {
      // Carica questa traduzione nell'interfaccia
      previewBox.innerHTML = `<img src="${item.image}" alt="Cattura storica">`;
      originalText.value = item.original;
      translatedText.value = item.translated;
      originalSection.style.display = 'block';
      translationSection.style.display = 'block';
      actionButtons.style.display = 'flex';
      historyPanel.classList.remove('active');
    });

    historyList.appendChild(div);
  });
});

// Utility functions
function showLoading(show) {
  loading.classList.toggle('active', show);
}

function showStatus(message, duration = null) {
  statusText.textContent = message;

  if (duration) {
    setTimeout(() => {
      statusText.textContent = 'v1.0.0';
    }, duration);
  }
}

function resetUI() {
  previewBox.innerHTML = `
    <div class="preview-placeholder">
      <p>Nessuna cattura effettuata</p>
      <p style="font-size: 12px; margin-top: 10px; color: #bbb;">
        Premi il pulsante sopra o usa Ctrl+Shift+C
      </p>
    </div>
  `;
  originalText.value = '';
  translatedText.value = '';
  originalSection.style.display = 'none';
  translationSection.style.display = 'none';
  actionButtons.style.display = 'none';
  currentCapture = null;
}

// Ricevi comandi dal menu tray
ipcRenderer.on('show-history', () => {
  loadHistory();
  historyPanel.classList.add('active');
});

ipcRenderer.on('show-settings', () => {
  // TODO: Implementare pannello impostazioni
  alert('Impostazioni - In sviluppo');
});

// Inizializzazione
showStatus('Pronto');
