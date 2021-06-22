FROM node:14.15.0-alpine
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .

CMD ["npm", "start"]