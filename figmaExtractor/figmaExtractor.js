const shell = require('shelljs');
const figmaApi = require('./figmaApi');
const getFigmaFrames = require('./figmaFrames');
const getFigmaJson = require('./figmaJson');
const writeJson = require('./figmaWriteJson');

require('dotenv')
  .config();

// general configuration
const config = {
  figma: {
    childTypes: {
      component: 'COMPONENT',
      frame: 'FRAME',
      group: 'GROUP',
      rectangle: 'RECTANGLE',
      text: 'TEXT'
    },
    frameNames: {
      color: 'color',
      fontSize: 'font-size'
    },
    styleTypes: {
      color: 'color',
      fontSize: 'fontSize'
    }
  },
  output: {
    folder: 'properties'
  }
};

// self-invoking
(async () => {
  try {

    const args = process.argv;

    console.log(args);

    const apiConfig = {
      file: process.env.FIGMA_FILE_URL,
      token: process.env.FIGMA_ACCESS_TOKEN
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
