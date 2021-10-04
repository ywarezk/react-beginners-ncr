"use strict";
/**
 * Create a function that takes an object
 * and print the key and value of that object
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.printObj = void 0;
function printObj(obj) {
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
        console.log("The key is: " + key + " and the value is: " + obj[key]);
    }
}
exports.printObj = printObj;
//# sourceMappingURL=modules-a.js.map