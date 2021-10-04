"use strict";
/**
 * Create an array of strings.
 * map that array of strings to array of numbers, based on the length of each string
 * Iterate on the array of objects and print it
 */
// create array of strings
var names = ['Yariv', 'Katz', 'Piglet', 'Chaitovski', 'Sweetness', 'fluffy belly'];
// map the array of string to array of the length of the strings
var namesLength = names.map(function (name) {
    return name.length;
});
// print that array
for (var _i = 0, namesLength_1 = namesLength; _i < namesLength_1.length; _i++) {
    var len = namesLength_1[_i];
    console.log(len);
}
//# sourceMappingURL=array.js.map