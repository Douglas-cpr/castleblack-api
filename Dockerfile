FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn

COPY . .

EXPOSE 8080

CMD [ "node", "app.ts" ]