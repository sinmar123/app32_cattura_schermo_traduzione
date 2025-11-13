const { createWorker } = require('tesseract.js');

let worker = null;

/**
 * Inizializza il worker Tesseract
 */
async function initOCR() {
  if (worker) return worker;

  worker = await createWorker('eng', 1, {
    logger: m => console.log('[Tesseract]', m)
  });

  await worker.setParameters({
    tessedit_pageseg_mode: '1', // Auto con OSD
  });

  return worker;
}

/**
 * Estrae testo da un'immagine
 * @param {string|Buffer} imageData - Path immagine o buffer
 * @returns {Promise<string>} Testo estratto
 */
async function extractText(imageData) {
  try {
    await initOCR();

    const { data: { text } } = await worker.recognize(imageData);

    return text.trim();
  } catch (error) {
    console.error('Errore OCR:', error);
    throw new Error('Impossibile estrarre testo dall\'immagine');
  }
}

/**
 * Estrae testo con informazioni dettagliate (bounding boxes, confidence)
 * @param {string|Buffer} imageData - Path immagine o buffer
 * @returns {Promise<Object>} Dati dettagliati OCR
 */
async function extractTextDetailed(imageData) {
  try {
    await initOCR();

    const result = await worker.recognize(imageData);

    return {
      text: result.data.text.trim(),
      confidence: result.data.confidence,
      words: result.data.words,
      lines: result.data.lines
    };
  } catch (error) {
    console.error('Errore OCR dettagliato:', error);
    throw error;
  }
}

/**
 * Pulisce e termina il worker
 */
async function cleanupOCR() {
  if (worker) {
    await worker.terminate();
    worker = null;
  }
}

module.exports = {
  initOCR,
  extractText,
  extractTextDetailed,
  cleanupOCR
};
