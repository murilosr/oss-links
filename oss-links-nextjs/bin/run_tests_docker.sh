#!/bin/bash

docker run \
-it \
--name oss-links-nextjs-test \
oss-links-nextjs:latest yarn test

docker rm -f oss-links-nextjs-test >> /dev/null