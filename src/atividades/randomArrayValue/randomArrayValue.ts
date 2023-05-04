import { ErrorGetValues } from "./error.enum";

export const produtos1: any = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.99 },
  { nome: "Estojo", qtde: 7, preco: 9.99 },
  { nome: "Teclado", qtde: 2, preco: 609.99 },
  { nome: "Tenis", qtde: 3, preco: 350.99 },
  { nome: "Fone", qtde: 5, preco: 198.99 },
  { nome: "Mochila", qtde: 15, preco: 150.99 },
];

export function getRandomObjects(array, numberOfRandomObjects) {
  if( typeof numberOfRandomObjects  !== "number") return ErrorGetValues.NOT_NUMBER
  if( numberOfRandomObjects <= 0) return ErrorGetValues.UNDER_MIN
  if( numberOfRandomObjects > array.length) return ErrorGetValues.OVER_LIMIT
  let result: any = [];
  while (result.length < numberOfRandomObjects) {
    let randomIndex = Math.floor(Math.random() * array.length);
    let randomObject: any = array[randomIndex];
    if (!result.includes(randomObject)) {
      result.push(randomObject);
    }
  }
  return result;
}
