FROM nginx:1.17.4-alpine@sha256:0649f548ea26589c64c8aec1d4614a7111bd3caad5122258bc39d361187b4d6c

MAINTAINER https://teamdigitale.governo.it

# Use custom nginx configs
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

# Copy site content
COPY _site /usr/share/nginx/html
