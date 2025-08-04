## paso 1

```powershell
npm init -y # crea el package.json
npm install express
npm install --save-dev nodemon
```

```powershell
git init # crea un proyecto git local
git add . # agrega todos los archivos
git commit -m "Initial commit" # commit inical

git remote add origin https://github.com/sarias10/practica-express-backend.git
git branch -M main
git push -u origin main
```

## construir imagen de docker

```powershell
docker build -t practica-express-backend .
```

## construir imagen de docker
```powershell
docker run -d -p 5080:3001 --name practica-express-backend-container practica-express-backend:latest
```

-d: Hace que el contenedor se ejecute en segundo plano, sin bloquear tu terminal.

## COMANDOS UTILES DE DOCKER:

DOCKER
comandos de docker

```powershell
docker ps                              # Ver contenedores en ejecución
docker ps -a                           # Ver todos los contenedores
docker logs <nombre del contenedor>    # Ver logs de un contenedor
docker stop <nombre del contenedor>    # Detener un contenedor
docker rm <nombre del contenedor>      # Eliminar el contenedor
docker rmi <id de la imagen>           # Eliminar imagen de docker
docker <nombre del contenedor>         # Eliminar el contenedor
docker images                          # Ver imágenes
docker system prune -a                 # Limpiar todo
docker inspect <container_id>          # Detalles de un contenedor especifico

```

src/
  domain/
    models/           # Entidades del       dominio (sin Sequelize)
    repositories/     # repositorios: capa que accede a la base de datos
    services/         # Casos de uso / lógica de negocio
  infrastructure/
    db/               # Config Sequelize, modelos Sequelize
    web/              # Rutas, controladores Express
    security/         # JWT y middlewares
  app.js              # Arranque de la app
  server.js           # Servidor HTTP


## env

DB_NAME=
DB_USERNAME=
DB_PASSWORD=
DB_HOST=
JWT_SECRET=

## Códigos HTTP más comunes

| Código | Nombre                | Significado                                                                 |
|--------|-----------------------|-----------------------------------------------------------------------------|
| 200    | OK                    | Solicitud procesada correctamente. Devuelve datos.                         |
| 201    | Created               | Recurso creado correctamente.                                               |
| 204    | No Content            | Solicitud exitosa, pero sin contenido en la respuesta.                      |
| 400    | Bad Request           | Solicitud mal formada o datos inválidos.                                    |
| 401    | Unauthorized          | No autenticado. Se requiere iniciar sesión o enviar credenciales válidas.  |
| 403    | Forbidden             | Autenticado, pero sin permisos para realizar la acción.                     |
| 404    | Not Found             | Recurso solicitado no encontrado.                                           |
| 500    | Internal Server Error | Error en el servidor al procesar la solicitud.  

Estructura JSON:

```json
{ "status": "success", "data": {...} }
```


## Comandos Git más comunes

| Comando                                      | Descripción                                                   |
|----------------------------------------------|---------------------------------------------------------------|
| `git clone URL`                              | Clona un repositorio remoto a tu máquina.                     |
| `git status`                                 | Muestra cambios pendientes y estado actual del repo.          |
| `git add .`                                  | Añade todos los cambios al área de preparación (staging).     |
| `git add archivo.js`                         | Añade un archivo específico al staging.                       |
| `git commit -m "mensaje"`                    | Guarda los cambios en el historial con un mensaje.            |
| `git push origin nombre-rama`                | Sube los commits locales a la rama remota.                    |
| `git pull origin nombre-rama`                | Trae cambios desde la rama remota y los integra.              |
| `git checkout nombre-rama`                   | Cambia a otra rama existente.                                 |
| `git checkout -b nueva-rama`                 | Crea y cambia a una nueva rama.                               |
| `git branch`                                 | Lista las ramas locales.                                      |
| `git merge otra-rama`                        | Combina cambios de otra rama local en la actual.                    |
| `git log --oneline --graph --all`            | Muestra historial resumido y visual de commits.               |
| `git diff`                                   | Muestra diferencias entre archivos modificados y el último commit. |
| `git reset --hard commit_id`                 | Regresa el repo a un commit específico (borra cambios nuevos).|
| `git checkout -- archivo.js`                 | Deshace cambios no guardados en un archivo.                   |

