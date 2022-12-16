#!/bin/bash

FILE="Dockerfile"

if test -f $FILE; then
    docker image build -t oss-links-nextjs:latest .
else
    echo "$FILE not found. Are you in root dir of oss-links-nextjs?"
fi
