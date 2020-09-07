const shell = require('shelljs');
const figmaApi = require('./figmaApi');
const getFigmaFrames = require('./figmaFrames');
const figmaIcons = require('./figmaIcons');

require('dotenv')
  .config();

// general configuration
const config = {
  figma: {
    childTypes: {
      frame: 'FRAME'
    }
  },
  frameIgnorePattern: '***ignore***'
};

// self-invoking
(async () => {
  try {

    const apiConfig = {
      file: `https://api.figma.com/v1/files/${process.env.FIGMA_ICONS_FILE_ID}`,
      fileId: process.env.FIGMA_ICONS_FILE_ID,
      token: process.env.FIGMA_ACCESS_TOKEN
    };

    const figmaData = await figmaApi(apiConfig);

    const figmaFrames = getFigmaFrames(figmaData, config);

    await figmaIcons(figmaFrames, apiConfig);

    console.log('-->> FIGMA JSON FOR ICONS EXTRACTED SUCCESSFULLY');
    shell.exit(0);

  } catch (error) {
    console.log(error);
    shell.exit(1);
  }
})();
