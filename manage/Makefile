image="harbor.supwisdom.com/service-governance/vote-service-manage:0.0.1"

.PHONY: image

image:
	- docker build --force-rm --pull -t ${image} -f Dockerfile .
	- docker push ${image}
