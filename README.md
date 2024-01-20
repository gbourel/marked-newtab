# marked-newtab

[![npm](https://badgen.net/npm/v/marked-newtab)](https://www.npmjs.com/package/marked-newtab)

🔗 A [marked](https://github.com/markedjs/marked) extension thats adds `target="_blank"` attribute to links for new tab opening.

## Installation

```
npm install marked-newtab
```

## Usage

```javascript
import { newtab } from "marked-newtab";

marked.use(newtab);
```

### TODO

 * Add option to choose between **_blank** and **blank**
 * Add **noreferrer** option
 * Add inline markdown parser to allow "classic" links.
