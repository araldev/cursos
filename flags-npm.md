# 📦 Tabla de opciones comunes de npm

| Opción / Flag             | Descripción                                                                                                | Ejemplo                                                     |
| ------------------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| `-v`, `--version`         | Muestra la versión instalada de npm                                                                        | `npm --version`                                             |
| `-h`, `--help`            | Muestra ayuda general o específica de un comando                                                           | `npm --help`, `npm install --help`                          |
| `-g`, `--global`          | Instala o desinstala paquetes de forma global                                                              | `npm install -g eslint`                                     |
| `-S`, `--save`            | Guarda el paquete como dependencia en `package.json` (por defecto en versiones recientes)                  | `npm install lodash --save`                                 |
| `-D`, `--save-dev`        | Guarda el paquete como dependencia de desarrollo en `package.json`                                         | `npm install jest --save-dev`                               |
| `--save-optional`         | Guarda el paquete como dependencia opcional en `package.json`                                              | `npm install fsevents --save-optional`                      |
| `--no-save`               | Instala el paquete sin guardar en `package.json`                                                           | `npm install lodash --no-save`                              |
| `--dry-run`               | Muestra lo que ocurriría sin ejecutar realmente el comando                                                 | `npm install --dry-run`                                     |
| `--force`                 | Fuerza la ejecución del comando, ignorando advertencias o errores                                          | `npm install --force`                                       |
| `--legacy-peer-deps`      | Omite la resolución de dependencias entre pares (peer dependencies)                                        | `npm install --legacy-peer-deps`                            |
| `--omit=<tipo>`           | Omite la instalación de ciertos tipos de dependencias (`dev`, `optional`, `peer`)                          | `npm install --omit=dev`                                    |
| `--only=<tipo>`           | Instala solo un tipo específico de dependencias (`prod`, `dev`, `optional`)                                | `npm install --only=prod`                                   |
| `--production`            | Instala solo las dependencias necesarias para producción                                                   | `npm install --production`                                  |
| `--prefix <ruta>`         | Especifica una ruta diferente para la instalación de paquetes                                              | `npm install express --prefix ./backend`                    |
| `--registry <url>`        | Utiliza un registro personalizado para descargar paquetes                                                  | `npm install lodash --registry=https://custom.registry.com` |
| `--silent`                | Reduce la salida al mínimo necesario                                                                       | `npm install --silent`                                      |
| `--verbose`               | Muestra información detallada durante la ejecución de comandos                                             | `npm install --verbose`                                     |
| `--json`                  | Muestra la salida en formato JSON                                                                          | `npm ls --json`                                             |
| `--long`                  | Muestra información detallada de los paquetes instalados                                                   | `npm ls --long`                                             |
| `--depth=<n>`             | Limita la profundidad de las dependencias mostradas                                                        | `npm ls --depth=0`                                          |
| `--global-style`          | Instala paquetes con estructura de árbol plana, como en instalaciones globales                             | `npm install lodash --global-style`                         |
| `--no-optional`           | Omite la instalación de dependencias opcionales                                                            | `npm install --no-optional`                                 |
| `--audit`                 | Ejecuta una auditoría de seguridad de las dependencias                                                     | `npm audit`                                                 |
| `--audit-level=<nivel>`   | Especifica el nivel de severidad mínimo para que `npm audit` falle (`low`, `moderate`, `high`, `critical`) | `npm audit --audit-level=high`                              |
| `--update-notifier=false` | Desactiva las notificaciones de actualizaciones de npm                                                     | `npm install --update-notifier=false`                       |
| `--script-shell=<shell>`  | Especifica el intérprete de comandos a utilizar para los scripts                                           | `npm run build --script-shell=sh`                           |
| `--workspaces`            | Habilita el soporte para espacios de trabajo (workspaces)                                                  | `npm install --workspaces`                                  |
| `--workspace=<nombre>`    | Ejecuta el comando en un espacio de trabajo específico                                                     | `npm install --workspace=paquete`                           |
| `--no-bin-links`          | Evita la creación de enlaces simbólicos para los ejecutables de los paquetes                               | `npm install --no-bin-links`                                |
| `--ignore-scripts`        | Omite la ejecución de scripts definidos en `package.json` durante la instalación                           | `npm install --ignore-scripts`                              |
| `--prefer-offline`        | Prefiere utilizar la caché local en lugar de buscar en el registro                                         | `npm install --prefer-offline`                              |
| `--prefer-online`         | Prefiere buscar en el registro en lugar de utilizar la caché local                                         | `npm install --prefer-online`                               |
| `--no-audit`              | Omite la auditoría de seguridad durante la instalación                                                     | `npm install --no-audit`                                    |
| `--no-fund`               | Omite la información de financiamiento de los paquetes                                                     | \`npm install --no-fund                                     |
