import _Promise from "@babel/runtime-corejs3/core-js-stable/promise";
import "core-js/modules/es.promise.js";
// Обычный экспорт
export const sum = (a, b) => a + b;

// Квантовая функция (использует современный синтаксис)
export const quantumOperation = async () => {
  const result = await _Promise.resolve(42);
  return result * 2;
};

// Проверка режима сборки
console.log('Build mode:', process.env.QUANTUM_MODE ? 'QUANTUM' : 'REGULAR');