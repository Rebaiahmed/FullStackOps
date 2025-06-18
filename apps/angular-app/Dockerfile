# Stage 1: Build the Angular app
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the Angular app in production mode
RUN npm run build -- --prod

# Stage 2: Serve app with Nginx
FROM nginx:stable-alpine

# Copy built files from previous stage to nginx html folder
COPY --from=build /app/dist/my-angular-app /usr/share/nginx/html

# Copy custom nginx config if you have one (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
