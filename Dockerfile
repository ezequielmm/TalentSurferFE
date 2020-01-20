FROM nginx:stable

COPY ./dist/ /var/www

COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
