FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

COPY ./pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]



