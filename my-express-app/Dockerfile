# Use an official Node.js runtime as a base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 for the application
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]
