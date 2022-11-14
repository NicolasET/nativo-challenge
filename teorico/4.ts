// 4. Dada una lista de números enteros, imprima cuál es la suma de los números al cuadrado.

const nums = [1, 2, 3, 4, 5];
const result = nums.reduce((prev, curr) => prev + curr, 0);
Math.pow(result, 2);
