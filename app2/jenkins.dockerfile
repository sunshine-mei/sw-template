FROM node:12.13.0-alpine3.9 as build-stage

RUN npm config set registry https://app.supwisdom.com/nexus/repository/sw-npm/
RUN npm config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
RUN npm install -g yarn

RUN mkdir /container
WORKDIR /container

COPY ./ .
RUN rm -rf ./yarn.lock
RUN yarn
RUN yarn build:h5

# copy binary alpine
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /container/dist/build/h5 /usr/share/nginx/html/h5
COPY --from=build-stage /container/docker/default.conf.bak /etc/nginx/conf.d/
COPY --from=build-stage /container/docker/docker-entrypoint.sh /

RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["app"]
