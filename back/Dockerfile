FROM node:10-alpine

WORKDIR /usr/app
COPY package.json yarn.lock ./

COPY . .

EXPOSE 3333

CMD ["node", "index.js"]
