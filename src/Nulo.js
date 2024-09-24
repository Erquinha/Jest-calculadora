test('nulo' ,() => {

    const n = null;
    expect(n).ToBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();

});

test('zero' , () => {
    const z = 0;
    expect(z).not.ToBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();

});

test ('array tem o comprimento correto' , () => {
    const frutas = ['maçã', 'banana','laranja' ];
    expect(frutas).toHaveLength(3);
});

test('string tem o comprimento correto', () => {
    const mensagem = "Olá mundo!";
    expect(mensagem).toHaveLength(12);
});

test('dois mais dois', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5)


    //toBe e toEqual são equivalentes para numeros
    expect(value).toBe(4);
    expect(value).ToEqual(4);
});

test('adicionando números de poto flutuante', () => {
    const value = 0.1+0.2;
    //expect(value).toBe(0.3);     Isso não vai funcionar por causa de um erro de arredondamento
    expect(value).toBeCloseTo(0.3); //isso funciuona.
});

test('não existe I em team' , () => {
 expect ('team').not.toMach(/I/);
});

test('mais existe"stop" em Christoph', () => {
    expect('Christoph').toMach(/stop/);
});

const shoppingList = [
    'Fraldas',
    'kleenex',
    'saco de lixo',
    'papel toalha',
    'leite',
];

test('a lista de compras tem leite nela', () =>{
    expect(shoppingList).toContain('leite');
    expect(new Set(shoppingList).toContain('leite')
)
});