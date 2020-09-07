const shell = require('shelljs');
const figmaApi = require('./figmaApi');
const getFigmaFrames = require('./figmaFrames');
const getFigmaJson = require('./figmaTokensJson');
const writeJson = require('./figmaWriteTokenJson');

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
  frameIgnorePattern: '***ignore***',
  output: {
    folder: 'properties'
  }
};

// self-invoking
(async () => {
  try {

    const apiConfig = {
      file: `https://api.figma.com/v1/files/${process.env.FIGMA_TOKENS_FILE_ID}`,
      token: process.env.FIGMA_ACCESS_TOKEN
    };

    const figmaData = await figmaApi(apiConfig);
    const figmaFrames = getFigmaFrames(figmaData, config);

    const figmaJson = getFigmaJson(figmaFrames, config);

    writeJson(figmaJson, config);

    console.log('-->> FIGMA JSON FOR TOKENS EXTRACTED SUCCESSFULLY');
    shell.exit(0);

  } catch (error) {
    console.log(error);
    shell.exit(1);
  }
})();
