import fs from 'fs';
import argv from 'minimist';
import simpleGit from 'simple-git';

const git = simpleGit();

const config = {
  archiveFolder: 'versions',
  cdnFolder: 'cdn',
  cdnVersionsFile: 'versions.json',
  tokensFileName: 'tokens.json',
  tokensSourcePath: './dist/js/',
};

(async () => {
  const args = argv(process.argv.slice(2));
  const version: string = args['i'];
  const cdnDir = `./${config.cdnFolder}`;
  const archiveDir = `${cdnDir}/${config.archiveFolder}`;
  const versionDir = `${archiveDir}/${version}`;
  const versionFileTarget = `${versionDir}/${config.tokensFileName}`;
  const tokensFileSource = `${config.tokensSourcePath}${config.tokensFileName}`;
  const tokensFileTarget = `${cdnDir}/${config.tokensFileName}`;

  await git.checkout('master');
  await git.pull();

  // make sure cdn folder exists
  if (!fs.existsSync(cdnDir)) {
    fs.mkdirSync(cdnDir);
  }

  // make sure archive folder exists
  if (!fs.existsSync(archiveDir)) {
    fs.mkdirSync(archiveDir);
  }

  // check if version folder already exists
  if (fs.existsSync(versionDir)) {
    console.log('-->> Generate CDN Assets: current release version already exists in archive.');
    process.exit(0);
  }

  // create version folder
  fs.mkdirSync(versionDir);

  try {
    // generate tokens file
    generateTokensFile(version, tokensFileSource, tokensFileTarget);

    // copy files to archive version folder
    console.log(tokensFileTarget, versionFileTarget);
    copyFile(tokensFileTarget, versionFileTarget);

    // create versions file
    createVersionsFile(archiveDir);

    // create index page
    createIndexHtmlPage();

    // add all files, commit and push
    await git.add(`${cdnDir}/*`);
    await git.commit(`chore: add CDN assets for version ${version} [skip ci]`);
    await git.push('origin', 'master', {
      '--force': 'true',
    });

    console.log('-->> Generate CDN Assets: generated and pushed assets to git');
  } catch (error) {
    console.log(`-->> Generate CDN Assets error: ${error}`);
    process.exit(0);
  }
})();

function generateTokensFile(version: string, sourceFile: string, targetFile: string) {
  const tokenContent = fs.readFileSync(sourceFile, 'utf8');
  const outputRaw = {
    tokens: JSON.parse(tokenContent),
    version,
  };
  const output = JSON.stringify(outputRaw, null, 2);

  fs.writeFileSync(targetFile, output, 'utf8');
}

function copyFile(source: string, destination: string) {
  fs.copyFileSync(source, destination);
}

function createVersionsFile(archiveDir: string) {
  const files = fs.readdirSync(archiveDir);

  // make sure files are sorted correctly when leaving period
  files.sort((a, b) => {
    const aRemoveDot = a.replace('.', '0');
    const bRemoveDot = b.replace('.', '0');
    const aInt = parseInt(aRemoveDot, 10);
    const bInt = parseInt(bRemoveDot, 10);

    if (aInt > bInt) {
      return 1;
    }

    if (aInt < bInt) {
      return -1;
    }

    return 0;
  });

  const reversed = files.reverse();

  const fileContent: Record<string, { tokens: string; url: string }> = {};

  reversed.forEach((file) => {
    const rootPath = `/${config.archiveFolder}/${file}`;

    fileContent[file] = {
      tokens: `${rootPath}/${config.tokensFileName}`,
      url: rootPath,
    };
  });

  fs.writeFileSync(
    `./${config.cdnFolder}/${config.cdnVersionsFile}`,
    JSON.stringify(fileContent),
    'utf8'
  );
}

function createIndexHtmlPage() {
  const rawVersions = fs.readFileSync(`./${config.cdnFolder}/${config.cdnVersionsFile}`, 'utf8');
  const versions = JSON.parse(rawVersions);

  const html = `
  <!DOCTYPE html>
  <html lang="en" dir="ltr">
    <head>
      <meta charset="utf-8">
      <title>Lyne Design Tokens CDN</title>
    </head>
    <body>
      <h1>CDN for Lyne Design Tokens</h1>

      <p>Every release has a folder containing a file with all the design token declarations.</p>

      <p>There is a JSON-File containing all the versions along with the corresponding urls to the tokens.json file: <a href="/${
        config.tokensFileName
      }">tokens.json</a></p>

      <h2>Directories</h2>

      <h3>Latest Release</h3>
      <p><a href="/${config.tokensFileName}">tokens.json</a></p>

      <h3>Versions</h3>
      <ul>
      ${Object.keys(versions)
        .map((key) => {
          const versionItem = versions[key];
          const liElem = `
      <li>
        <h4>Version ${key}</h4>
        <p>Root URL: ${versionItem.url}</p>
        <p>Tokens file: <a href="${versionItem.tokens}">${versionItem.tokens}</a></p>
      </li>`;

          return liElem;
        })
        .join('')}
      </ul>

    </body>
  </html>
  `;

  fs.writeFileSync(`./${config.cdnFolder}/index.html`, html, 'utf8');
}
