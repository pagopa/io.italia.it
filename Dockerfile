FROM nginx:1.17.4-alpine

MAINTAINER https://teamdigitale.governo.it

# Use custom nginx configs
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

# Copy site content
COPY _site /usr/share/nginx/html
