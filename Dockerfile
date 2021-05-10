# Install dependencies only when needed
FROM node:alpine AS deps
WORKDIR /app
COPY package.json ./
RUN npm install

# Rebuild the source code only when needed
FROM node:alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npx tsc

# Production image, copy all the files and run
FROM node:alpine AS runner
RUN apk --no-cache add curl
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/dist ./dist
WORKDIR /app
RUN npm install --production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S snowflake -u 1001
RUN chown -R snowflake:nodejs /app/dist
USER snowflake
WORKDIR /app/dist
EXPOSE 3000

CMD ["node", "server.js"]