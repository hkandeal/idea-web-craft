
# Use Node.js LTS version as the base image
FROM node:20-slim

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the application
RUN npm run build

# Expose port 4173
EXPOSE 4173

# Start the application with host set to 0.0.0.0 to make it accessible from outside the container
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
