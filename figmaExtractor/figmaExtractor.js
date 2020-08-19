const shell = require('shelljs');
// const fs = require('fs');
const figmaApi = require('./figmaApi');
const getFigmaFrames = require('./figmaFrames');

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

    console.log(figmaFrames);
    // const figmaJson = await getFigmaJSON();

    // const figmaStyles = getFigmaStyles(figmaJson);
    // const fillStyleOfWhiteBox = figmaFrames[0].children[1].styles.fill;
    // console.log(getFigmaStyleNameForId(fillStyleOfWhiteBox, figmaStyles));

    // console.log(figmaFrames[0].children[1].fills[0]);

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
    console.log(error);
    shell.exit(0);
  }
})();
