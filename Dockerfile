# Build stage
FROM node:20-alpine as build-stage

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM node:20-alpine as production-stage

# Set working directory
WORKDIR /app

# Install serve
RUN npm install -g serve

# Copy built files from build stage
COPY --from=build-stage /app/dist ./dist

# Expose port 3000 (serve's default port)
EXPOSE 3000

# Start serve
CMD ["serve", "-s", "dist"]