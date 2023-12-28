FROM node:slim

RUN mkdir -p /home/dokku/sfquotes/node_modules && chown -R node:node /home/dokku/sfquotes

WORKDIR /home/dokku/sfquotes

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

CMD [ "node", "index.js" ]