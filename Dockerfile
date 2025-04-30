# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and yarn.lock files to install dependencies first
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn nx build

# Expose the port the app runs on (Adjust the port based on your app config)
EXPOSE 4200

# Command to run the app (you can change this to run a specific app or e2e tests)
CMD ["yarn", "nx", "serve"]
