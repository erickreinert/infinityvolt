# Use a imagem oficial do Node.js como base
FROM node:18-alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copie o package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código para o container
COPY . .

# Gera a build de produção
RUN npm run build

# Expõe a porta padrão do Next.js (3000)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]
