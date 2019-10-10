// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Correct interpretation of multi line comments
es5id: 7.4_A2_T1
description: Create comments with any code
---*/

/*CHECK#1*/
/* throw new Test262Error('#1: Correct interpretation multi line comments');
*/

/*CHECK#2*/
var x = 0;
/* x = 1;*/
if (x !== 0) {
  throw new Test262Error('#2: var x = 0; /* x = 1;*/ x === 0. Actual: ' + (x));
}

//CHECK#3
var /* y = 1;*/
y;
if (y !== undefined) {
  throw new Test262Error('#3: var /* y = 1; */ \\n y; y === undefined. Actual: ' + (y));
}

//CHECK#4
var /* y = 1;*/ y;
if (y !== undefined) {
  throw new Test262Error('#4: var /* y = 1; */ y; y === undefined. Actual: ' + (y));
}

/*CHECK#5*/
/*var x = 1;
if (x === 1) {
  throw new Test262Error('#5: Correct interpretation multi line comments');
}
*/

/*CHECK#6*/
/*var this.y = 1;*/
this.y++;
if (isNaN(y) !== true) {
  throw new Test262Error('#6: /*var this.y = 1;*/ \\n this.y++; y === Not-a-Number. Actual: ' + (y));
}

//CHECK#7
var string = "/*var y = 0*/" /* y = 1;*/
if (string !== "/*var y = 0*/") {
throw new Test262Error('#7: var string = "/*var y = 0*/" /* y = 1;*/ string === "//var y = 0"');
}

//CHECK#8
var string = "/*var y = 0" /* y = 1;*/
if (string !== "/*var y = 0") {
throw new Test262Error('#8: var string = "/*var y = 0" /* y = 1;*/ string === "//var y = 0"');
}

/*CHECK#9*/
/** throw new Test262Error('#9: Correct interpretation multi line comments');
*/

/*CHECK#10*/
/* throw new Test262Error('#10: Correct interpretation multi line comments');
**/

/*CHECK#11*/
/****** throw new Test262Error('#11: Correct interpretation multi line comments');*********
***********
*


**********
**/
