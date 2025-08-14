@echo off
:: Script para reiniciar MySQL y Dbngin de forma segura
:: Ejecutar como Administrador

echo Cerrando Dbngin (con procesos hijos)...
taskkill /F /T /IM dbngin-go.exe >nul 2>&1
timeout /t 2 /nobreak >nul

echo Cerrando mysqld.exe si está activo...
taskkill /F /IM mysqld.exe >nul 2>&1
timeout /t 2 /nobreak >nul

:: Ruta de Dbngin (ajústala si es necesario)
set DBNGIN_PATH="C:\Users\artur\AppData\Roaming\DBngin\dbngin-go.exe"

echo Reiniciando Dbngin...
start "" %DBNGIN_PATH%

echo Listo. MySQL y Dbngin deberían poder iniciarse y detenerse correctamente.
pause
