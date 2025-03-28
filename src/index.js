// Обычный экспорт
export const sum = (a, b) => a + b;

// Квантовая функция (использует современный синтаксис)
export const quantumOperation = async () => {
  const result = await Promise.resolve(42);
  return result * 2;
};

// Проверка режима сборки
console.log('Build mode:', process.env.QUANTUM_MODE ? 'QUANTUM' : 'REGULAR');
