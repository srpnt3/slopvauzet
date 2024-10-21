FROM node:22-alpine AS base

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . /app

# Set startup command
CMD ["yarn", "start"]

