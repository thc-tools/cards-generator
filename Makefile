
default: help

run:
	docker run --rm -it -p 3000:3000 -w /work -v ${PWD}:/work --entrypoint="" node:13.1.0-alpine sh