# Etapa de construção do frontend (React)
FROM node:18 as build-frontend

WORKDIR /front
COPY front-connect/package.json front-connect/package-lock.json ./
RUN npm install --legacy-peer-deps
COPY front-connect ./
RUN npm run build

# Etapa de construção do backend (Laravel)
FROM php:8.1-fpm as build-backend

WORKDIR /var/www/html
COPY api-connect/composer.json api-connect/composer.lock ./
RUN apt-get update && apt-get install -y libzip-dev unzip && docker-php-ext-install pdo_mysql zip
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN composer install
COPY api-connect ./
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Etapa final: combinar tudo em uma imagem de produção
FROM nginx:stable-alpine

# Configurar Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar frontend construído para o diretório Nginx
COPY --from=build-frontend /front/build /usr/share/nginx/html

# Copiar backend para o diretório do Laravel
COPY --from=build-backend /var/www/html /var/www/html

# Expor a porta 80
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
