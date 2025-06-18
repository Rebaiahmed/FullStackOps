####################
# BUILDER STAGE
####################
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and Nx config
COPY package.json yarn.lock nx.json tsconfig.base.json ./

# Copy only the Vue app source
COPY apps/my-vue-app apps/my-vue-app

# Install dependencies
RUN yarn install --frozen-lockfile --network-timeout 300000 --verbose


# Build the Vue app in production mode
RUN npx nx build my-vue-app --configuration=production

####################
# RUNNER STAGE
####################
FROM nginx:alpine AS runner

# Use default nginx config or add your custom config if you want
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output to nginx html directory
COPY --from=builder /app/dist/apps/my-vue-app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
