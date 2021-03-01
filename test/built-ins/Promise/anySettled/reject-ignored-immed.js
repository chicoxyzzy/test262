// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    Resolved promises ignore rejections through immediate invocation of the
    provided resolving function
esid: sec-promise-anysettled
info: |
    [...]
    6. Let promiseCapability be NewPromiseCapability(C).
    [...]
    11. Let result be PerformPromiseAnySettled(iteratorRecord, promiseCapability, C).
    [...]

    25.4.4.3.1 Runtime Semantics: PerformPromiseAnySettled
    1. Repeat
       [...]
       j. Let result be Invoke(nextPromise, "then",
          «promiseCapability.[[Resolve]], promiseCapability.[[Reject]]»).

    25.4.1.3.1 Promise Reject Functions
    [...]
    2. Let promise be the value of F's [[Promise]] internal slot.
    3. Let alreadyResolved be the value of F's [[AlreadyResolved]] internal
       slot.
    4. If alreadyResolved.[[value]] is true, return undefined.
flags: [async]
features: [Promise.anySettled]
---*/

var fulfiller = {
  then: function(resolve) {
    resolve();
  }
};
var rejector = {
  then: function(_, reject) {
    reject();
  }
};

Promise.anySettled([fulfiller, rejector])
  .then(function() {
    $DONE();
  }, function() {
    $DONE('The promise should not be rejected.');
  });
