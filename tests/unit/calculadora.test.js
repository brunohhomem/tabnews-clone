const calculadora = require("../../models/calculadora");

test("somar 2 + 2 = 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 2 + 2 = 4", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});
