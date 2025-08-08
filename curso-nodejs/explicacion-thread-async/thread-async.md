# Cómo bloquea (o no) el thread principal

## Comparación: callback → async/await secuencial → Promise.all paralelo

| Patrón                       | ¿Bloquea el _thread_ JS?                                                 | ¿Ejecución?                                       | Ejemplo mínimo                                                                                                                                                  | Notas clave                                                                                            |
| ---------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Callback (antiguo)**       | ❌ No **bloquea**, pero **anida** y dificulta la lectura.                | Secuencial implícita (uno tras otro).             | `js const fs = require('fs'); fs.readFile('a.txt','utf8',(e,d)=>{ console.log(d); fs.readFile('b.txt','utf8',(e,d)=>{ console.log(d); }); }); `                 | El _thread_ sigue libre mientras espera I/O, pero el código crea _callback hell_.                      |
| **async/await (secuencial)** | ❌ No **bloquea**; el _thread_ puede atender otras tareas entre `await`. | Secuencial **legible**.                           | `js import {readFile} from 'fs/promises'; const a = await readFile('a.txt','utf8'); console.log(a); const b = await readFile('b.txt','utf8'); console.log(b); ` | Cada `await` libera el _event-loop_; la segunda lectura empieza **después** de que termine la primera. |
| **Promise.all (paralelo)**   | ❌ No **bloquea**; las lecturas arrancan **todas a la vez**.             | Realmente **paralelo** (I/O delegada al sistema). | `js import {readFile} from 'fs/promises'; const [a,b] = await Promise.all([ readFile('a.txt','utf8'), readFile('b.txt','utf8') ]); console.log(a,b); `          | Solo se **bloquea** (de forma no-blocking) el _thread_ al final para recoger los resultados.           |

## Diagrama mental (timeline)

Tiempo →

Callback  
|---- lee a.txt (I/O) ----| callback |---- lee b.txt (I/O) ----| callback

async/await secuencial  
|---- await a.txt (I/O) ----| |---- await b.txt (I/O) ----|

Promise.all  
|---- a.txt (I/O) ----|
|---- b.txt (I/O) ----| ambas terminan → resolve

## Regla de oro

El thread principal de JavaScript nunca se bloquea por operaciones I/O; siempre delega al sistema operativo y se queda libre para otras micro-tareas.
Lo que cambia es cuándo vuelve a ocuparse del resultado: inmediatamente tras cada await (secuencial) o una sola vez tras Promise.all (paralelo).
