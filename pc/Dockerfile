FROM nginx:stable-alpine

COPY dist/ui /usr/share/nginx/html/ui
COPY docker-assets/docker-entrypoint.sh /
COPY docker-assets/default.conf.bak /etc/nginx/conf.d/

RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["app"]
