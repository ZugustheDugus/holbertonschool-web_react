"use strict";
/// <reference path = "./crud.d.ts" />
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var CRUD = require("./crud.js");
var row = {
    firstName: 'Guillame',
    lastName: 'Salva'
};
var newRowID = CRUD.insertRow(row);
var updatedRow = __assign(__assign({}, row), { age: 23 });
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
// reference path >>> "./crud.d.ts />"
