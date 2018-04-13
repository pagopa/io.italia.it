FROM nginx:1.12.2-alpine

MAINTAINER https://teamdigitale.governo.it

COPY _site /usr/share/nginx/html
