
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
