// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-promise-anysettled
description: The [[Extensible]] slot of Promise.anySettled Resolve Element functions
info: |
  17 ECMAScript Standard Built-in Objects:
    Unless specified otherwise, the [[Extensible]] internal slot
    of a built-in object initially has the value true.
features: [Promise.anySettled]
---*/

let resolveElementFunction;
let thenable = {
  then(fulfill) {
    resolveElementFunction = fulfill;
  }
};

function NotPromise(executor) {
  executor(() => {}, () => {});
}
NotPromise.resolve = function(v) {
  return v;
};
Promise.anySettled.call(NotPromise, [thenable]);

assert(Object.isExtensible(resolveElementFunction));
