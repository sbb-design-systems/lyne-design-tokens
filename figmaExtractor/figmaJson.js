// get frame for specified name
const getFrameForName = (name, frames) => {
  return frames.filter((frame) => frame.name === name)[0];
};

// get hex from rgba
const rgbaToHex = (color) => {
  let r = parseInt(color.r * 255).toString(16);
  let g = parseInt(color.g * 255).toString(16);
  let b = parseInt(color.b * 255).toString(16);

  if (r.length === 1) {
    r = '0' + r;
  }

  if (g.length === 1) {
    g = '0' + g;
  }

  if (b.length === 1) {
    b = '0' + b;
  }

  return '#' + r + g + b;
};

// iterate children until no more children are found and build up the final
// json
const buildFinalJson = (children, finalJson, figmaType, styleProperty, config) => {

  while (children.length > 0) {
    const child = children.pop();

    if (child.type === config.figma.childTypes.component) {
      const realChild = child.children[0];
      let value;

      if (styleProperty === config.figma.styleTypes.color) {
        value = rgbaToHex(realChild.fills[0].color);
      } else if (styleProperty === config.figma.styleTypes.fontSize) {
        value = realChild.style.fontSize;
      }

      finalJson[realChild.name] = {
        value: value
      };
    } else if (child.type === config.figma.childTypes.group) {
      const groupChildren = child.children;
      const groupName = child.name;

      finalJson[groupName] = buildFinalJson(groupChildren, {}, figmaType, styleProperty, config);
    }
  }

  return finalJson;
};

module.exports = (frames, config) => {
  const designTokens = [];

  // build colors
  const colorFrame = getFrameForName(config.figma.frameNames.color, frames);
  const colorChildren = colorFrame.children;
  const colorJson = buildFinalJson(colorChildren, {}, config.figma.childTypes.rectangle, config.figma.styleTypes.color, config);

  // build font sizes
  const typoFrame = getFrameForName(config.figma.frameNames.fontSize, frames);
  const typoChildren = typoFrame.children;
  const fontSizeJson = buildFinalJson(typoChildren, {}, config.figma.childTypes.text, config.figma.styleTypes.fontSize, config);

  return {
    color: { // this key will be the file name of the json
      color: colorJson
    },
    size: {
      size: {
        font: fontSizeJson
      }
    }
  };

};
