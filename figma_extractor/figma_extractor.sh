#!/bin/bash

# this script is used in .travis.yml

# this script is being made executable with
# chmod ugo+x figma_extractor.sh

# set flags for execution of this file:
# -e: make sure command returns non-zero exit code as soon as somehting fails
set -e

# During local development, we want to use the .env file. On CI, we
# will pass these variables as options
if [ -f .env ]
then
  export $(cat .env | sed 's/#.*//g' | xargs)
fi

# Necessary variables
ACCESS_TOKEN=${FIGMA_ACCESS_TOKEN}
FILE_URL=${FIGMA_FILE_URL}
JSON_FILENAME=${FIGMA_JSON_FILENAME}

# Get JSON from Figma API
curl -sH "X-Figma-Token: $FIGMA_ACCESS_TOKEN" "$FIGMA_FILE_URL" -o $FIGMA_JSON_FILENAME
