const shell = require('shelljs');
const fs = require('fs');
const path = require('path');
const simpleGit = require('simple-git');
const argv = require('minimist');

require('dotenv')
  .config();

const git = simpleGit();

const getAllFiles = (dirPath, arrayOfFiles) => {
  const files = fs.readdirSync(dirPath);

  let _arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    const filePath = `${dirPath}/${file}`;
    const isDirectory = fs
      .statSync(filePath)
      .isDirectory();

    if (isDirectory) {
      _arrayOfFiles = getAllFiles(filePath, _arrayOfFiles);
    } else {
      _arrayOfFiles.push(path.join(dirPath, '/', file));
    }
  })

  return _arrayOfFiles;
};

(async () => {
  try {
    const commitMessage = argv(process.argv.slice(2));

    console.log(commitMessage);

    console.log(commitMessage['m']);

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
