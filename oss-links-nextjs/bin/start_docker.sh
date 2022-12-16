#!/bin/bash

docker kill oss-links-nextjs
docker rm oss-links-nextjs

docker run \
-d \
-p 3000:3000 \
--restart=always \
--name oss-links-nextjs \
oss-links-nextjs:latest
