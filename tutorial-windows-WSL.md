tutorial_content = """

# Tutorial: Cómo usar la Terminal en Windows con WSL (Windows Subsystem for Linux)

## Introducción

WSL (Windows Subsystem for Linux) permite ejecutar un entorno Linux directamente en Windows sin necesidad de usar una máquina virtual. Es muy útil para desarrolladores que quieren aprovechar herramientas Linux en Windows.

Este tutorial te guiará paso a paso para instalar y usar la terminal de WSL en Windows.

---

## 1. ¿Qué es WSL?

WSL es una capa de compatibilidad para ejecutar binarios Linux en Windows 10 y 11. Permite usar distribuciones Linux como Ubuntu, Debian, etc., dentro de Windows.

## 2. Requisitos

- Windows 10 (versión 1903 o superior) o Windows 11
- Acceso a internet para descargar WSL y distribuciones Linux

## 3. Instalación de WSL

### Paso 1: Abrir PowerShell como administrador

1. Presiona `Windows + X` y selecciona **Windows PowerShell (Administrador)** o **Terminal de Windows (Administrador)**.

### Paso 2: Instalar WSL con un solo comando

En la ventana de PowerShell, escribe:

```powershell
wsl --install
```

Esto instalará WSL y la distribución Ubuntu por defecto.

### Paso 3: Reiniciar el equipo

Cuando finalice la instalación, reinicia tu computadora para aplicar los cambios.

## 4. Configuración inicial

### Paso 1: Abrir la terminal WSL

- Presiona `Windows + S` y escribe `Ubuntu` (o el nombre de la distribución que instalaste).

- Haz clic para abrir la terminal Linux.

### Paso 2: Crear usuario y contraseña Linux

Al abrir la terminal por primera vez, te pedirá crear un nombre de usuario y contraseña para Linux.

## 5. Comandos

### 🧰 Comandos básicos en la terminal WSL

| Comando             | Descripción                                       |
| ------------------- | ------------------------------------------------- |
| `ls`                | Lista archivos y carpetas en el directorio actual |
| `cd nombre_carpeta` | Entra a una carpeta específica                    |
| `cd ..`             | Sube un nivel (a la carpeta padre)                |
| `pwd`               | Muestra la ruta completa del directorio actual    |
| `mkdir carpeta`     | Crea una carpeta nueva                            |
| `touch archivo`     | Crea un archivo vacío                             |
| `rmdir carpeta`     | Elimina una carpeta vacía                         |
| `rm -r carpeta`     | Elimina una carpeta y su contenido                |
| `rm archivo`        | Elimina un archivo                                |
| `clear`             | Limpia la pantalla del terminal                   |
| `exit`              | Cierra la terminal o sesión WSL                   |
| `sudo apt update`   | Actualiza la lista de paquetes                    |
| `sudo apt upgrade`  | Actualiza los paquetes instalados                 |

### 🔧 Gestión de archivos y carpetas

| Comando                   | Descripción                                           |
| ------------------------- | ----------------------------------------------------- |
| `cp archivo destino/`     | Copia archivo al destino                              |
| `cp -r carpeta destino/`  | Copia una carpeta (recursivamente)                    |
| `mv archivo destino/`     | Mueve archivo (sirve también para renombrar)          |
| `mv archivo nuevo_nombre` | Renombra un archivo                                   |
| `rm archivo`              | Elimina un archivo                                    |
| `rm -r carpeta`           | Elimina carpeta con todo su contenido                 |
| `file archivo`            | Muestra el tipo de archivo                            |
| `trash-put archivo`       | Mueve el archivo a la papelera (requiere `trash-cli`) |

### 🔐 Permisos de archivos y chmod

| Comando                   | Descripción                                                                  |
| ------------------------- | ---------------------------------------------------------------------------- |
| `chmod 644 archivo`       | Permisos: dueño (rw), grupo y otros (r)                                      |
| `chmod 600 archivo`       | Solo el dueño puede leer y escribir                                          |
| `chmod 700 archivo`       | Solo el dueño puede leer, escribir y ejecutar                                |
| `chmod 755 archivo`       | Dueño (rwx), grupo y otros (rx)                                              |
| `chmod +x archivo`        | Da permiso de ejecución al archivo                                           |
| `chmod -x archivo`        | Quita permiso de ejecución                                                   |
| `chmod -R 700 carpeta`    | Aplica permisos recursivos a una carpeta                                     |
| `chmod -R go-rwx ~/`      | **Quita todos los permisos** a grupo y otros en el directorio personal (`~`) |
| `chmod -R o-rwx ~/`       | Quita todos los permisos solo a "otros" (no al grupo)                        |
| `chmod -R g-r ~/`         | Quita solo permiso de lectura al grupo                                       |
| `chmod -R go+r ~/carpeta` | Da permiso de lectura a grupo y otros en la carpeta                          |
| `ls -l`                   | Muestra permisos y detalles de archivos                                      |
| `ls -lh`                  | Igual que `ls -l`, pero con tamaños legibles (KB, MB, GB...)                 |

#### 🧠 Extra: conceptos de permisos con números

| Permiso | Número | Significado |
| ------- | ------ | ----------- |
| `r`     | 4      | Lectura     |
| `w`     | 2      | Escritura   |
| `x`     | 1      | Ejecución   |

##### Ejemplo:

```bash
chmod 754 archivo
```

- `Dueño`: 7 (4+2+1 = rwx)
- `Grupo`: 5 (4+0+1 = r-x)
- `Otros`: 4 (solo lectura = r--)

| Sección de permisos    | Letras usadas    | ¿Qué usuarios afecta?                                  |
| ---------------------- | ---------------- | ------------------------------------------------------ |
| **Dueño** (User) = u   | `rwx` (1º grupo) | El usuario propietario del archivo                     |
| **Grupo** (Group) = g  | `rwx` (2º grupo) | Usuarios que pertenezcan al mismo grupo que el archivo |
| **Otros** (Others) = o | `rwx` (3º grupo) | Todos los demás usuarios del sistema                   |

#### 📁 ¿Cómo saber si es archivo o directorio?

Cuando usas `ls -l`, el primer carácter te indica el tipo de archivo:

| Primer carácter | Tipo de objeto         | Ejemplo                                        |
| --------------- | ---------------------- | ---------------------------------------------- |
| `-`             | Archivo normal         | `-rw-r--r-- 1 user user  200 archivo.txt`      |
| `d`             | Directorio             | `drwxr-xr-x 2 user user 4096 carpeta/`         |
| `l`             | Enlace simbólico       | `lrwxrwxrwx 1 user user   12 link -> destino/` |
| `b`             | Archivo de bloque      | (dispositivo de almacenamiento)                |
| `c`             | Archivo de caracteres  | (como `/dev/tty`)                              |
| `s`             | Socket                 | Comunicación entre procesos                    |
| `p`             | FIFO (pipe con nombre) | Canal de comunicación                          |

### 👤 Gestión de propietarios y grupos

| Comando                         | Descripción                                       |
| ------------------------------- | ------------------------------------------------- |
| `chown usuario archivo`         | Cambia el propietario del archivo                 |
| `chown usuario:grupo archivo`   | Cambia propietario y grupo del archivo            |
| `chgrp grupo archivo`           | Cambia solo el grupo del archivo                  |
| `sudo chown -R usuario carpeta` | Cambia propietario de carpeta y todo su contenido |

### 🧾 Umask y creación de archivos

`umask` usado en la _terminal_ solo guarda los datos en la **sesión**./
Escribir el código en el archivo `.bashrc` para guardar la configuración predeterminada para **siempre**.

| Comando                           | Descripción                                             |
| --------------------------------- | ------------------------------------------------------- |
| `umask`                           | Muestra la máscara de permisos predeterminados          |
| `umask 077`                       | Solo tú tendrás acceso total a archivos/carpetas nuevas |
| `touch nuevo.txt` → con umask 077 | Crea con permisos `-rw-------`                          |
| `mkdir nueva/` → con umask 077    | Crea con permisos `drwx------`                          |

### 🔍 Verificación y ayuda

| Comando         | Descripción                                         |
| --------------- | --------------------------------------------------- |
| `stat archivo`  | Muestra detalles del archivo (fecha, permisos)      |
| `ls -lh`        | Lista con tamaños legibles                          |
| `man comando`   | Muestra el manual del comando (ej: `man chmod`)     |
| `which comando` | Muestra la ruta del ejecutable (ej: `which python`) |

## 6. Acceder a archivos de Windows desde WSL

Tus discos de Windows están montados en `/mnt`. Por ejemplo, para acceder al disco C:

```bash
cd /mnt/c
ls
```

## 7. Ejecutar comandos de Windows desde WSL

Puedes ejecutar comandos de Windows usando `.exe`, por ejemplo:

```bash
notepad.exe
```

Esto abrirá el bloc de notas de Windows.

## 8. Personalizar tu terminal

Puedes instalar y usar terminales como Windows Terminal para una mejor experiencia.

[Descarga aquí](https://aka.ms/terminal)

## 9. Desinstalar WSL

Para desinstalar WSL:

1. Abre PowerShell como administrador.

2. Ejecuta:

```powershell
wsl --unregister <Distribución>
```

Por ejemplo, para Ubuntu:

```powershell
wsl --unregister Ubuntu
```

## Recursos adicionales

- Documentación oficial de WSL: https://learn.microsoft.com/en-us/windows/wsl/

- Tutorial de comandos Linux básicos: https://linuxjourney.com/

¡Listo! Ahora sabes cómo instalar y usar WSL en Windows para ejecutar un entorno Linux en tu máquina.
