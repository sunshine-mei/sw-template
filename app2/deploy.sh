yarn
yarn build:h5 -- --mode=docker #&& npm run build:app-plus -- --mode=docker
docker build -t harbor.supwisdom.com/service-governance/school-bus-app:1.0-qhu .
docker push harbor.supwisdom.com/service-governance/school-bus-app:1.0-qhu
