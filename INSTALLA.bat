@echo off
REM ============================================
REM Script Installazione Screen Translator
REM ============================================

echo.
echo ========================================
echo   INSTALLAZIONE SCREEN TRANSLATOR
echo ========================================
echo.

REM Verifica Node.js installato
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERRORE] Node.js non e' installato!
    echo.
    echo Vai su: https://nodejs.org/
    echo Scarica e installa Node.js, poi riprova.
    echo.
    pause
    exit /b 1
)

echo [OK] Node.js trovato!
node --version
echo.

REM Verifica npm
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERRORE] npm non trovato!
    echo Reinstalla Node.js da: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo [OK] npm trovato!
npm --version
echo.

echo ========================================
echo   INSTALLAZIONE DIPENDENZE...
echo   (Potrebbe richiedere 3-5 minuti)
echo ========================================
echo.

REM Installa dipendenze
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERRORE] Installazione fallita!
    echo.
    echo Possibili soluzioni:
    echo 1. Verifica la connessione internet
    echo 2. Esegui questo file come Amministratore
    echo 3. Disattiva temporaneamente l'antivirus
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   INSTALLAZIONE COMPLETATA!
echo ========================================
echo.
echo L'applicazione e' pronta per l'uso!
echo.
echo Per avviarla in futuro:
echo - Doppio click su AVVIA.bat
echo.
echo Vuoi avviare l'app adesso? (S/N)
set /p risposta=

if /i "%risposta%"=="S" (
    echo.
    echo Avvio applicazione...
    call npm start
) else (
    echo.
    echo OK! Usa AVVIA.bat quando vuoi avviare l'app.
)

echo.
pause
