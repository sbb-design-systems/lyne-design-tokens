#!/bin/bash

# this script is used in .travis.yml

# this script is being made executable with
# chmod ugo+x deploy_cdn_assets.sh

# set flags for execution of this file:
# -e: make sure command returns non-zero exit code as soon as somehting fails
set -e

# version file name written by .releaserc
VERSION_FILE=.version

if [ -f "$VERSION_FILE" ];
then

  VERSION="$(cat .version)"

  # generate cdn assets
  node ./ci/createCdnAssets.js -i $VERSION

  # Deploy CDN assets to netlify
  netlify deploy --prod --message "::$VERSION::" --site $NETLIFY_SITE_ID --auth $NETLIFY_AUTH_TOKEN --dir ./cdn/

else
  echo "-->> No version released, thus skipping netlify depoly"
fi
