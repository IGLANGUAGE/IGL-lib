"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = require("../src/math"); // Убрали .js
test('adds 1 + 2 to equal 3', function () {
    expect((0, math_1.add)(1, 2)).toBe(3);
});
