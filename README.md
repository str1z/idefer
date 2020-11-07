# idefer

Defers all instance methods.

## Installation

### Browser

```html
`<script src="https://cdn.jsdelivr.net/npm/idefer/idefer.min.js"><script/>`
```

### Node.js

```sh
npm i idefer
```

## Usage

```js
let io = new IO();
io.defer = idefer(io);
// all io methods will be added to the defer property.

io.defer.close();
// close function is now queued.
// Works with parameters!

io.wirte("Hello");
// do whatever you want here.

// executes all the deferred queued functions.
io.defer();
```
