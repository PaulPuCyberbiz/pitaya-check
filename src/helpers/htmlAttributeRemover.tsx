export const attribsRemover = (html: string) => {
  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(html, 'text/html');
  const blocklist = ['[data-widget="image"]', '[data-widget="uploadimage"]'];

  blocklist.forEach(blockitem => {
    const widgetItems = htmlDoc.querySelectorAll(blockitem);
    widgetItems.forEach(widgetItem => {
      widgetItem.removeAttribute('data-widget');
    });
  });

  return htmlDoc.head.innerHTML + htmlDoc.body.innerHTML;
};
