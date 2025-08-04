# para correr esto en local usa
# Construye la imagen de docker

# docker build -t practica-express-backend .
                           
# puerto externo: puerto interno
# Significa modo desacoplado.

# -d: Hace que el contenedor se ejecute en segundo plano, sin bloquear tu terminal.

# Si no lo pones, el contenedor corre en modo interactivo y verás los logs directamente en tu terminal.
# docker run -d -p 5080:3001 --name practica-express-backend-container practica-express-backend:latest

# Use the official Node.js image as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN npm install

# Puerto interno del contenedor
EXPOSE 3001 

# Start the application
CMD ["npm", "start"]