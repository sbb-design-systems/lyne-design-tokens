// Get frames from 1st page of the Figma file
module.exports = (figmaData, config) => {

  // make sure that file is not empty
  const figmaDocument = figmaData.document;

  if (!figmaDocument) {
    throw new Error('ERROR: Figma file seems to be empty');
  }

  // make sure that file has pages
  const figmaPages = figmaDocument.children;

  if (!figmaPages || figmaPages.length < 1) {
    throw new Error('ERROR: Figma file seems not to have any pages');
  }

  /**
   * get the first page. By convention, we put all definitions on
   * the first page
   */
  const [figmaPage] = figmaPages;

  // make sure that 1st page has regions
  const {
    children
  } = figmaPage;

  if (!children || children.length < 1) {
    throw new Error('ERROR: 1st page of the Figma file does not have any children');
  }

  const figmaFrames = children.filter((frame) => frame.type === config.figma.childTypes.frame);

  if (figmaFrames.length < 1) {
    throw new Error('ERROR: 1st page of the Figma file does not have any frames');
  }

  return figmaFrames;

}
