prebuild:
	docker image build -t talklikethat-app-build -f ./api/Dockerfile_build .

api-build:
	docker container run -it --rm -v $(shell pwd)/api:/app talklikethat-app-build clean package

api-image-build:
	docker image build -t rylea/api-talklikethat ./api

api-image-run:
	docker container run -ditp 80:8080 --rm rylea/api-talklikethat
