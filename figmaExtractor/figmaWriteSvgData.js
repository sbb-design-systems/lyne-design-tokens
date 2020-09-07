const fs = require('fs');

module.exports = (iconData, config) => {

  // make sure folder is there
  const outputFolder = `./${config.output.folder}`;

  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  }

  // make sure subFolder exists
  const subFolder = `${outputFolder}/${config.output.subfolder}`;

  if (!fs.existsSync(subFolder)) {
    fs.mkdirSync(subFolder);
  }

  // save icons
  iconData.forEach((icon) => {
    fs.writeFileSync(`${subFolder}/${icon.name}.svg`, icon.svg);
  });

  // save info file
  fs.writeFileSync(`${outputFolder}/${config.output.infoFile}.json`, JSON.stringify(iconData));

  console.log('SVG INFO: saved svg\'s');

}
