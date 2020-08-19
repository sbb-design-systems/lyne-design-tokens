const shell = require('shelljs');
const figmaApi = require('./figmaApi');
const getFigmaFrames = require('./figmaFrames');
const getFigmaJson = require('./figmaJson');
const writeJson = require('./figmaWriteJson');

require('dotenv').config();

// general configuration
const config = {
  figma: {
    frameNames: {
      color: 'color',
      typography: 'typography'
    },
    childTypes: {
      frame: 'FRAME',
      group: 'GROUP',
      text: 'TEXT',
      rectangle: 'RECTANGLE'
    },
    styleTypes: {
      color: 'color',
      fontSize: 'fontSize',
      typography: 'typography'
    }
  },
  output: {
    folder: 'properties'
  }
};

// self-invoking
(async () => {

  try {

    const apiConfig = {
      token: process.env.FIGMA_ACCESS_TOKEN,
      file: process.env.FIGMA_FILE_URL
    };

    const figmaData = await figmaApi(apiConfig);
    const figmaFrames = getFigmaFrames(figmaData, config);
    const figmaJson = getFigmaJson(figmaFrames, config);

    writeJson(figmaJson, config);

    console.log('-->> FIGMA JSON EXTRACTED SUCCESSFULLY');
    shell.exit(0);

  } catch (error) {
    console.log(error);
    shell.exit(1);
  }
})();
