// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    String.prototype.split (separator, limit) returns an Array object into which substrings of the result of converting this object to a string have
    been stored. If separator is a regular expression then
    inside of SplitMatch helper the [[Match]] method of R is called giving it the arguments corresponding
es5id: 15.5.4.14_A4_T11
description: Arguments are new RegExp and 0, and instance is String("hello")
---*/

var __string = new String("hello");

var __re = new RegExp;

var __split = __string.split(__re, 0);

var __expected = [];

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__split.constructor !== Array) {
  throw new Test262Error('#1: __split.constructor === Array. Actual: ' + __split.constructor);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__split.length !== __expected.length) {
  throw new Test262Error('#2: __split.length === __expected.length. Actual: ' + __split.length);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__split[0] !== __expected[0]) {
  throw new Test262Error('#3: __split[0] === ' + __expected[0] + '. Actual: ' + __split[index]);
}
//
//////////////////////////////////////////////////////////////////////////////
