@echo off
REM ============================================
REM Avvio Screen Translator
REM ============================================

echo.
echo ========================================
echo   SCREEN TRANSLATOR
echo ========================================
echo.
echo Avvio in corso...
echo.

REM Verifica Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERRORE] Node.js non trovato!
    echo Esegui prima INSTALLA.bat
    echo.
    pause
    exit /b 1
)

REM Verifica se node_modules esiste
if not exist "node_modules\" (
    echo [ATTENZIONE] Dipendenze non installate!
    echo.
    echo Eseguo installazione automatica...
    echo.
    call npm install
    echo.
)

REM Avvia l'applicazione
call npm start

REM Se l'app si chiude con errore
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERRORE] L'applicazione e' terminata con un errore.
    echo.
    echo Possibili soluzioni:
    echo 1. Esegui INSTALLA.bat di nuovo
    echo 2. Verifica che Node.js sia installato
    echo 3. Esegui come Amministratore
    echo.
    pause
)
