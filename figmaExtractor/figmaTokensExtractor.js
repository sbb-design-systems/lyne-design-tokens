const shell = require('shelljs');
const figma = require('lyne-helper-figma-api');
const getFigmaJson = require('./figmaTokensJson');
const writeJson = require('./figmaWriteTokenJson');

require('dotenv')
  .config();

// general configuration
const config = {
  figma: {
    childTypes: {
      component: 'COMPONENT',
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

    const figmaDocument = await figma.document(apiConfig.file, apiConfig.token);
    const pages = figma.pages(figmaDocument, config.pagesIgnorePattern);

    if (!pages || pages.length < 1) {
      throw new Error('No relevant figma pages found.');
    }

    const frames = figma.frames(pages[0], config.frameIgnorePattern);

    const figmaJson = getFigmaJson(frames, config);

    writeJson(figmaJson, config);

    console.log('-->> FIGMA JSON FOR TOKENS EXTRACTED SUCCESSFULLY');
    shell.exit(0);

  } catch (error) {
    console.log(error);
    shell.exit(1);
  }
})();
