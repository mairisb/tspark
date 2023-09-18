FROM nginx:alpine

COPY reverse-proxy/ssl/tspark.key /etc/nginx/ssl/tspark.key
COPY reverse-proxy/ssl/tspark.crt /etc/nginx/ssl/tspark.crt

COPY reverse-proxy/nginx.conf /etc/nginx/conf.d/default.conf
