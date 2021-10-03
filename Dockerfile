FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install -g nodemon
RUN npm install

COPY . .

EXPOSE 5000

CMD ["nodemon", "src/server.js"]
