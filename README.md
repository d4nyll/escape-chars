# special-escape

Escape special characters in a string

## Installation

[![NPM](https://nodei.co/npm/special-escape.png?compact=true)](https://nodei.co/npm/special-escape/)

`special-escape` is published at [npmjs.com](https://www.npmjs.com/), and can be installed using [`npm`](https://docs.npmjs.com/cli/npm) or [`yarn`](https://yarnpkg.com/lang/en/).

```bash
$ npm install special-escape  # npm
$ yarn add special-escape     # yarn
```

```js
import resolveWhen from 'special-escape';       // ES6+
const resolveWhen = require('special-escape');  // ES5
```

## Usage

```js
const specialChars = ['+', '-', '=', '>', '.', '!', '(', ')', '{', '}', '[', ']', '^', '"', '~', '*', '?', ':', '\\', '/',]

const escapedString = escapeChars('$2a$10$!NgGQwxmjy..4aQTdsOJw\\O7HUd6FfiFQ2e/2F6XJQh1PeZjWlEbmK', specialChars);

assert(escapedString, '$2a$10$\!NgGQwxmjy\.\.4aQTdsOJw\\O7HUd6FfiFQ2e\/2F6XJQh1PeZjWlEbmK');
```