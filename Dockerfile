FROM node:18 

WORKDIR /app/service

COPY package*.json ./

RUN npm install

COPY src ./src
RUN ls 

CMD [ "npm", "run", "start:dev" ]
