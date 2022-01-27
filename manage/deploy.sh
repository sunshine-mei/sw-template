yarn
yarn build -- --mode=docker #&& npm run build:app-plus -- --mode=docker
docker build -t harbor.supwisdom.com/service-governance/study-center-manage:0.0.1 -f Dockerfile2 .
docker push harbor.supwisdom.com/service-governance/study-center-manage:0.0.1
