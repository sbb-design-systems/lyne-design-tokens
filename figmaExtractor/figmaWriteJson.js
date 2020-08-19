const fs = require('fs');

module.exports = (json, config) => {

  // make sure directory is there
  const outputFolder = `./${config.output.folder}`;
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  }

  // the main keys in the object are used as
  // file names for the json files
  const keys = Object.keys(json);

  keys.forEach((key) => {
    const content = json[key];

    fs.writeFileSync(`${outputFolder}/${key}.json`, JSON.stringify(content));
  });

}
