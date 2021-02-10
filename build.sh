#!/bin/sh
VERSION=`cat VERSION`
IMAGE_NAME=docker.pkg.github.com/alferguet/user-code-challenge/production
docker build -t $IMAGE_NAME:$VERSION . && docker push $IMAGE_NAME:$VERSION
