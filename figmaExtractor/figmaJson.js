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
const buildFinalJson = (children, finalJson, figmaType, styleProperty) => {

  while (children.length > 0) {
    const child = children.pop();

    if (child.type === figmaType) {
      let value;

      if (styleProperty === 'color') {
        value = rgbaToHex(child.fills[0].color);
      } else if (styleProperty === 'fontSize') {
        value = child.style.fontSize;
      }

      finalJson[child.name] = {
        value: value
      };
    } else if (child.type === 'GROUP') {
      const groupChildren = child.children;
      const groupName = child.name;

      finalJson[groupName] = buildFinalJson(groupChildren, {}, figmaType, styleProperty);
    }
  }

  return finalJson;
};

module.exports = (frames) => {
  const designTokens = [];

  // build colors
  const colorFrame = getFrameForName('color', frames);
  const colorChildren = colorFrame.children;
  const colorJson = buildFinalJson(colorChildren, {}, 'RECTANGLE', 'color');

  // build font sizes
  const typoFrame = getFrameForName('typography', frames);
  const typoChildren = typoFrame.children;
  const fontSizeJson = buildFinalJson(typoChildren, {}, 'TEXT', 'fontSize');

  return {
    color: { // this key will be the file name of the json
      color: colorJson
    },
    font: {
      font: {
        size: fontSizeJson
      }
    }
  };
};
