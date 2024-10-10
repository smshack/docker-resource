# Dockerfile
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Build the app
RUN npm run develop

# Expose the port the app runs on
EXPOSE 1337

# # Command to run the app
# CMD ["npm", "start"]