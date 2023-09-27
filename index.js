"use strict";
const textEmptyError = "Error! No puedes no poner nada";
import {
  letters,
  words,
  upperString,
  titleString,
  backwardsLetters,
  backwardsWords,
  palindrome,
} from "./functions";

startApp();

function startApp() {
  const frase = prompt("Introduzca una frase");

  if (isEmptyOrSpaces(frase)) {
    alert(textEmptyError);
    return;
  }

  console.log(`Frase : "${frase}"`);
  console.log(`${letters(frase)} letras y ${words(frase)} palabras`);
  console.log(`${upperString(frase)}`);
  console.log(`${titleString(frase)}`);
  console.log(`${backwardsLetters(frase)}`);
  console.log(`${backwardsWords(frase)}`);
  console.log(`${palindrome(frase) ? "Sí" : "No"} es un palídromo`);
}

function isEmptyOrSpaces(str) {
  // https://stackoverflow.com/questions/10232366/how-to-check-if-a-variable-is-null-or-empty-string-or-all-whitespace-in-javascri
  return str === null || str.match(/^ *$/) !== null;
}
export { startApp };
