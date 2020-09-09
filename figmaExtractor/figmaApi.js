const axios = require('axios');

module.exports = async (config) => {
  try {

    const {
      token,
      file
    } = config;

    const requestHeaders = {
      'X-Figma-Token': token
    };

    const requestConfig = {
      headers: requestHeaders,
      method: 'GET',
      url: file
    };

    const figmaJson = await axios.request(requestConfig);

    return figmaJson.data;

  } catch (e) {
    throw new Error(`figmaApi.js: ${e.message}`);
  }
};
