FROM node:12

WORKDIR /var/www/app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env.example .env

EXPOSE 8080

CMD [ "npm", "start" ]