// 6. Dada una lista de números enteros, imprima un diccionario con el número de repeticiones para cada número en la lista.

const nums = [1, 2, 3, 3, 2, 2, 1, 1, 4, 5];
const result = nums.reduce((prev, curr) => {
  prev[curr] = ++prev[curr] || 1;
  return prev;
}, {});
