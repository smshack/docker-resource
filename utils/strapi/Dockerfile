# Dockerfile
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install Strapi globally
RUN yarn global add strapi@4.25

# Install app dependencies
COPY package*.json ./
RUN yarn install

# Copy app source code
COPY . .

# Expose the port the app runs on
EXPOSE 1337

# Command to run the app
CMD ["yarn", "develop"]