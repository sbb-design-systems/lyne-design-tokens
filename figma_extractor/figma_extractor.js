const shell = require('shelljs');
const axios = require('axios');
const fs = require('fs');

require('dotenv').config();

// check env variables
if (!process.env.FIGMA_ACCESS_TOKEN) {
  console.log('env Variable FIGMA_ACCESS_TOKEN is not defined');
  shell.exit(0);
}

if (!process.env.FIGMA_FILE_URL) {
  console.log('env Variable FIGMA_FILE_URL is not defined');
  shell.exit(0);
}


// general configuration
const config = {
  destinationFileName: './figma_extractor/figma.json'
};

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
      console.log('Error fetching JSON from Figma API');
      shell.exit(0);
    }

    return figmaJson.data;

  } catch (e) {
    console.log(error);
    console.log('Error fetching JSON from Figma API');
    shell.exit(0);
  }
};

(async () => {


  try {


    const figmaJson = await getFigmaJSON();

    console.log(figmaJson);

  } catch (error) {
    console.log('-->> Error fetching JSON from Figma API');
    console.log(error);
    shell.exit(0);
  }
})();
