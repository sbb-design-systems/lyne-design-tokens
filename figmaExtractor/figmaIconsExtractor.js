const shell = require('shelljs');
const figmaApi = require('./figmaApi');
const getFigmaFrames = require('./figmaFrames');
const figmaIcons = require('./figmaIcons');
const writeSvgData = require('./figmaWriteSvgData');

require('dotenv')
  .config();

// general configuration
const config = {
  figma: {
    childTypes: {
      frame: 'FRAME'
    }
  },
  frameIgnorePattern: '***ignore***',
  output: {
    folder: 'icons'
  }
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
    const iconData = await figmaIcons(figmaFrames, apiConfig);

    writeSvgData(iconData, config);

    console.log('-->> FIGMA SVG FILES SAVED');
    shell.exit(0);

  } catch (error) {
    console.log(error);
    shell.exit(1);
  }
})();
