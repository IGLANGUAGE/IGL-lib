"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.sum = exports.quantumOperation = void 0;
var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));
// Обычный экспорт
const sum = (a, b) => a + b;

// Квантовая функция (использует современный синтаксис)
exports.sum = sum;
const quantumOperation = async () => {
  const result = await _promise.default.resolve(42);
  return result * 2;
};

// Проверка режима сборки
exports.quantumOperation = quantumOperation;
console.log('Build mode:', process.env.QUANTUM_MODE ? 'QUANTUM' : 'REGULAR');