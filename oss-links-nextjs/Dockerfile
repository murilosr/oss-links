# Dependencies image
# Install dependencies only when needed
FROM node:18-alpine AS deps
ENV TZ America/Sao_Paulo
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
# Copy just the files needed to yarn download the dependencies
COPY package.json yarn.lock ./
# Run yarn to download the dependencies
RUN yarn install --frozen-lockfile


# Next.js builder image
# Rebuild the source code only when needed
FROM node:18-alpine AS builder
ENV TZ America/Sao_Paulo
WORKDIR /app
# Copy all files (not ignored by .dockerignore)
COPY . .
# Copy the dependencies from the previous generated image segment
# If there is no change in the package.json or yarn.lock files, the dependencies will not be rebuilt
COPY --from=deps /app/node_modules ./node_modules
# Build the next.js project
RUN yarn build

# Production image
# Copy all the files and run next
FROM node:18-alpine AS runner
ENV TZ America/Sao_Paulo
WORKDIR /app

# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nextjs -u 1001

# Copy the build folder and the next.config.js (generated in the builder image)
COPY --from=builder /app/ ./

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node_modules/.bin/next", "start"]