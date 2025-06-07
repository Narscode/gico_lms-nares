FROM node:20.11.1-alpine AS base

# Install pnpm and other dependencies
RUN apk add --no-cache libc6-compat && \
    npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies without frozen lockfile for development
RUN pnpm install

# Copy public directory first
COPY public ./public

# Copy the rest of the application
COPY . .

# Development stage
FROM base AS development
ENV NODE_ENV development
ENV NEXT_TELEMETRY_DISABLED 1
EXPOSE 3000
CMD ["pnpm", "dev"]

# Production stage
FROM base AS production
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"] 