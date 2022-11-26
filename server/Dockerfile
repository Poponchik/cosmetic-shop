FROM node:14.21

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

CMD [ "node", "dist/main" ]