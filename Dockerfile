FROM nginxinc/nginx-unprivileged:1.23-alpine
COPY host/dist/ /var/www/build/
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]