const fs = require("fs");
const path = require("path");
const simpleGit = require('simple-git');
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
  const propertiesFiles = getAllFiles('./properties');
  console.log(propertiesFiles);

  await git.add(propertiesFiles);
  await git.commit('fix: figma library update');
  await git.push('origin', 'master');
})();
