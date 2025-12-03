FROM node:lts-buster

# Root access
USER root

# Install dependencies (correct & Heroku-compatible)
RUN apt-get update && \
    apt-get install -y ffmpeg imagemagick git && \
    rm -rf /var/lib/apt/lists/*

# Switch to node user
USER node

# Set working dir
WORKDIR /home/node/app

# Copy all files
COPY . .

# Install dependencies
RUN yarn install --network-concurrency 1

# Heroku exposes its own port
ENV PORT=3000

# Production mode
ENV NODE_ENV=production

# Start bot using PM2
CMD ["pm2-runtime", "index.js"]
