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

    // git add and commit. Files will be pushed during semantic-release
    await git.add(propertiesFiles);
    await git.commit('fix: figma library update [skip ci]');

    shell.exit(0);
  } catch (e) {
    console.log('-->> Error while pushing files back to git');
    console.log(e);

    shell.exit(1);
  }
})();
