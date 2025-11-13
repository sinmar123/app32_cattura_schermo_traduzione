const Store = require('electron-store');

// Schema per validazione dati
const schema = {
  history: {
    type: 'array',
    default: []
  },
  settings: {
    type: 'object',
    properties: {
      shortcut: {
        type: 'string',
        default: 'CommandOrControl+Shift+C'
      },
      autoStart: {
        type: 'boolean',
        default: false
      },
      minimizeToTray: {
        type: 'boolean',
        default: true
      },
      language: {
        type: 'object',
        properties: {
          from: {
            type: 'string',
            default: 'en'
          },
          to: {
            type: 'string',
            default: 'it'
          }
        }
      },
      ocrEngine: {
        type: 'string',
        enum: ['tesseract'],
        default: 'tesseract'
      }
    },
    default: {}
  }
};

const store = new Store({ schema });

/**
 * Salva una traduzione nella cronologia
 * @param {Object} translation - Oggetto traduzione
 */
function saveTranslation(translation) {
  const history = store.get('history', []);
  history.unshift({
    id: Date.now(),
    ...translation,
    timestamp: Date.now()
  });

  // Limita cronologia a 100 elementi
  if (history.length > 100) {
    history.length = 100;
  }

  store.set('history', history);
}

/**
 * Ottiene la cronologia delle traduzioni
 * @param {number} limit - Numero massimo di risultati
 * @returns {Array} Cronologia
 */
function getHistory(limit = null) {
  const history = store.get('history', []);
  return limit ? history.slice(0, limit) : history;
}

/**
 * Cancella la cronologia
 */
function clearHistory() {
  store.set('history', []);
}

/**
 * Elimina una traduzione dalla cronologia
 * @param {number} id - ID della traduzione
 */
function deleteTranslation(id) {
  const history = store.get('history', []);
  const filtered = history.filter(item => item.id !== id);
  store.set('history', filtered);
}

/**
 * Ottiene le impostazioni
 * @returns {Object} Impostazioni
 */
function getSettings() {
  return store.get('settings', {});
}

/**
 * Salva le impostazioni
 * @param {Object} settings - Nuove impostazioni
 */
function saveSettings(settings) {
  const current = getSettings();
  store.set('settings', { ...current, ...settings });
}

/**
 * Ottiene una singola impostazione
 * @param {string} key - Chiave impostazione
 * @param {*} defaultValue - Valore di default
 * @returns {*} Valore impostazione
 */
function getSetting(key, defaultValue) {
  return store.get(`settings.${key}`, defaultValue);
}

/**
 * Salva una singola impostazione
 * @param {string} key - Chiave impostazione
 * @param {*} value - Valore
 */
function saveSetting(key, value) {
  store.set(`settings.${key}`, value);
}

/**
 * Reset impostazioni ai valori di default
 */
function resetSettings() {
  store.set('settings', schema.settings.default);
}

module.exports = {
  saveTranslation,
  getHistory,
  clearHistory,
  deleteTranslation,
  getSettings,
  saveSettings,
  getSetting,
  saveSetting,
  resetSettings
};
