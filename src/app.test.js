const { getUserById, connection } = require('./db');

describe('Testes para getUserById', () => {
  // Cria a tabela e insere usuários antes de executar os testes
  beforeAll(async () => {
    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY, 
        name VARCHAR(255), 
        email VARCHAR(255)
      )
    `);

    await connection.query(`
      INSERT INTO users (name, email) VALUES 
      ('Erica Silva', 'erica@mail.com'), 
      ('Natalia Santos', 'natalia@mail.com')
    `);
  });

  // Testa se retorna o usuário correto pelo ID
  test('deve retornar o usuário correto pelo ID', async () => {
    const user = await getUserById(1); // Busca o usuário com ID 1
    expect(user).toHaveProperty('name', 'Erica Silva'); // Verifica se o nome está correto
    expect(user).toHaveProperty('email', 'erica@mail.com'); // Verifica se o e-mail está correto
  });

  // Testa se retorna undefined para um ID que não existe
  test('deve retornar undefined se o usuário não existir', async () => {
    const user = await getUserById(999); // Busca um ID que não existe
    expect(user).toBeUndefined(); // Espera que o retorno seja undefined
  });

  // Limpa a tabela e encerra a conexão após os testes
  afterAll(async () => {
    await connection.query('DROP TABLE IF EXISTS users'); // Remove a tabela users
    await connection.end(); // Encerra a conexão após os testes
  });
});
