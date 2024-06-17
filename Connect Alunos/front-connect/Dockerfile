# Etapa de construção
FROM node:18 as build

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código do aplicativo
COPY . .

# Construir o aplicativo
RUN npm run build

# Etapa de produção
FROM nginx:stable-alpine

# Copiar os arquivos construídos para o nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80

# Comando para iniciar o nginx
CMD ["nginx", "-g", "daemon off;"]
