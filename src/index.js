
function cleanUrl(href) {
  try {
    return href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }
}

export const newtab = {
    extensions: [{
      name: 'link',
      renderer(token) {
        const href = cleanUrl(token.href);
        if (href === null) { return token.text; }
        return `<a href="${href}" title="${token.title || ''}" target="_blank">${token.text}</a>`;
      }
  }]
};
