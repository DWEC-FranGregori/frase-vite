"use strict";

function letters(cadena) {
  return String(cadena).length;
}

function words(cadena) {
  return String(cadena).split(" ").length;
}

function upperString(cadena) {
  return String(cadena).toUpperCase();
}

function titleString(cadena) {
  let wordsArray = String(cadena).split(" ");
  wordsArray = wordsArray.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return wordsArray.join(" ");
}

function backwardsLetters(cadena) {
  return String(cadena).split("").reverse().join("");
}

function backwardsWords(cadena) {
  return String(cadena).split(" ").reverse().join(" ");
}

function palindrome(cadena) {
  // https://stackoverflow.com/questions/6507056/replace-all-whitespace-characters
  // También cabe la posibilidad de usar el bucle map, como hice en la funcion titleString
  const textCleanned = deleteDiacritialText(
    String(cadena).toLowerCase().replace(/\s+/g, "")
  );
  return textCleanned === backwardsLetters(textCleanned);
}

function deleteDiacritialText(cadena) {
  // https://es.stackoverflow.com/questions/62031/eliminar-signos-diacr%C3%ADticos-en-javascript-eliminar-tildes-acentos-ortogr%C3%A1ficos
  return cadena
    .normalize("NFD")
    .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, "$1$2")
    .normalize();
}

export {
  letters,
  words,
  upperString,
  titleString,
  backwardsLetters,
  backwardsWords,
  palindrome,
};
