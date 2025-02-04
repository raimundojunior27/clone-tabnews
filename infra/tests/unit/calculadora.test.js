const calculadora = require("../../../models/calculadora.js");

test("somar 2 + 2 retorna 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 5 + 100 retorna 105", () => {
  const resultado = calculadora.somar(100, 5);
  expect(resultado).toBe(105);
});

test("somar 'banana' + 100 retorna 'Erroo'", () => {
  const resultado = calculadora.somar("banana", 5);
  expect(resultado).toBe("Erro");
});
