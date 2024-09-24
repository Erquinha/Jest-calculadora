
const { somar, subtrair, multiplicar, dividir } = require('./calculadora');

test('Soma de dois números', () => {
  expect(somar(1, 2)).toBe(3);
});

test('Subtração de dois números', () => {
  expect(subtrair(5, 3)).toBe(2);
});

test('Multiplicação de dois números', () => {
  expect(multiplicar(3, 4)).toBe(12);
});

test('Divisão de dois números', () => {
  expect(dividir(10, 2)).toBe(5);
});

test('Divisão por zero deve lançar erro', () => {
  expect(() => dividir(10, 0)).toThrow("Divisão por zero não é permitida");
});

test('Operações combinadas', () => {
  const resultado = somar(multiplicar(2, 3), subtrair(10, 5));
  expect(resultado).toBe(11); 
});


