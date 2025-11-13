@echo off
REM ============================================
REM Crea Collegamento sul Desktop
REM ============================================

echo.
echo ========================================
echo   SCREEN TRANSLATOR
echo   Creazione Collegamento Desktop
echo ========================================
echo.

REM Ottieni percorso corrente
set CURRENT_DIR=%cd%

REM Ottieni percorso Desktop
set DESKTOP=%USERPROFILE%\Desktop

REM Crea file VBScript temporaneo per creare shortcut
echo Set oWS = WScript.CreateObject("WScript.Shell") > CreateShortcut.vbs
echo sLinkFile = "%DESKTOP%\Screen Translator.lnk" >> CreateShortcut.vbs
echo Set oLink = oWS.CreateShortcut(sLinkFile) >> CreateShortcut.vbs
echo oLink.TargetPath = "%CURRENT_DIR%\AVVIA.bat" >> CreateShortcut.vbs
echo oLink.WorkingDirectory = "%CURRENT_DIR%" >> CreateShortcut.vbs
echo oLink.Description = "Avvia Screen Translator" >> CreateShortcut.vbs
echo oLink.IconLocation = "%SystemRoot%\System32\shell32.dll,138" >> CreateShortcut.vbs
echo oLink.Save >> CreateShortcut.vbs

REM Esegui script VBScript
cscript CreateShortcut.vbs >nul

REM Elimina file temporaneo
del CreateShortcut.vbs

echo [OK] Collegamento creato sul Desktop!
echo.
echo Ora puoi avviare l'app con doppio click sull'icona:
echo "Screen Translator" sul Desktop
echo.
pause
