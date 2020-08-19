const fs = require('fs');

module.exports = (json) => {

  // make sure directory is there
  if (!fs.existsSync('./properties')) {
    fs.mkdirSync('./properties');
  }

  // the main keys in the object are used as
  // file names for the json files
  const keys = Object.keys(json);

  keys.forEach((key) => {
    const content = json[key];

    fs.writeFileSync(`./properties/${key}.json`, JSON.stringify(content));
  });

}
