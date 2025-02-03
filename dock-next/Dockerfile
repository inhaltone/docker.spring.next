FROM node:18 AS base

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

#Target DEV
FROM base AS dev

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]