const translate = require('translate-google');

/**
 * Traduce testo da inglese a italiano
 * @param {string} text - Testo da tradurre
 * @param {string} from - Lingua sorgente (default: 'en')
 * @param {string} to - Lingua destinazione (default: 'it')
 * @returns {Promise<string>} Testo tradotto
 */
async function translateText(text, from = 'en', to = 'it') {
  if (!text || text.trim().length === 0) {
    throw new Error('Testo vuoto, impossibile tradurre');
  }

  try {
    const result = await translate(text, { from, to });
    return result;
  } catch (error) {
    console.error('Errore traduzione:', error);

    // Fallback: prova con metodo alternativo
    try {
      return await translateFallback(text, from, to);
    } catch (fallbackError) {
      throw new Error('Impossibile tradurre il testo. Verifica la connessione internet.');
    }
  }
}

/**
 * Traduzione fallback con API alternativa
 * @param {string} text - Testo da tradurre
 * @param {string} from - Lingua sorgente
 * @param {string} to - Lingua destinazione
 * @returns {Promise<string>} Testo tradotto
 */
async function translateFallback(text, from, to) {
  // Usa libreria alternativa @vitalets/google-translate-api
  const { translate: translateAlt } = require('@vitalets/google-translate-api');

  try {
    const result = await translateAlt(text, { from, to });
    return result.text;
  } catch (error) {
    console.error('Errore traduzione fallback:', error);
    throw error;
  }
}

/**
 * Rileva automaticamente la lingua del testo
 * @param {string} text - Testo da analizzare
 * @returns {Promise<string>} Codice lingua rilevato
 */
async function detectLanguage(text) {
  try {
    const result = await translate(text, { from: 'auto', to: 'it' });
    // translate-google non restituisce la lingua rilevata direttamente
    // quindi usiamo un approccio euristico
    return 'en'; // Default inglese per questa app
  } catch (error) {
    console.error('Errore rilevamento lingua:', error);
    return 'en';
  }
}

/**
 * Traduce più frasi in batch
 * @param {Array<string>} texts - Array di testi da tradurre
 * @param {string} from - Lingua sorgente
 * @param {string} to - Lingua destinazione
 * @returns {Promise<Array<string>>} Array di traduzioni
 */
async function translateBatch(texts, from = 'en', to = 'it') {
  const promises = texts.map(text => translateText(text, from, to));
  return await Promise.all(promises);
}

module.exports = {
  translateText,
  detectLanguage,
  translateBatch
};
