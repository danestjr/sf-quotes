FROM node:slim
WORKDIR /sfquotes
COPY . .
RUN npm install
CMD [ "node", "index.js"]
EXPOSE 3010
