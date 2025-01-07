# Imagem base
FROM python:3.11-slim

# Diretório de trabalho
WORKDIR /app

# Copiar os arquivos do projeto para o container
COPY . .

# Instalar dependências
RUN pip install --no-cache-dir -r requirements.txt

# Comando para executar o script
CMD ["python", "app.py"]
