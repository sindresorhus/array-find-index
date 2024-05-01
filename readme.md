# array-find-index

> ES2015 [`Array#findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) [ponyfill](https://ponyfill.com)

## Install

```sh
npm install array-find-index
```

## Usage

```js
const arrayFindIndex = require('array-find-index');

arrayFindIndex(['rainbow', 'unicorn', 'pony'], x => x === 'unicorn');
//=> 1
```

## API

Same as `Array#findIndex()`, but with the input array as the first argument.
