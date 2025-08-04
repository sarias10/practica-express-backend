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
