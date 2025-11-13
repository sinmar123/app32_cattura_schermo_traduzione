/**
 * Configurazione globale dell'applicazione
 */

module.exports = {
  app: {
    name: 'Screen Translator',
    version: '1.0.0',
    description: 'Cattura schermo, OCR e traduzione EN→IT'
  },

  ocr: {
    engine: 'tesseract',
    language: 'eng',
    psm: 1, // Page segmentation mode: Auto with OSD
    confidence: 60 // Soglia minima di confidence (0-100)
  },

  translation: {
    defaultFrom: 'en',
    defaultTo: 'it',
    timeout: 10000, // Timeout richiesta in ms
    retries: 3 // Numero di tentativi in caso di errore
  },

  capture: {
    format: 'png',
    quality: 100,
    minWidth: 20, // Larghezza minima area selezione
    minHeight: 20, // Altezza minima area selezione
    overlayColor: 'rgba(0, 0, 0, 0.5)', // Colore overlay
    borderColor: '#00ff00', // Colore bordo selezione
    borderWidth: 2
  },

  shortcuts: {
    capture: 'CommandOrControl+Shift+C',
    show: 'CommandOrControl+Shift+S',
    hide: 'Escape'
  },

  storage: {
    maxHistoryItems: 100,
    autoSave: true
  },

  ui: {
    minWidth: 600,
    minHeight: 700,
    defaultWidth: 800,
    defaultHeight: 900
  }
};
