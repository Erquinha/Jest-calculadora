
const { somar, subtrair, multiplicar, dividir } = require ('./calculdora');

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
test('3- Verifica se parte do nome está presente', async () => {
  const user = await getUserById(1);
  // aqui veremos um matchers para buscar por parte do nome
  expect(user.name).toMatch(/Mar/);
  });
  test('4- Vai verificar o número máximo de caracteres no campo de email', async () => {
  const user = await getUserById(1);
  // Vamos rodar um teste e supor que o tamanho do campo tenha que ser menor ou igual a 50
  expect(user.email.length).toBeLessThanOrEqual(50);
  });
  test('5- Vai garantir que o campo email não seja null ou undefined', async () => {
  const user = await getUserById(1);
  expect(user.email).not.toBeNull();
  expect(user.email).not.toBeUndefined();
  });
  test('6- Vai garantir que o email está em um formato válido', async () => {
  const user = await getUserById(1);
  // Validação de Regex para o formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  expect(user.email).toMatch(emailRegex);
  });

