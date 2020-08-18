const shell = require('shelljs');
const axios = require('axios');
const fs = require('fs');

require('dotenv').config();

// check env variables
if (!process.env.FIGMA_ACCESS_TOKEN) {
  console.log('ERROR: env Variable FIGMA_ACCESS_TOKEN is not defined');
  shell.exit(0);
}

if (!process.env.FIGMA_FILE_URL) {
  console.log('ERROR: env Variable FIGMA_FILE_URL is not defined');
  shell.exit(0);
}

// general configuration
const config = {
  destinationFileName: './figma_extractor/figma.json'
};

// Get JSON for specified file from Figma API
const getFigmaJSON = async () => {
  try {

    const figmaJson = await axios.request({
      method: 'GET',
      headers: {
        'X-Figma-Token': process.env.FIGMA_ACCESS_TOKEN
      },
      url: process.env.FIGMA_FILE_URL
    });

    if (!figmaJson.data || figmaJson.data.length < 1) {
      console.log('ERROR: Error fetching JSON from Figma API');
      shell.exit(0);
    }

    return figmaJson.data;

  } catch (e) {
    console.log(error);
    console.log('ERROR: Error fetching JSON from Figma API');
    shell.exit(0);
  }
};

// Get regions from 1st page of the Figma file
const getFigmaRegions = (figmaJson) => {

  // make sure that file is not empty
  const figmaDocument = figmaJson.document;

  if (!figmaDocument) {
    console.log('ERROR: Figma file seems to be empty');
    shell.exit(0);
  }

  // make sure that file has pages
  const figmaPages = figmaDocument.children;

  if (!figmaPages || figmaPages.length < 1) {
    console.log('ERROR: Figma file seems not to have any pages');
    shell.exit(0);
  }

  // get the first page. By convention, we put all definitions on
  // the first page
  const figmaPage = figmaPages[0];

  // make sure that 1st page has regions
  const figmaRegions = figmaPage.children;

  if (!figmaRegions || figmaRegions.length < 1) {
    console.log('ERROR: 1st page of the Figma file does not have any regions');
    shell.exit(0);
  }

  return figmaRegions;
}

(async () => {

  try {


    const figmaJson = await getFigmaJSON();
    const figmaRegions = getFigmaRegions(figmaJson);

    console.log(figmaRegions);

    /*


    // write .json file
    fs.mkdirSync(deploymentsDir);
    fs.writeFileSync(`./${deploymentsDir}/${config.deploymentsJsonName}`, JSON.stringify(json));

    // write index file
    fs.writeFileSync(`./${deploymentsDir}/index.html`, '<html><body><p>This space is empty. It is only serving deployments.json for lyne-design-system. <a href="/deployments.json">deployments.json</a></p></body></html>');

    console.log(`-->> NETLIFY DEPLOYMENTS: Successfully created ${config.deploymentsJsonName}`);
    shell.exit(0);
    */
  } catch (error) {
    console.log('ERROR: Error fetching JSON from Figma API');
    console.log(error);
    shell.exit(0);
  }
})();
