const shell = require('shelljs');
const figmaApi = require('./figmaApi');
const getFigmaFrames = require('./figmaFrames');
const getFigmaJson = require('./figmaJson');
const writeJson = require('./figmaWriteJson');

require('dotenv').config();

// general configuration
// const config = {
  // destinationFileName: './figma_extractor/figma.json'
// };

(async () => {

  try {

    const apiConfig = {
      token: process.env.FIGMA_ACCESS_TOKEN,
      file: process.env.FIGMA_FILE_URL
    };

    const figmaData = await figmaApi(apiConfig);
    const figmaFrames = getFigmaFrames(figmaData);
    const figmaJson = getFigmaJson(figmaFrames);
    writeJson(figmaJson);

    shell.exit(0);

  } catch (error) {
    console.log(error);
    shell.exit(0);
  }
})();
