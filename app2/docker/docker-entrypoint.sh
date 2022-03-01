#!/bin/sh

# https://stackoverflow.com/a/2705678/1287790
str_replace() {
  KEYWORD=$1
  ESCAPED_KEYWORD=$(echo $KEYWORD | sed -e 's/[]\/$*.^[]/\\&/g')

  REPLACE=$2
  ESCAPED_REPLACE=$(echo $REPLACE | sed -e 's/[\/&]/\\&/g')

  sed -i "s/$ESCAPED_KEYWORD/$ESCAPED_REPLACE/g" /etc/nginx/conf.d/default.conf
}

# 如果第一个参数是app，那么就启动执行nginx
if [ "$1" = 'app' ]; then

  if [ -z "$BACKEND_BASE_URL" ]; then
    echo 'env BACKEND_BASE_URL not provided'
    exit 1
  fi

  set -e;

  cp /etc/nginx/conf.d/default.conf.bak /etc/nginx/conf.d/default.conf
  str_replace '${BACKEND_BASE_URL}' "$BACKEND_BASE_URL"
  exec nginx -g "daemon off;"
else
  set -ex;
  exec "$@"
fi
