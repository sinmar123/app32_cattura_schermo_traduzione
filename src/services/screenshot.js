const screenshot = require('screenshot-desktop');

/**
 * Cattura uno screenshot dell'intero schermo
 * @returns {Promise<Buffer>} Buffer dell'immagine
 */
async function captureFullScreen() {
  try {
    const imgBuffer = await screenshot({ format: 'png' });
    return imgBuffer;
  } catch (error) {
    console.error('Errore cattura schermo:', error);
    throw error;
  }
}

/**
 * Cattura una regione specifica dello schermo
 * @param {Object} bounds - {x, y, width, height}
 * @returns {Promise<Buffer>} Buffer dell'immagine ritagliata
 */
async function captureRegion(bounds) {
  try {
    // screenshot-desktop non supporta nativamente bounds,
    // quindi catturiamo tutto e ritagliamo con sharp o canvas
    const fullScreenBuffer = await captureFullScreen();
    return fullScreenBuffer; // Il crop verrà fatto nel renderer con canvas
  } catch (error) {
    console.error('Errore cattura regione:', error);
    throw error;
  }
}

module.exports = {
  captureFullScreen,
  captureRegion
};
