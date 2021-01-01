# array-find-index

> ES2015 [`Array#findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) [ponyfill](https://ponyfill.com)


## Install

```
$ npm install --save array-find-index
```


## Usage

```js
const arrayFindIndex = require('array-find-index');

arrayFindIndex(['rainbow', 'unicorn', 'pony'], x => x === 'unicorn');
//=> 1
```


## API

Same as `Array#findIndex()`, but with the input array as the first argument.


---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-array-find-index?utm_source=npm-array-find-index&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
