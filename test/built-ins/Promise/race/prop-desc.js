// Copyright 2021 Sergey Rubanov.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 25.4.4.3_A1.2_T1
description: Promise.race property descriptor
info: |
    ES6 Section 17

    Every other data property described in clauses 18 through 26 and in Annex
    B.2 has the attributes { [[Writable]]: true, [[Enumerable]]: false,
    [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
---*/

verifyNotEnumerable(Promise, 'race');
verifyWritable(Promise, 'race');
verifyConfigurable(Promise, 'race');
