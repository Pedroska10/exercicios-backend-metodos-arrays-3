const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];

const numerosEmOrdemCrescente = numeros.sort(function (a, b) {
  return a - b;
});

console.log(numerosEmOrdemCrescente);

const numerosEmOrdemDecrescente = numeros.sort(function (a, b) {
  return b - a;
});

console.log(numerosEmOrdemDecrescente);

const numerosEmOrdemCrescenteUnicode = numeros.sort();

console.log(numerosEmOrdemCrescenteUnicode);

const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

const frutasEmOrdemAlfabetica = frutas.sort(function (a, b) {
  if (a.toLocaleLowerCase() > b.toLocaleLowerCase()) {
    return 1;
  }
  if (a.toLocaleLowerCase() < b.toLocaleLowerCase()) {
    return -1;
  }
  return 0;
});

console.log(frutasEmOrdemAlfabetica);

const frutasEmOrdemAlfabeticaDescrescente = frutas.sort(function (a, b) {
  if (a.toLocaleLowerCase() > b.toLocaleLowerCase()) {
    return -1;
  }
  if (a.toLocaleLowerCase() < b.toLocaleLowerCase()) {
    return 1;
  }
  return 0;
});

console.log(frutasEmOrdemAlfabeticaDescrescente);

const frutasEmOrdemAlfabeticaPorCaracteres = frutas.sort(function (a, b) {
  if (a.length > b.length) {
    return 1;
  }
  if (a.length < b.length) {
    return -1;
  }
  return 0;
});

console.log(frutasEmOrdemAlfabeticaPorCaracteres);
