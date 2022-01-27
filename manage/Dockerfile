# build binary
# see this https://vuejs.org/v2/cookbook/dockerize-vuejs-app.html
FROM node:lts-alpine as build-stage

# RUN apk add --update gcc musl-dev
RUN mkdir /pc
WORKDIR /pc

COPY package*.json ./
# sass相关的源
RUN yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g \
# 树维UI需要指定源
&& yarn --registry=https://app.supwisdom.com/nexus/repository/sw-npm/

COPY ./ .
RUN yarn build

# copy binary alpine
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /pc/dist/ /usr/share/nginx/html/
COPY --from=build-stage /pc/docker-assets/default.conf.bak /etc/nginx/conf.d/
COPY --from=build-stage /pc/docker-assets/docker-entrypoint.sh /

RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["app"]
