const fs = require('fs');
const rimraf = require('rimraf');

module.exports = (json, config) => {

  // make sure directory is there
  const outputFolder = `./${config.output.folder}`;

  // delete output folder
  rimraf.sync(outputFolder);

  // delete dist
  rimraf.sync('./dist');

  // create output folder
  fs.mkdirSync(outputFolder);

  /**
   * the main keys in the object are used as
   * file names for the json files
   */
  const keys = Object.keys(json);

  keys.forEach((key) => {
    const content = json[key];

    fs.writeFileSync(`${outputFolder}/${key}.json`, JSON.stringify(content));
  });

};
