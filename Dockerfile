FROM node:slim

COPY package*.json ./

RUN npm install

CMD [ "node", "index.js" ]