####################
# BUILDER STAGE
####################
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package and lock files first to leverage caching
COPY package.json yarn.lock ./
COPY nx.json tsconfig.base.json ./

# Copy only the Nest app source to minimize context
COPY apps/my-nest-app apps/my-nest-app

# Install dependencies (including dev, needed for build)
RUN yarn install --frozen-lockfile --network-timeout 100000

# Build NestJS app in production mode
RUN npx nx build my-nest-app --configuration=production

####################
# RUNNER STAGE
####################
FROM node:20-alpine AS runner

WORKDIR /app

# Copy package files to install production deps only
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --production --network-timeout 100000

# Copy built NestJS app from builder
COPY --from=builder /app/dist/apps/my-nest-app ./dist/apps/my-nest-app

# Expose port 3000
EXPOSE 3000

# Run the built app
CMD ["node", "dist/apps/my-nest-app/main.js"]
