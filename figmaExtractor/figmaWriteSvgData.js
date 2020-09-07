const fs = require('fs');

module.exports = (iconData, config) => {

  // make sure directory is there
  const outputFolder = `./${config.output.folder}`;

  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  }

  iconData.forEach((icon) => {
    fs.writeFileSync(`${outputFolder}/${icon.name}.svg`, icon.svg);
  });

  console.log('SVG INFO: saved svg\'s');

}
