const shell = require('shelljs');
const fs = require('fs');
const path = require('path');
const simpleGit = require('simple-git');
const argv = require('minimist');
const getCommit = require('./getTravisCommit');

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
  });

  return _arrayOfFiles;
};

(async () => {
  try {
    const jobId = argv(process.argv.slice(2))['i'];
    const commitMessage = await getCommit(jobId);
    const propertiesFiles = getAllFiles('./properties');

    // git add and commit. Files will be pushed during semantic-release
    await git.add(propertiesFiles);
    await git.commit(`${commitMessage} [skip ci]`);

    shell.exit(0);
  } catch (e) {
    console.log('-->> Error while committing properties files.');
    console.log(e);

    shell.exit(1);
  }
})();
