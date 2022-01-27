yarn
yarn build -- --mode=docker #&& npm run build:app-plus -- --mode=docker
docker build -t harbor.supwisdom.com/service-governance/school-bus-pc:1.0-qhu -f Dockerfile .
docker push harbor.supwisdom.com/service-governance/school-bus-pc:1.0-qhu
