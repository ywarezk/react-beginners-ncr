"use strict";
/**
 * Using axios send a request to the following url:
 * http://nztodo.herokuapp.com/api/tasks/?format=json
 * print the json returned from the server
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
axios_1.default
    .get('https://nztodo.herokuapp.com/api/tasks/?format=json')
    .then(function (res) { return res.data; })
    .then(function (data) { return console.log(data); })
    .catch(function (err) {
    console.log(err);
});
//# sourceMappingURL=request.js.map