FROM nginx:alpine

COPY dist/build/h5 /usr/share/nginx/html/h5
COPY docker/docker-entrypoint.sh /
COPY docker/default.conf.bak /etc/nginx/conf.d/

RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["app"]
