import { marked } from 'marked';

export const newtab = {
    extensions: [{
      name: 'link',
      renderer(token, href, title, text) {
        const lnk = marked.Renderer.prototype.link;
        const res = lnk(token.href, token.title, token.text);
        return res.replace("<a","<a target='_blank'");
      }
  }]
};
