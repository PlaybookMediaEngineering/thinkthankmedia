#!/bin/bash

set -o xtrace

docker rmi localhost/thinkthankmedia || true
docker build --target dist -t localhost/thinkthankmedia -f Dockerfile.dev .
docker build --target devcontainer -t localhost/thinkthankmedia-devcontainer -f Dockerfile.dev .
