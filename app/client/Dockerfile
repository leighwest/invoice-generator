FROM node:lts

WORKDIR "/client"

COPY package.json ./

RUN npm install

CMD ["npm", "run", "start"]