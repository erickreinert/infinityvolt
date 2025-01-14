FROM node:18

EXPOSE 3001

WORKDIR /bff

COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "run", "start"]
