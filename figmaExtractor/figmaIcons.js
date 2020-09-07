const axios = require('axios');

/**
 * Get id and name from each child
 */
const getIconNamesAndIds = (frames) => {
  const icons = {};

  frames.forEach((frame) => {
    frame.children.forEach((child) => {
      icons[child.id] = child.name;
    });
  });

  return icons;
};

/**
 * Generate a request to the Figma api for each icon the get the svg-url
 */
const getIconUrlRequests = (figmaConfig, icons) => {
  const {
    fileId,
    token
  } = figmaConfig;

  const requestHeaders = {
    'X-Figma-Token': token
  };

  const requestConfig = {
    headers: requestHeaders,
    method: 'GET'
  };

  const requests = [];
  const keys = Object.keys(icons);

  keys.forEach((key) => {
    requestConfig.url = `https://api.figma.com/v1/images/${fileId}/?ids=${key}&format=svg`;

    requests.push(axios.request(requestConfig));

  });

  return requests;
};

/**
 * Extract the image url from the Figma api response
 */
const getSVGUrls = (iconResponses) => {
  const urls = {};

  iconResponses.forEach((response) => {
    const item = response.data;

    if (item.err !== null) {
      console.log(`ERROR: ${item.err}`);

      return;
    }

    const imagesKeys = Object.keys(item.images);

    if (imagesKeys.length !== 1) {
      console.log('ATTENTION: skip icon because there seem to be multiple images on aws related to that icon');

      return;
    }

    const imageUrl = item.images[imagesKeys[0]];

    urls[imagesKeys[0]] = imageUrl;
  });

  return urls;
};

/**
 * Make an object for each icon with id, name and url
 */
const getMergedIdsAndNames = (names, urls) => {
  const mergedIconInfo = [];
  const urlKeys = Object.keys(urls);

  urlKeys.forEach((urlKey) => {
    const name = names[urlKey];
    const url = urls[urlKey]

    mergedIconInfo.push({
      id: urlKey,
      name,
      url
    });
  });

  return mergedIconInfo;
};

/**
 * Make a request to AWS for each icon to get the content of the svg
 */
const getIconContentRequests = (iconsInfo) => {
  const requests = [];

  iconsInfo.forEach((info) => {
    const config = {
      data: {
        id: info.id,
        name: info.name
      },
      method: 'GET',
      url: info.url
    }

    const request = axios.request(config);

    requests.push(request);
  });

  return requests;
};

/**
 * Make an object for each icon with id, name and svg-content
 */
const getSVGContent = (responses) => {
  const content = [];

  responses.forEach((response) => {
    const config = JSON.parse(response.config.data);

    content.push({
      id: config.id,
      name: config.name,
      svg: response.data
    });
  });

  return content;
};

module.exports = async (frames, figmaConfig) => {
  const icons = getIconNamesAndIds(frames);
  const urlRequests = getIconUrlRequests(figmaConfig, icons);
  const response = await Promise.all(urlRequests);

  console.log('SVG INFO: fetched url\'s to download svg');

  const iconUrls = getSVGUrls(response);
  const iconsInfo = getMergedIdsAndNames(icons, iconUrls);
  const iconsContentRequests = getIconContentRequests(iconsInfo);
  const svgResponses = await Promise.all(iconsContentRequests);

  console.log('SVG INFO: fetched svg\'s contents');

  const svgContent = getSVGContent(svgResponses);

  return svgContent;
};
