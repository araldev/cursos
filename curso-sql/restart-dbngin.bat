@echo off
:: Script para reiniciar MySQL en Dbngin de forma segura
:: Ejecutar este script como Administrador

echo Cerrando mysqld.exe si está corriendo...
taskkill /F /IM mysqld.exe 2>nul

:: Esperar 2 segundos para asegurarse de que se cierre
timeout /t 2 /nobreak >nul

:: Ruta de Dbngin (ajústala según tu instalación)
set DBNGIN_PATH="C:\Users\user\ruta_dbngin.exe"

echo Reiniciando Dbngin...
start "" %DBNGIN_PATH%

echo Listo. MySQL debería poder iniciarse y detenerse correctamente.
pause
