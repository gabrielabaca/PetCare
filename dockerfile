# Use Node18
FROM node:18-alpine

WORKDIR /usr/src/app

COPY . .
RUN npm install -g npm@10.5.0

RUN npm install

EXPOSE 3000

CMD ["npm", "dev"]