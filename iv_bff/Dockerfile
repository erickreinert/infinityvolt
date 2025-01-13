FROM node:18
WORKDIR /bff
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "start"]