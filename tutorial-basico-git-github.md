# Tutorial Básico de Git y GitHub

## 1. ¿Qué es Git y GitHub?

- **Git**: Sistema de control de versiones distribuido. Permite llevar un historial de cambios en archivos y proyectos, facilitando la colaboración.
- **GitHub**: Plataforma web que aloja repositorios Git y facilita colaboración, revisiones, issues, pull requests y más.

---

## 2. Instalación

- En Windows/macOS/Linux, descarga Git desde: https://git-scm.com/downloads
- Verifica instalación con:

```bash
git --version
```

---

## 3. Configuración inicial

Configura tu usuario (nombre y correo) para registrar en commits:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@example.com"
```

---

## 4. Comandos básicos

### Crear un repositorio local

```bash
git init
```

### Clonar un repositorio remoto

```bash
git clone https://github.com/usuario/repositorio.git
```

### Ver estado del repositorio

```bash
git status
```

### Añadir archivos para commit

```bash
git add archivo.txt
git add .       # añade todos los cambios
```

### Crear un commit con mensaje

```bash
git commit -m "Mensaje descriptivo del cambio"
```

### Enviar cambios al repositorio remoto

```bash
git push origin main
```

### Traer cambios del repositorio remoto

```bash
git pull origin main
```

### Crear una rama nueva

```bash
git branch <nombre-rama>
```

### Cambiar de rama

```bash
git switch <nombre-rama>
```

### Crear y cambiar de rama

```bash
git switch -c <nueva-rama>
```

### Fusionar rama a main (desde main)

```bash
git merge <nombre-rama>
```

### 🧰 Tabla de opciones comunes de Git

| Opción / Flag                 | Descripción                                                                          | Ejemplo                                     |
| ----------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------- |
| `-v`, `--version`             | Muestra la versión instalada de Git                                                  | `git --version`                             |
| `-h`, `--help`                | Muestra ayuda general o específica de un comando                                     | `git --help`, `git commit --help`           |
| `-C <ruta>`                   | Ejecuta Git como si se hubiera iniciado en la ruta especificada                      | `git -C /ruta/del/repositorio status`       |
| `--no-pager`                  | Muestra la salida directamente en la terminal, sin paginador                         | `git --no-pager log`                        |
| `--bare`                      | Crea un repositorio sin directorio de trabajo (solo para almacenamiento)             | `git init --bare`                           |
| `--global`                    | Aplica la configuración a nivel global (usuario)                                     | `git config --global user.name "Tu Nombre"` |
| `--system`                    | Aplica la configuración a nivel del sistema                                          | `git config --system core.editor nano`      |
| `--local`                     | Aplica la configuración solo al repositorio actual                                   | `git config --local core.ignorecase true`   |
| `--amend`                     | Modifica el último commit (mensaje o contenido)                                      | `git commit --amend`                        |
| `--cached`                    | Aplica la acción solo al área de preparación (staging)                               | `git rm --cached archivo.txt`               |
| `--soft`, `--mixed`, `--hard` | Modifican el comportamiento de `git reset` al deshacer cambios en diferentes niveles | `git reset --soft HEAD~1`                   |
| `--force`, `-f`               | Fuerza la ejecución de un comando, sobrescribiendo advertencias o restricciones      | `git push --force`                          |
| `--all`                       | Aplica la acción a todas las referencias (ramas, etiquetas)                          | `git fetch --all`                           |
| `--tags`                      | Incluye las etiquetas en la acción (por ejemplo, al hacer push o fetch)              | `git push --tags`                           |
| `--depth <n>`                 | Limita la profundidad del historial al clonar o hacer fetch                          | `git clone --depth 1 <repositorio>`         |
| `--rebase`                    | Aplica los cambios locales sobre los remotos, reordenando el historial               | `git pull --rebase`                         |
| `--squash`                    | Combina múltiples commits en uno solo al hacer merge                                 | `git merge --squash rama`                   |
| `--no-ff`                     | Fuerza la creación de un commit de merge, incluso si es un avance rápido             | `git merge --no-ff rama`                    |
| `--stat`                      | Muestra estadísticas de los cambios realizados                                       | `git diff --stat`                           |
| `--oneline`                   | Muestra el historial de commits en una sola línea por commit                         | `git log --oneline`                         |
| `--graph`                     | Muestra el historial de commits en forma de gráfico ASCII                            | `git log --graph`                           |
| `--decorate`                  | Añade nombres de ramas y etiquetas al historial de commits                           | `git log --decorate`                        |
| `--pretty=<formato>`          | Personaliza la salida del historial de commits                                       | `git log --pretty=short`                    |
| `--name-only`                 | Muestra solo los nombres de los archivos modificados                                 | `git diff --name-only`                      |
| `--name-status`               | Muestra los nombres y el estado (A, M, D) de los archivos modificados                | `git diff --name-status`                    |
| `--color`                     | Fuerza la salida con colores                                                         | `git diff --color`                          |
| `--no-color`                  | Fuerza la salida sin colores                                                         | `git diff --no-color`                       |
| `--ignore-space-change`       | Ignora cambios en espacios en blanco al comparar archivos                            | `git diff --ignore-space-change`            |
| `--ignore-all-space`          | Ignora todos los espacios en blanco al comparar archivos                             | `git diff --ignore-all-space`               |
| `--staged`                    | Muestra las diferencias entre el área de preparación y el último commit              | `git diff --staged`                         |
| `--patch`                     | Permite seleccionar interactivamente los cambios a añadir al área de preparación     | `git add --patch`                           |
| `--interactive`               | Inicia una sesión interactiva para realizar acciones específicas                     | `git rebase --interactive HEAD~3`           |
| `--verbose`                   | Muestra información detallada durante la ejecución de comandos                       | `git push --verbose`                        |
| `--quiet`                     | Reduce la salida al mínimo necesario                                                 | `git pull --quiet`                          |

**_FUENTES:_**
[Git][1], [Git][2], [Git Scripts][3], [git.github.io][4], [GitHub][5], [Stack Overflow][6], [iq.opengenus.org][7], [GitHub][8], [man7.org][9]

[1]: https://git-scm.com/docs/git?utm_source=chatgpt.com "Git - git Documentation"
[2]: https://git-scm.com/book/en/v2/Appendix-C%3A-Git-Commands-Setup-and-Config?utm_source=chatgpt.com "Git - Setup and Config"
[3]: https://gitscripts.com/git-option?utm_source=chatgpt.com "Mastering Git Options: Quick Commands for Every User"
[4]: https://git.github.io/htmldocs/gitcli.html?utm_source=chatgpt.com "gitcli(7) Manual Page - GitHub Pages"
[5]: https://education.github.com/git-cheat-sheet-education.pdf?utm_source=chatgpt.com "GIT CHEAT SHEET - GitHub Education"
[6]: https://stackoverflow.com/questions/56322616/where-can-i-find-a-list-of-all-npm-flags-tags-options?utm_source=chatgpt.com "command line interface - Where can I find a list of all npm flags ..."
[7]: https://iq.opengenus.org/npm-commands/?utm_source=chatgpt.com "Comprehensive List to NPM Commands - OpenGenus IQ"
[8]: https://github.com/plexoio/gitcommands?utm_source=chatgpt.com "Git Bash Commands Cheat Sheet - GitHub"
[9]: https://www.man7.org/linux//man-pages/man7/gitcli.7.html?utm_source=chatgpt.com "gitcli(7) — Linux manual page - man7.org"

---

## 5. Fork y Pull Request

- **Fork**: Copia de un repositorio en tu cuenta para hacer cambios sin afectar el original.
- **Pull Request (PR)**: Propuesta para que el dueño del repo original revise y acepte tus cambios.

Proceso típico:

1. Fork al repositorio original
2. Clonar tu fork
3. Crear una rama para cambios
4. Hacer commits y push a tu fork
5. Abrir un Pull Request en el repo original

---

## 6. Colaboración y buenas prácticas

- Trabaja siempre en ramas diferentes para no afectar el main directamente.
- Haz commits claros y con mensajes descriptivos.
- Actualiza tu fork y ramas con los últimos cambios del repositorio original (upstream).
- Resuelve conflictos con cuidado y revisa antes de hacer merge.
- Usa Pull Requests para revisión y discusión antes de integrar cambios.

---

## 7. Recursos para aprender más

- Documentación oficial Git: https://git-scm.com/doc
- GitHub Docs: https://docs.github.com
- Tutorial interactivo: https://learngitbranching.js.org/
- Curso gratuito de Git y GitHub: https://www.udemy.com/course/git-github-esencial/

---

¡Con esta base ya puedes empezar a usar Git y GitHub para manejar tus proyectos y colaborar con otros!
