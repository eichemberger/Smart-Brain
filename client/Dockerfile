FROM node:16

WORKDIR /usr/src/front

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["npm", "start"]