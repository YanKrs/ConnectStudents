# Usar a imagem oficial do PHP com Apache
FROM php:8.1-apache

# Instalar extensões necessárias
RUN docker-php-ext-install pdo pdo_mysql

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Definir diretório de trabalho
WORKDIR /var/www/html

# Copiar arquivos do Laravel
COPY . .

# Instalar dependências do Laravel
RUN composer install

# Ajustar permissões
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Expor a porta 80
EXPOSE 80
