// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
esid: sec-promise-anysettled
author: Sam Mikes
description: Promise.anySettled([p1, p2]) settles when first settles
flags: [async]
features: [Promise.anySettled]
---*/

var resolveP1, rejectP2,
  p1 = new Promise(function(resolve) {
    resolveP1 = resolve;
  }),
  p2 = new Promise(function(resolve, reject) {
    rejectP2 = reject;
  });

rejectP2(new Error("Promise.anySettled should not see this if P1 already resolved"));
resolveP1(1);

Promise.anySettled([p1, p2]).then(function(arg) {
  if (arg !== 1) {
    $ERROR("Expected fulfillment with 1, got " + arg);
  }
}).then($DONE, $DONE);
