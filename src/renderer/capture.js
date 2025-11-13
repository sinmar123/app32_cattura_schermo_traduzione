const { ipcRenderer, desktopCapturer } = require('electron');

// Elementi DOM
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const selectionBox = document.getElementById('selectionBox');
const dimensions = document.getElementById('dimensions');
const instructions = document.getElementById('instructions');

// Variabili per la selezione
let isSelecting = false;
let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;
let screenshotImage = null;

// Configurazione
const MIN_SIZE = 20; // Dimensione minima area selezione

// Inizializza cattura schermo
async function init() {
  try {
    // Cattura screenshot dello schermo
    const sources = await desktopCapturer.getSources({
      types: ['screen'],
      thumbnailSize: {
        width: window.screen.width * window.devicePixelRatio,
        height: window.screen.height * window.devicePixelRatio
      }
    });

    if (sources.length === 0) {
      alert('Impossibile catturare lo schermo');
      cancelCapture();
      return;
    }

    // Usa il primo schermo (primary display)
    const source = sources[0];
    screenshotImage = new Image();

    screenshotImage.onload = () => {
      // Imposta dimensioni canvas
      canvas.width = window.screen.width;
      canvas.height = window.screen.height;

      // Disegna lo screenshot sul canvas
      ctx.drawImage(screenshotImage, 0, 0, canvas.width, canvas.height);

      // Nascondi istruzioni dopo 3 secondi
      setTimeout(() => {
        instructions.style.opacity = '0.3';
      }, 3000);

      ipcRenderer.send('capture-ready');
    };

    screenshotImage.src = source.thumbnail.toDataURL();

  } catch (error) {
    console.error('Errore inizializzazione cattura:', error);
    alert('Errore durante la cattura dello schermo');
    cancelCapture();
  }
}

// Mouse down - Inizia selezione
canvas.addEventListener('mousedown', (e) => {
  isSelecting = true;
  startX = e.clientX;
  startY = e.clientY;
  endX = startX;
  endY = startY;

  selectionBox.style.display = 'block';
  updateSelectionBox();
});

// Mouse move - Aggiorna selezione
canvas.addEventListener('mousemove', (e) => {
  if (isSelecting) {
    endX = e.clientX;
    endY = e.clientY;

    updateSelectionBox();
    updateDimensions(e.clientX, e.clientY);
  }
});

// Mouse up - Completa selezione
canvas.addEventListener('mouseup', (e) => {
  if (isSelecting) {
    isSelecting = false;
    endX = e.clientX;
    endY = e.clientY;

    // Calcola dimensioni selezione
    const width = Math.abs(endX - startX);
    const height = Math.abs(endY - startY);

    // Verifica dimensioni minime
    if (width < MIN_SIZE || height < MIN_SIZE) {
      alert(`Area troppo piccola. Dimensione minima: ${MIN_SIZE}x${MIN_SIZE}px`);
      resetSelection();
      return;
    }

    // Cattura area selezionata
    captureSelection();
  }
});

// ESC per annullare
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    cancelCapture();
  }
});

// Aggiorna box di selezione
function updateSelectionBox() {
  const left = Math.min(startX, endX);
  const top = Math.min(startY, endY);
  const width = Math.abs(endX - startX);
  const height = Math.abs(endY - startY);

  selectionBox.style.left = left + 'px';
  selectionBox.style.top = top + 'px';
  selectionBox.style.width = width + 'px';
  selectionBox.style.height = height + 'px';
}

// Mostra dimensioni area
function updateDimensions(x, y) {
  const width = Math.abs(endX - startX);
  const height = Math.abs(endY - startY);

  dimensions.textContent = `${width} × ${height}`;
  dimensions.style.display = 'block';
  dimensions.style.left = (x + 15) + 'px';
  dimensions.style.top = (y + 15) + 'px';
}

// Cattura area selezionata
function captureSelection() {
  const left = Math.min(startX, endX);
  const top = Math.min(startY, endY);
  const width = Math.abs(endX - startX);
  const height = Math.abs(endY - startY);

  // Crea canvas temporaneo per ritagliare l'area
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = width;
  tempCanvas.height = height;
  const tempCtx = tempCanvas.getContext('2d');

  // Copia l'area selezionata
  tempCtx.drawImage(
    screenshotImage,
    left, top, width, height,
    0, 0, width, height
  );

  // Converti in data URL
  const imageData = tempCanvas.toDataURL('image/png');

  // Invia al processo principale
  ipcRenderer.send('capture-complete', imageData);
}

// Reset selezione
function resetSelection() {
  selectionBox.style.display = 'none';
  dimensions.style.display = 'none';
  isSelecting = false;
  startX = 0;
  startY = 0;
  endX = 0;
  endY = 0;
}

// Annulla cattura
function cancelCapture() {
  ipcRenderer.send('capture-cancel');
}

// Avvia inizializzazione
init();
