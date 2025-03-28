import { sum, quantumOperation } from './dist-quantum/index.js';

console.log('2 + 3 =', sum(2, 3));
quantumOperation().then(res => console.log('Quantum result:', res));
