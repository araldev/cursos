# Forzar a parar el proceso de SQL

> Si elimino la base de datos de DBngin sin pararla antes usar este comando

```cmd
taskkill /F /IM mysqld.exe
```

No elimina tu base de datos, simplemente fuerza a detener el proceso del servidor MySQL que está corriendo en memoria.

## 🔹 Qué hace:

- Cierra MySQL inmediatamente, sin pedirle que se apague de forma ordenada.

- Los archivos de datos (ibdata1, .ibd, .frm, etc.) se quedan intactos en disco.

- La próxima vez que lo inicies, MySQL intentará recuperar el estado usando el log de transacciones.

## 🔹 Riesgo:

- Si había transacciones abiertas o escritura en curso, al forzar el cierre podrías provocar inconsistencias o que MySQL tenga que hacer una recuperación al reiniciar.

- No es recomendable como método habitual, pero en tu caso (el proceso quedó “huérfano” sin control de DBngin) es la forma de liberarlo.
