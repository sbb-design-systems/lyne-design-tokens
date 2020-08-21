const shell = require('shelljs');
const fs = require("fs");
const path = require("path");
const simpleGit = require('simple-git');
require('dotenv').config();
const git = simpleGit();

const getAllFiles = function(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  })

  return arrayOfFiles
};

(async () => {
  try {
    const propertiesFiles = getAllFiles('./properties');

    await git.add(propertiesFiles);
    await git.commit('fix: figma library update');

    const remote = `https://lyne-admin:${process.env.GH_TOKEN}@github.com/lyne-design-system/lyne-design-tokens`;

    await git.push(remote, 'origin', 'master');

    console.log('-->> successfully puhed files back to git');
    shell.exit(0);
  } catch (e) {
    console.log('-->> Error while pushing files back to git');
    console.log(e);

    shell.exit(1);
  }
})();
