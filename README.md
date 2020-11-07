# idefer

Defers all instance methods.

## Installation

Browser
`<script src="https://cdn.jsdelivr.net/npm/idefer/idefer.min.js"><script/>`

Node.js
`npm i idefer`

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
